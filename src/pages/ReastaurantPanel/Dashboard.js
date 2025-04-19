import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TotalSalesCards from "../../components/ReastaurantPanel/dashboard/TotalSalesCards";
import IncomeLineChart from "../../components/ReastaurantPanel/dashboard/IncomeLineChart";
import TransactionPieChartComponent from "../../components/ReastaurantPanel/dashboard/TransactionPieChartComponent";
import ProductQuantityBarChart from "../../components/ReastaurantPanel/dashboard/ProductQuntityBarChart";
import ProductAmountBarChart from "../../components/ReastaurantPanel/dashboard/ProductAmountBarChart";
import DepartmentPieChart from "../../components/ReastaurantPanel/dashboard/DepartmentPieChart";
import OrderStatsCard from "../../components/ReastaurantPanel/dashboard/OrderStatsCard";
import HourlySaleCard from "../../components/ReastaurantPanel/dashboard/HourlySaleCard";
import SaleByDeviceTypeChart from "../../components/ReastaurantPanel/dashboard/SaleByDeviceTypeChart";
const Dashboard = () => {
    return (_jsxs("div", { id: "contentWrapper_RestaurantLayout", className: "content-wrapper", children: [_jsx("div", { className: "wrap_dashboard", children: _jsx("p", { children: "Welcome Back!" }) }), _jsx("div", { className: "col-md-12 col-lg-12 col-sm-12", id: "ddlFranchicse_RedirectOption_HeadOfficeDashboard" }), _jsx("div", { className: "col-md-12 col-lg-12 col-sm-12", children: _jsxs("div", { className: "row", children: [_jsx(TotalSalesCards, {}), _jsx(IncomeLineChart, {}), _jsx(TransactionPieChartComponent, {}), _jsx(ProductQuantityBarChart, {}), _jsx(ProductAmountBarChart, {}), _jsx(DepartmentPieChart, {}), _jsx(OrderStatsCard, {}), _jsx(HourlySaleCard, {}), _jsx(SaleByDeviceTypeChart, {})] }) })] }));
};
export default Dashboard;
