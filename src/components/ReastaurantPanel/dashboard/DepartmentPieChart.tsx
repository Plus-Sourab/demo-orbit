import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dropdown } from "react-bootstrap";

// Type for the chart data
type ChartData = {
  title: string;
  data: { name: string; y: number }[];
};

const chartDataForTransactionPeriod: { [key: string]: ChartData } = {
  daily: {
    title: "Daily Transactions",
    data: [
      { name: "Income", y: 50 },
      { name: "Expenses", y: 30 },
      { name: "Profit", y: 20 },
    ],
  },
  weekly: {
    title: "",
    data: [
      { name: "Income", y: 200 },
      { name: "Expenses", y: 150 },
      { name: "Profit", y: 50 },
    ],
  },
  monthly: {
    title: "Monthly Transactions",
    data: [
      { name: "Income", y: 800 },
      { name: "Expenses", y: 600 },
      { name: "Profit", y: 200 },
    ],
  },
  yearly: {
    title: "Yearly Transactions",
    data: [
      { name: "Income", y: 9600 },
      { name: "Expenses", y: 7200 },
      { name: "Profit", y: 2400 },
    ],
  },
};

const DepartmentPieChart: React.FC = () => {
  const [selectedTransactionPeriod, setSelectedTransactionPeriod] = useState<string>("weekly");
  const [isTransactionChartLoading, setIsTransactionChartLoading] = useState<boolean>(false);
  const [productFilter, setProductFilter] = useState<string>("quantity"); // default filter

  const handleTransactionDropdownSelect = (selectedPeriod: string): void => {
    setIsTransactionChartLoading(true);
    setSelectedTransactionPeriod(selectedPeriod);
    setTimeout(() => {
      setIsTransactionChartLoading(false);
    }, 500); // Simulating a delay in loading the data
  };

  const handleProductFilterChange = (filter: string): void => {
    setProductFilter(filter);
  };

  const transactionChartOptions = {
    chart: {
      type: "pie",
      height: 240,
    },
    title: {
      text: chartDataForTransactionPeriod[selectedTransactionPeriod].title,
    },
    series: [
      {
        name: "Transactions",
        colorByPoint: true,
        data: chartDataForTransactionPeriod[selectedTransactionPeriod].data,
      },
    ],
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12">
      {/* Loader */}
      {isTransactionChartLoading && (
        <div
          className="LoaderDiv_DashboardRestaurantCommonClass"
          style={{
            opacity: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2147483647,
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
              alt="Loading..."
            />
          </div>
        </div>
      )}

      <div className="wraps_dashbords graph_wrapsproduts" style={{ padding: "12px" }}>
        <div className="d-flex justify-content-between">
          <div className="wrap_dropsdownq">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="product-filter-dropdown" style={{ width: "auto" }}>
                {productFilter === "quantity" ? "Department" : productFilter === "amount" ? "" : ""}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {["department", "main department"].map((filter) => (
                  <Dropdown.Item
                    key={filter}
                    active={productFilter === filter}
                    onClick={() => handleProductFilterChange(filter)}
                  >
                    {` ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* Dropdown for time periods */}
          <div className="btn-group btn-group1 wrap_dropsdowns" style={{ zIndex: 4 }}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="transaction_graphfilter">
                <span className="selected-text">
                  {selectedTransactionPeriod.charAt(0).toUpperCase() + selectedTransactionPeriod.slice(1)}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey="daily"
                  onClick={() => handleTransactionDropdownSelect("daily")}
                  active={selectedTransactionPeriod === "daily"}
                >
                  Daily
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="weekly"
                  onClick={() => handleTransactionDropdownSelect("weekly")}
                  active={selectedTransactionPeriod === "weekly"}
                >
                  Weekly
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="monthly"
                  onClick={() => handleTransactionDropdownSelect("monthly")}
                  active={selectedTransactionPeriod === "monthly"}
                >
                  Monthly
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="yearly"
                  onClick={() => handleTransactionDropdownSelect("yearly")}
                  active={selectedTransactionPeriod === "yearly"}
                >
                  Yearly
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Graph Section */}
        <div className="d-flex flex-column" style={{ height: "100%" }}>
          <div
            id="graph_transactions_card_Dashboard"
            style={{ minWidth: "100%", height: "240px" }}
          >
            <HighchartsReact highcharts={Highcharts} options={transactionChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPieChart;
