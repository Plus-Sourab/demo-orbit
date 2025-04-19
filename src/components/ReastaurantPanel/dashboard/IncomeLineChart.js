import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
const IncomeLineChart = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('weekly');
    const handleDropdownSelect = (period) => {
        setSelectedPeriod(period);
    };
    const options = {
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
        series: chartData[selectedPeriod].series,
    };
    return (_jsxs("div", { className: "col-sm-6 col-md-6 col-lg-6 col-xl-6 col-sm-12", children: [_jsx("div", { className: "LoaderDiv_DashboardRestaurantCommonClass", style: { display: 'none' }, children: _jsx("div", { className: "d-flex align-items-center justify-content-center", children: _jsx("img", { src: "../../Content/Images/Loader.gif", alt: "Loading..." }) }) }), _jsx("div", { className: "wraps_dashbords graphss", style: { height: '335px' }, children: _jsxs("div", { className: "d-flex flex-column", style: { height: '100%' }, children: [_jsxs("div", { className: "p-2 income-bx", children: ["Income", _jsxs(Dropdown, { className: "btn-group btn-group1 wrap_dropsdowns", style: { zIndex: 4 }, children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "incomeLineChart_graphfilter", className: "dropdown-toggle", children: _jsx("span", { className: "selected-text", children: selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1) }) }), _jsxs(Dropdown.Menu, { align: "end", children: [_jsx(Dropdown.Item, { eventKey: "yearly", onClick: () => handleDropdownSelect('yearly'), active: selectedPeriod === 'yearly', children: "Yearly" }), _jsx(Dropdown.Item, { eventKey: "monthly", onClick: () => handleDropdownSelect('monthly'), active: selectedPeriod === 'monthly', children: "Monthly" }), _jsx(Dropdown.Item, { eventKey: "weekly", onClick: () => handleDropdownSelect('weekly'), active: selectedPeriod === 'weekly', children: "Weekly" })] })] })] }), _jsxs("div", { id: "income_data_incomeLineChart", className: "text-right mr-5", children: [_jsx("span", { id: "income_value_incomeLineChart", children: "$861.1" }), _jsxs("span", { id: "income_change_percentage_incomeLineChart", className: "text-red-custom", children: ["-94.62%", ' ', _jsx("span", { className: "material-symbols-outlined", style: { fontSize: 'inherit', fontWeight: 'inherit' }, children: "arrow_downward" })] })] }), _jsx("div", { id: "graph_income_dashboard", style: { width: '100%', height: '195px', overflow: 'hidden' }, children: _jsx(HighchartsReact, { highcharts: Highcharts, options: options }) })] }) })] }));
};
export default IncomeLineChart;
