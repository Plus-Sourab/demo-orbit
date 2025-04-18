import React from "react";
import TotalSalesCards from "../../components/ReastaurantPanel/dashboard/TotalSalesCards";
import IncomeLineChart from "../../components/ReastaurantPanel/dashboard/IncomeLineChart";
import TransactionPieChartComponent from "../../components/ReastaurantPanel/dashboard/TransactionPieChartComponent";
import ProductQuantityBarChart from "../../components/ReastaurantPanel/dashboard/ProductQuntityBarChart";
import ProductAmountBarChart from "../../components/ReastaurantPanel/dashboard/ProductAmountBarChart";
import DepartmentPieChart from "../../components/ReastaurantPanel/dashboard/DepartmentPieChart";
import OrderStatsCard from "../../components/ReastaurantPanel/dashboard/OrderStatsCard";
import HourlySaleCard from "../../components/ReastaurantPanel/dashboard/HourlySaleCard";
import SaleByDeviceTypeChart from "../../components/ReastaurantPanel/dashboard/SaleByDeviceTypeChart";

const Dashboard: React.FC = () => {
  return (
    <div id="contentWrapper_RestaurantLayout" className="content-wrapper">
      <div className="wrap_dashboard">
        <p>Welcome Back!</p>
      </div>

      <div
        className="col-md-12 col-lg-12 col-sm-12"
        id="ddlFranchicse_RedirectOption_HeadOfficeDashboard"
      ></div>
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="row">
          <TotalSalesCards />

          <IncomeLineChart />

          <TransactionPieChartComponent />

          <ProductQuantityBarChart />

          <ProductAmountBarChart />

          <DepartmentPieChart />

          <OrderStatsCard />

          <HourlySaleCard />

          <SaleByDeviceTypeChart />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
