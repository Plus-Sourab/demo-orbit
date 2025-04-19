import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dropdown } from "react-bootstrap";
const chartDataForTransactionPeriod = {
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
const DepartmentPieChart = () => {
    const [selectedTransactionPeriod, setSelectedTransactionPeriod] = useState("weekly");
    const [isTransactionChartLoading, setIsTransactionChartLoading] = useState(false);
    const [productFilter, setProductFilter] = useState("quantity"); // default filter
    const handleTransactionDropdownSelect = (selectedPeriod) => {
        setIsTransactionChartLoading(true);
        setSelectedTransactionPeriod(selectedPeriod);
        setTimeout(() => {
            setIsTransactionChartLoading(false);
        }, 500); // Simulating a delay in loading the data
    };
    const handleProductFilterChange = (filter) => {
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
    return (_jsxs("div", { className: "col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12", children: [isTransactionChartLoading && (_jsx("div", { className: "LoaderDiv_DashboardRestaurantCommonClass", style: {
                    opacity: 1,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2147483647,
                }, children: _jsx("div", { style: {
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
                    }, children: _jsx("img", { src: "../../Content/Images/Loader.gif", style: { backgroundColor: "#ffffff", width: "50px" }, alt: "Loading..." }) }) })), _jsxs("div", { className: "wraps_dashbords graph_wrapsproduts", style: { padding: "12px" }, children: [_jsxs("div", { className: "d-flex justify-content-between", children: [_jsx("div", { className: "wrap_dropsdownq", children: _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "product-filter-dropdown", style: { width: "auto" }, children: productFilter === "quantity" ? "Department" : productFilter === "amount" ? "" : "" }), _jsx(Dropdown.Menu, { children: ["department", "main department"].map((filter) => (_jsx(Dropdown.Item, { active: productFilter === filter, onClick: () => handleProductFilterChange(filter), children: ` ${filter.charAt(0).toUpperCase() + filter.slice(1)}` }, filter))) })] }) }), _jsx("div", { className: "btn-group btn-group1 wrap_dropsdowns", style: { zIndex: 4 }, children: _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "transaction_graphfilter", children: _jsx("span", { className: "selected-text", children: selectedTransactionPeriod.charAt(0).toUpperCase() + selectedTransactionPeriod.slice(1) }) }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { eventKey: "daily", onClick: () => handleTransactionDropdownSelect("daily"), active: selectedTransactionPeriod === "daily", children: "Daily" }), _jsx(Dropdown.Item, { eventKey: "weekly", onClick: () => handleTransactionDropdownSelect("weekly"), active: selectedTransactionPeriod === "weekly", children: "Weekly" }), _jsx(Dropdown.Item, { eventKey: "monthly", onClick: () => handleTransactionDropdownSelect("monthly"), active: selectedTransactionPeriod === "monthly", children: "Monthly" }), _jsx(Dropdown.Item, { eventKey: "yearly", onClick: () => handleTransactionDropdownSelect("yearly"), active: selectedTransactionPeriod === "yearly", children: "Yearly" })] })] }) })] }), _jsx("div", { className: "d-flex flex-column", style: { height: "100%" }, children: _jsx("div", { id: "graph_transactions_card_Dashboard", style: { minWidth: "100%", height: "240px" }, children: _jsx(HighchartsReact, { highcharts: Highcharts, options: transactionChartOptions }) }) })] })] }));
};
export default DepartmentPieChart;
