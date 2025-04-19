import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Dropdown } from 'react-bootstrap';
const HourlySaleCard = () => {
    const [selectedDate, setSelectedDate] = useState('10/01/2024');
    const [isCustomDate, setIsCustomDate] = useState(false);
    const handleDateSelection = (dateValue) => {
        if (dateValue === 'CustomDate') {
            setIsCustomDate(true);
        }
        else {
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
    return (_jsxs("div", { className: "col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12", children: [_jsx("div", { className: "LoaderDiv_DashboardRestaurantCommonClass", id: "LoaderDiv_DashboardRestaurant_8", style: {
                    opacity: 1,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2147483647,
                    display: 'none',
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
                    }, children: _jsx("img", { src: "../../Content/Images/Loader.gif", alt: "Loading", style: {
                            backgroundColor: '#ffffff',
                            width: '50px',
                        } }) }) }), _jsx("div", { className: "btn-group btn-group1 wrap_dropsdowns", style: { zIndex: 4 }, children: _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "secondary", id: "transaction_graphfilter", children: _jsxs("span", { className: "selected-text", children: [" ", selectedDate] }) }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { eventKey: "Today", onClick: () => handleDateSelection('Today'), children: "Today" }), _jsx(Dropdown.Item, { eventKey: "CustomDate", onClick: () => handleDateSelection('CustomDate'), children: "Custom Date" })] })] }) }), _jsx("div", { className: "wraps_dashbords graph_wrapsproduts", style: { padding: '12px' }, children: _jsxs("div", { className: "d-flex flex-column", style: { height: '100%' }, children: [_jsx("div", { className: "p-0", style: { height: '26px' }, children: _jsx("h3", { className: "graph_heading", children: "Hourly Sale" }) }), _jsx(HighchartsReact, { highcharts: Highcharts, options: options })] }) })] }));
};
export default HourlySaleCard;
