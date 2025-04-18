import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Dropdown } from 'react-bootstrap';

// Sample data for the chart (for Weekly, Monthly, and Yearly)
const chartData = {
  weekly: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        name: 'Income',
        data: [120, 135, 145, 160, 170, 180, 200],
      },
      {
        name: 'Expenses',
        data: [100, 110, 120, 125, 130, 140, 150],
      },
    ],
  },
  monthly: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      {
        name: 'Income',
        data: [1200, 1350, 1450, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400],
      },
      {
        name: 'Expenses',
        data: [1000, 1100, 1200, 1250, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000],
      },
    ],
  },
  yearly: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
    series: [
      {
        name: 'Income',
        data: [12000, 13000, 14000, 15000, 16000],
      },
      {
        name: 'Expenses',
        data: [10000, 11000, 12000, 13000, 14000],
      },
    ],
  },
};

const IncomeLineChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('weekly');

  const handleDropdownSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 195,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: chartData[selectedPeriod].categories,
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
      },
    },
    series: chartData[selectedPeriod].series as Highcharts.SeriesOptionsType[],
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-sm-12">

      {/* Loader */}
      <div className="LoaderDiv_DashboardRestaurantCommonClass" style={{ display: 'none' }}>
        <div className="d-flex align-items-center justify-content-center">
          <img src="../../Content/Images/Loader.gif" alt="Loading..." />
        </div>
      </div>

      {/* Graph Income */}
      <div className="wraps_dashbords graphss" style={{ height: '335px' }}>
        <div className="d-flex flex-column" style={{ height: '100%' }}>
          <div className="p-2 income-bx">
            Income
            <Dropdown className="btn-group btn-group1 wrap_dropsdowns" style={{ zIndex: 4 }}>
              <Dropdown.Toggle variant="secondary" id="incomeLineChart_graphfilter" className="dropdown-toggle">
                <span className="selected-text">
                  {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item
                  eventKey="yearly"
                  onClick={() => handleDropdownSelect('yearly')}
                  active={selectedPeriod === 'yearly'}
                >
                  Yearly
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="monthly"
                  onClick={() => handleDropdownSelect('monthly')}
                  active={selectedPeriod === 'monthly'}
                >
                  Monthly
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="weekly"
                  onClick={() => handleDropdownSelect('weekly')}
                  active={selectedPeriod === 'weekly'}
                >
                  Weekly
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div id="income_data_incomeLineChart" className="text-right mr-5">
            <span id="income_value_incomeLineChart">$861.1</span>
            <span id="income_change_percentage_incomeLineChart" className="text-red-custom">
              -94.62%{' '}
              <span className="material-symbols-outlined" style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                arrow_downward
              </span>
            </span>
          </div>
          <div id="graph_income_dashboard" style={{ width: '100%', height: '195px', overflow: 'hidden' }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeLineChart;
