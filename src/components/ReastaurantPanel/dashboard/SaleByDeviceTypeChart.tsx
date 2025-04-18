import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const SaleByDeviceTypeChart: React.FC = () => {
  const [selectedTransactionPeriod, setSelectedTransactionPeriod] =
    useState<string>("weekly");

  const handleDropdownSelect = (value: string) => {
    setSelectedTransactionPeriod(value);
  };

  const chartOptions = {
    chart: {
      type: "pie",
      height: "240px",
    },
    title: {
      text: "",
    },
    plotOptions: {
      pie: {
        innerSize: "50%", // Make it a donut chart
        depth: 45,
      },
    },
    series: [
      {
        name: "Devices",
        data: [
          ["POS", 100],
          ["KIOSK", 0],
        ],
      },
    ],
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12">
      <div
        className="LoaderDiv_DashboardRestaurantCommonClass"
        style={{
          opacity: 1,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2147483647,
          display: "none",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999999999999999,
            opacity: 0.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="../../Content/Images/Loader.gif"
            style={{ backgroundColor: "#ffffff", width: "50px" }}
            alt="Loader"
          />
        </div>
      </div>

      {/* Dropdown for time periods */}
      <div className="btn-group btn-group1 wrap_dropsdowns" style={{ zIndex: 4 }}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="transaction_graphfilter">
            <span className="selected-text">
              {selectedTransactionPeriod.charAt(0).toUpperCase() +
                selectedTransactionPeriod.slice(1)}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              eventKey="daily"
              onClick={() => handleDropdownSelect("daily")}
              active={selectedTransactionPeriod === "daily"}
            >
              Daily
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="weekly"
              onClick={() => handleDropdownSelect("weekly")}
              active={selectedTransactionPeriod === "weekly"}
            >
              Weekly
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="monthly"
              onClick={() => handleDropdownSelect("monthly")}
              active={selectedTransactionPeriod === "monthly"}
            >
              Monthly
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="yearly"
              onClick={() => handleDropdownSelect("yearly")}
              active={selectedTransactionPeriod === "yearly"}
            >
              Yearly
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="wraps_dashbords graph_wrapsproduts" style={{ padding: "12px" }}>
        <div className="d-flex flex-column" style={{ height: "100%" }}>
          <div className="p-0" style={{ height: "26px" }}>
            <h3 className="graph_heading">Sale By Device Type</h3>
          </div>
          <div>
            <div
              id="graph_ServiceSale_card_Dashboard"
              style={{ minWidth: "100%", height: "240px", overflow: "hidden" }}
            >
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleByDeviceTypeChart;
