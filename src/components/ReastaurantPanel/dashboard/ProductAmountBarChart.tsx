import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included

// Define the types for the chart options
interface ChartOptions {
  chart: {
    type: string;
  };
  title: {
    text: string;
  };
  xAxis: {
    categories: string[];
  };
  yAxis: {
    title: {
      text: string;
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
}

const ProductAmountBarChart: React.FC = () => {
  // State for time period and product filter selection
  const [timePeriod, setTimePeriod] = useState<string>('Weekly');
  const [productFilter, setProductFilter] = useState<string>('quantity'); // default filter

  // Highcharts chart options
  const chartOptions: ChartOptions = {
    chart: {
      type: 'bar',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'Sales',
        data: [1, 2, 3, 4, 5], // Example data (could be dynamic)
      },
    ],
  };

  // Handle time period change
  const handleTimePeriodChange = (value: string) => {
    setTimePeriod(value);
  };

  // Handle product filter change
  const handleProductFilterChange = (value: string) => {
    setProductFilter(value);
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12">
      {/* Loader (hidden by default) */}
      <div
        className="LoaderDiv_DashboardRestaurantCommonClass"
        id="LoaderDiv_DashboardRestaurant_4"
        style={{
          opacity: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2147483647,
          display: 'none', // loader hidden by default
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999999999999999,
            opacity: 0.4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="../../Content/Images/Loader.gif" alt="loading" style={{ width: '50px' }} />
        </div>
      </div>

      {/* Product Analysis Graph Card */}
      <div className="wraps_dashbords graph_wrapsproduts" style={{ padding: '12px' }}>
        {/* Time Period Dropdown */}
        <div className="wrap_dropsdowns" id="productCard2_graphfilter" style={{ zIndex: 4 }}>
          <Dropdown style={{ marginBottom: '10px' }}>
            <Dropdown.Toggle variant="secondary" id="time-period-dropdown">
              {timePeriod}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {['Yearly', 'Monthly', 'Weekly', 'Daily'].map((period) => (
                <Dropdown.Item
                  key={period}
                  active={timePeriod === period}
                  onClick={() => handleTimePeriodChange(period)}
                >
                  {period}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Product Filter Dropdown */}
        <div className="d-flex flex-column" style={{ height: '100%' }}>
          <div className="p-0" style={{ height: '26px', marginTop: '10px' }}>
            <div className="wrap_dropsdownq">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="product-filter-dropdown" style={{ width: 'auto' }}>
                  {productFilter === 'quantity'
                    ? 'Product by Quantity'
                    : productFilter === 'amount'
                    ? 'Product by Amount'
                    : 'Product by Profit'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {['quantity', 'amount', 'profit'].map((filter) => (
                    <Dropdown.Item
                      key={filter}
                      active={productFilter === filter}
                      onClick={() => handleProductFilterChange(filter)}
                    >
                      {`Product by ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* Highcharts Graph */}
          <div
            id="graph_product_card2_Dashboard"
            style={{
              minWidth: '100%',
              height: '240px',
              overflow: 'hidden',
            }}
            aria-hidden="false"
            role="region"
            aria-label="Chart. Highcharts interactive chart."
          >
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAmountBarChart;
