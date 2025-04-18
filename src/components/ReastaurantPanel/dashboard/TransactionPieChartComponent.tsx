import React, { useState } from 'react';
import Highcharts, { Options, SeriesPieOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Dropdown } from 'react-bootstrap';

type ChartDataItem = {
  name: string;
  y: number;
};

type ChartData = {
  title: string;
  data: ChartDataItem[];
};

type TransactionPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';

const chartDataForTransactionPeriod: Record<TransactionPeriod, ChartData> = {
  daily: {
    title: 'Daily Transactions',
    data: [
      { name: 'Income', y: 50 },
      { name: 'Expenses', y: 30 },
      { name: 'Profit', y: 20 },
    ],
  },
  weekly: {
    title: 'Weekly Transactions',
    data: [
      { name: 'Income', y: 200 },
      { name: 'Expenses', y: 150 },
      { name: 'Profit', y: 50 },
    ],
  },
  monthly: {
    title: 'Monthly Transactions',
    data: [
      { name: 'Income', y: 800 },
      { name: 'Expenses', y: 600 },
      { name: 'Profit', y: 200 },
    ],
  },
  yearly: {
    title: 'Yearly Transactions',
    data: [
      { name: 'Income', y: 9600 },
      { name: 'Expenses', y: 7200 },
      { name: 'Profit', y: 2400 },
    ],
  },
};

const TransactionPieChartComponent: React.FC = () => {
  const [selectedTransactionPeriod, setSelectedTransactionPeriod] = useState<TransactionPeriod>('weekly');
  const [isTransactionChartLoading, setIsTransactionChartLoading] = useState<boolean>(false);

  const handleTransactionDropdownSelect = (selectedPeriod: TransactionPeriod) => {
    setIsTransactionChartLoading(true);
    setSelectedTransactionPeriod(selectedPeriod);
    setTimeout(() => {
      setIsTransactionChartLoading(false);
    }, 500); // Simulating a delay in loading the data
  };

  const transactionChartOptions: Options = {
    chart: {
      type: 'pie',
      height: 240,
    },
    title: {
      text: chartDataForTransactionPeriod[selectedTransactionPeriod].title,
    },
    series: [
      {
        type: 'pie',
        name: 'Transactions',
        colorByPoint: true, 
        data: chartDataForTransactionPeriod[selectedTransactionPeriod].data,
      } as SeriesPieOptions,
    ],
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12">
      {isTransactionChartLoading && (
        <div className="LoaderDiv_DashboardRestaurantCommonClass" style={{ opacity: 1, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2147483647 }}>
          <div style={{ backgroundColor: '#ffffff', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999999999999999, opacity: 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="../../Content/Images/Loader.gif" style={{ backgroundColor: '#ffffff', width: '50px' }} alt="Loading..." />
          </div>
        </div>
      )}

      <div className="wraps_dashbords graph_wrapsproduts" style={{ padding: '12px' }}>
        <div className="btn-group btn-group1 wrap_dropsdowns" style={{ zIndex: 4 }}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="transaction_graphfilter">
              <span className="selected-text">{selectedTransactionPeriod.charAt(0).toUpperCase() + selectedTransactionPeriod.slice(1)}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {(['daily', 'weekly', 'monthly', 'yearly'] as TransactionPeriod[]).map(period => (
                <Dropdown.Item
                  key={period}
                  eventKey={period}
                  onClick={() => handleTransactionDropdownSelect(period)}
                  active={selectedTransactionPeriod === period}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex flex-column" style={{ height: '100%' }}>
          <div className="p-0" style={{ height: '26px' }}>
            <h3 className="graph_heading">Transactions</h3>
          </div>
          <div id="graph_transactions_card_Dashboard" style={{ minWidth: '100%', height: '240px' }}>
            <HighchartsReact highcharts={Highcharts} options={transactionChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPieChartComponent;
