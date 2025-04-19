import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
const SaleByDeviceTypeChart = () => {
    const [selectedTransactionPeriod, setSelectedTransactionPeriod] = useState("weekly");
    const handleDropdownSelect = (value) => {
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
    return (_jsxs("div", { className: "col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12", children: [_jsx("div", { className: "LoaderDiv_DashboardRestaurantCommonClass", style: {
                    opacity: 1,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2147483647,
                    display: "none",
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
                    }, children: _jsx("img", { src: "../../Content/Images/Loader.gif", style: { backgroundColor: "#ffffff", width: "50px" }, alt: "Loader" }) }) }), _jsx("div", { className: "btn-group btn-group1 wrap_dropsdowns", style: { zIndex: 4 }, children: _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "transaction_graphfilter", children: _jsx("span", { className: "selected-text", children: selectedTransactionPeriod.charAt(0).toUpperCase() +
                                    selectedTransactionPeriod.slice(1) }) }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { eventKey: "daily", onClick: () => handleDropdownSelect("daily"), active: selectedTransactionPeriod === "daily", children: "Daily" }), _jsx(Dropdown.Item, { eventKey: "weekly", onClick: () => handleDropdownSelect("weekly"), active: selectedTransactionPeriod === "weekly", children: "Weekly" }), _jsx(Dropdown.Item, { eventKey: "monthly", onClick: () => handleDropdownSelect("monthly"), active: selectedTransactionPeriod === "monthly", children: "Monthly" }), _jsx(Dropdown.Item, { eventKey: "yearly", onClick: () => handleDropdownSelect("yearly"), active: selectedTransactionPeriod === "yearly", children: "Yearly" })] })] }) }), _jsx("div", { className: "wraps_dashbords graph_wrapsproduts", style: { padding: "12px" }, children: _jsxs("div", { className: "d-flex flex-column", style: { height: "100%" }, children: [_jsx("div", { className: "p-0", style: { height: "26px" }, children: _jsx("h3", { className: "graph_heading", children: "Sale By Device Type" }) }), _jsx("div", { children: _jsx("div", { id: "graph_ServiceSale_card_Dashboard", style: { minWidth: "100%", height: "240px", overflow: "hidden" }, children: _jsx(HighchartsReact, { highcharts: Highcharts, options: chartOptions }) }) })] }) })] }));
};
export default SaleByDeviceTypeChart;
