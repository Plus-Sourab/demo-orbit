import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
const ProductAmountBarChart = () => {
    // State for time period and product filter selection
    const [timePeriod, setTimePeriod] = useState('Weekly');
    const [productFilter, setProductFilter] = useState('quantity'); // default filter
    // Highcharts chart options
    const chartOptions = {
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
    const handleTimePeriodChange = (value) => {
        setTimePeriod(value);
    };
    // Handle product filter change
    const handleProductFilterChange = (value) => {
        setProductFilter(value);
    };
    return (_jsxs("div", { className: "col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12", children: [_jsx("div", { className: "LoaderDiv_DashboardRestaurantCommonClass", id: "LoaderDiv_DashboardRestaurant_4", style: {
                    opacity: 1,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2147483647,
                    display: 'none', // loader hidden by default
                }, children: _jsx("div", { style: {
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
                    }, children: _jsx("img", { src: "../../Content/Images/Loader.gif", alt: "loading", style: { width: '50px' } }) }) }), _jsxs("div", { className: "wraps_dashbords graph_wrapsproduts", style: { padding: '12px' }, children: [_jsx("div", { className: "wrap_dropsdowns", id: "productCard2_graphfilter", style: { zIndex: 4 }, children: _jsxs(Dropdown, { style: { marginBottom: '10px' }, children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "time-period-dropdown", children: timePeriod }), _jsx(Dropdown.Menu, { children: ['Yearly', 'Monthly', 'Weekly', 'Daily'].map((period) => (_jsx(Dropdown.Item, { active: timePeriod === period, onClick: () => handleTimePeriodChange(period), children: period }, period))) })] }) }), _jsxs("div", { className: "d-flex flex-column", style: { height: '100%' }, children: [_jsx("div", { className: "p-0", style: { height: '26px', marginTop: '10px' }, children: _jsx("div", { className: "wrap_dropsdownq", children: _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "product-filter-dropdown", style: { width: 'auto' }, children: productFilter === 'quantity'
                                                    ? 'Product by Quantity'
                                                    : productFilter === 'amount'
                                                        ? 'Product by Amount'
                                                        : 'Product by Profit' }), _jsx(Dropdown.Menu, { children: ['quantity', 'amount', 'profit'].map((filter) => (_jsx(Dropdown.Item, { active: productFilter === filter, onClick: () => handleProductFilterChange(filter), children: `Product by ${filter.charAt(0).toUpperCase() + filter.slice(1)}` }, filter))) })] }) }) }), _jsx("div", { id: "graph_product_card2_Dashboard", style: {
                                    minWidth: '100%',
                                    height: '240px',
                                    overflow: 'hidden',
                                }, "aria-hidden": "false", role: "region", "aria-label": "Chart. Highcharts interactive chart.", children: _jsx(HighchartsReact, { highcharts: Highcharts, options: chartOptions }) })] })] })] }));
};
export default ProductAmountBarChart;
