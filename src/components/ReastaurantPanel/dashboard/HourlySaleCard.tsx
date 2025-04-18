import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Dropdown } from 'react-bootstrap';

// Define types for date handling and state
type DropdownOption = 'Today' | 'CustomDate';

const HourlySaleCard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('10/01/2024');
  const [isCustomDate, setIsCustomDate] = useState<boolean>(false);

  const handleDateSelection = (dateValue: string) => {
    if (dateValue === 'CustomDate') {
      setIsCustomDate(true);
    } else {
      setIsCustomDate(false);
      setSelectedDate(dateValue === 'Today' ? 'Today' : '10/01/2024');
    }
  };

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5'],
    },
    yAxis: {
      title: {
        text: 'Sales Amount',
      },
    },
    series: [
      {
        name: 'Sales',
        data: [120, 150, 180, 140, 110], // Dummy data, replace with dynamic data
      },
    ],
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12">
      {/* Loader */}
      <div
        className="LoaderDiv_DashboardRestaurantCommonClass"
        id="LoaderDiv_DashboardRestaurant_8"
        style={{
          opacity: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2147483647,
          display: 'none',
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
          <img
            src="../../Content/Images/Loader.gif"
            alt="Loading"
            style={{
              backgroundColor: '#ffffff',
              width: '50px',
            }}
          />
        </div>
      </div>

      {/* Dropdown Menu for Date Selection */}
      <div className="btn-group btn-group1 wrap_dropsdowns" style={{ zIndex: 4 }}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="transaction_graphfilter">
            <span className="selected-text"> {selectedDate}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              eventKey="Today"
              onClick={() => handleDateSelection('Today')}
            >
              Today
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="CustomDate"
              onClick={() => handleDateSelection('CustomDate')}
            >
              Custom Date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Hourly Sale Card */}
      <div className="wraps_dashbords graph_wrapsproduts" style={{ padding: '12px' }}>
        <div className="d-flex flex-column" style={{ height: '100%' }}>
          <div className="p-0" style={{ height: '26px' }}>
            <h3 className="graph_heading">Hourly Sale</h3>
          </div>
          {/* Highcharts Graph */}
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default HourlySaleCard;
