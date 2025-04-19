import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import EmailModal from './EmailModal';
const Hourlysale = () => {
    const [activeTab, setActiveTab] = useState('hourlySale1');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setIsOpen(false); // Close dropdown when clicking outside
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleEmailModalOpen = () => {
        const emailModalButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal");
        emailModalButton?.click();
    };
    const handleDateModal = () => {
        const dateModalButton = document.getElementById('btn_CustomDate_HourlySalesGraph_ManageReports_Modal');
        dateModalButton?.click();
    };
    const closeDateModal = () => {
        const closeModalButton = document.getElementById('btnCancel_HourlySalesGraph_ManageReports_Modal');
        closeModalButton?.click();
    };
    const options = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff'
        },
        title: {
            text: 'Current-Year <br> Refund-Order-Reasons',
            y: -60,
            style: {
                fontWeight: 'bold',
                fontSize: '16px'
            }
        },
        tooltip: {
            pointFormat: '{point.percentage:.2f}% (${point.y})<br>{point.name}'
        },
        plotOptions: {
            pie: {
                innerSize: '60%' // Creates the donut effect
            }
        },
        legend: {
            enabled: true
        },
        series: [
            {
                name: 'Refund Reasons',
                colorByPoint: true,
                data: [
                    { name: 'Refund reason 3', y: 253, color: '#4aa3f0' }, // Light blue color
                    { name: 'Refund reason 4', y: 40, color: '#6a0dad' } // Purple color
                ]
            }
        ]
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { id: "hourly_sale", className: " container-fluid", children: _jsxs("div", { className: "cgt-desc", children: [_jsxs("div", { className: "tabs_wraps-div", children: [_jsxs("ul", { className: "tabs clearfix", children: [_jsx("li", { children: _jsx("a", { id: "tab_HourlySalesReport_ManageRestaurantReports", className: `FinancialReportDataClassCommon ${activeTab === 'hourlySale1' ? 'active' : ''}`, onClick: () => setActiveTab('hourlySale1'), children: "HOURLY SALE" }) }), _jsx("li", { children: _jsx("a", { id: "tab_BreakfastLunchDinnerReport_ManageRestaurantReports", className: `FinancialReportDataClassCommon ${activeTab === 'hourlySale2' ? 'active' : ''}`, onClick: () => setActiveTab('hourlySale2'), children: "BREAKFAST, LUNCH, DINNER" }) })] }), _jsx("span", { id: "FilterOptionsMenu_HourlySalesReport", ref: buttonRef, className: "dropbtn FilterOptionsMenuCommonClass Vector_horizental", style: { background: 'rgb(246, 248, 252)' }, onClick: toggleDropdown, children: _jsx("img", { src: "../../Content/Restaurant/icons/Vector_horizental.png", alt: "icon", className: "dropbtn vertical-menus" }) }), _jsx("span", { id: "FilterOptionsMenu_BreakfastLunchDinnerReport", className: "dropbtn FilterOptionsMenuCommonClass Vector_horizental", style: { background: 'rgb(246, 248, 252)', display: 'none' }, children: _jsx("img", { src: "../../Content/Restaurant/icons/Vector_horizental.png", alt: "icon", className: "dropbtn vertical-menus" }) })] }), _jsxs("div", { className: "cgt-content", children: [_jsxs("div", { id: "hourly_sale1", style: { display: activeTab === 'hourlySale1' ? 'block' : 'none' }, children: [_jsxs("div", { id: "dllFilterGraphOption_HourlySalesReports_ManageReports", className: `dropdown-content dropdownContent_HourlySalesReports ${isOpen ? 'show' : ''}`, ref: dropdownRef, children: [_jsx("a", { id: "optFilteration_Today_HourlySalesReports", href: "javascript:;", className: "optFilterationClass_HourlySalesReports ", children: "Today" }), _jsx("a", { id: "optFilteration_CustomDate_HourlySalesReports", href: "javascript:;", className: "optFilterationClass_HourlySalesReports", onClick: handleDateModal, children: "Custom Date" })] }), _jsx("div", { className: "set-graph", children: _jsxs("div", { className: "graph", children: [_jsx("div", { id: "lblSelectedFilterOption_HourlySaleReports_ManageReports", className: "lblHeading_HourlySales_Style", children: "Today" }), _jsxs("div", { className: "product_sale-bars", style: { float: 'left', width: '93%' }, children: [_jsxs("div", { className: "wrap_bar-prgress", style: { marginBottom: '12px' }, children: [_jsx("div", { className: "progress", style: { marginBottom: '14px' }, children: _jsx("div", { id: "dv_BreakfastProgress_ManageReports", className: "progress-bar orange", style: { width: '0%', background: 'rgb(87, 83, 190)' } }) }), _jsx("span", { id: "lbl_BreakfastAmount_ManageReports", className: "value_progress", style: { marginTop: '-12px' }, children: "$0" })] }), _jsxs("div", { className: "wrap_bar-prgress", style: { marginBottom: '9px' }, children: [_jsx("div", { className: "progress", style: { marginBottom: '14px' }, children: _jsx("div", { id: "dv_LunchProgress_ManageReports", className: "progress-bar orange", style: { width: '13.81%', background: 'rgb(253, 202, 64)' } }) }), _jsx("span", { id: "lbl_LunchAmount_ManageReports", className: "value_progress", style: { marginTop: '-12px' }, children: "$75.55" })] }), _jsxs("div", { className: "wrap_bar-prgress", children: [_jsx("div", { className: "progress", children: _jsx("div", { id: "dv_DinnerProgress_ManageReports", className: "progress-bar orange", style: { width: '86.19%', background: 'rgb(255, 92, 90)' } }) }), _jsx("span", { id: "lbl_DinnerAmount_ManageReports", className: "value_progress", children: "$471.55" })] })] }), _jsx("div", { className: "clear" })] }) }), _jsx("hr", { className: "space_wraps" }), _jsx("div", { className: "pdf_reports", children: _jsxs("div", { className: "wrap_pdf", children: [_jsx("p", { className: "Email_wraps-right", style: { cursor: 'pointer' }, onClick: handleEmailModalOpen, children: "Email" }), _jsx("div", { className: "container_content", children: _jsxs("div", { className: "invoice-box", style: {
                                                                maxWidth: '1000px',
                                                                margin: 'auto',
                                                                padding: '10px',
                                                                fontSize: '16px',
                                                                lineHeight: '24px',
                                                                color: '#555',
                                                            }, children: [_jsx("h3", { style: {
                                                                        textAlign: 'center',
                                                                        color: '#5651BD',
                                                                        fontStyle: 'italic',
                                                                    }, children: "Hourly Sales - Stock Item" }), _jsx("p", { id: "lblFilterValue_HourlySales_PDFReport_RestaurantReports", style: { textAlign: 'center' }, children: "05 Nov 2024 00:00:00 to 05 Nov 2024 11:30:33" }), _jsx("div", { className: "table-responsive", children: _jsx("table", { id: "tblHourlySales_PDFReport_RestaurantReports", cellPadding: "0", cellSpacing: "0", style: {
                                                                            width: '100%',
                                                                            lineHeight: 'inherit',
                                                                            textAlign: 'left',
                                                                        }, children: _jsxs("tbody", { children: [_jsxs("tr", { className: "heading", children: [_jsx("td", { colSpan: "3", style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '60%',
                                                                                            } }), _jsx("td", { colSpan: "2", style: {
                                                                                                textAlign: 'center',
                                                                                                padding: '2px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                color: '#555',
                                                                                                fontSize: '16px',
                                                                                                width: '20%',
                                                                                            }, children: _jsx("p", { style: {
                                                                                                    borderBottom: '2px solid #000',
                                                                                                    textAlign: 'center',
                                                                                                    color: '#555',
                                                                                                    fontSize: '16px',
                                                                                                    marginBottom: '0px',
                                                                                                    paddingBottom: '0px',
                                                                                                }, children: "Sales" }) }), _jsx("td", { colSpan: "2", style: {
                                                                                                textAlign: 'center',
                                                                                                padding: '2px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                color: '#555',
                                                                                                fontSize: '16px',
                                                                                                width: '20%',
                                                                                            }, children: _jsx("p", { style: {
                                                                                                    borderBottom: '2px solid #000',
                                                                                                    textAlign: 'center',
                                                                                                    color: '#555',
                                                                                                    fontSize: '16px',
                                                                                                    marginBottom: '0px',
                                                                                                    paddingBottom: '0px',
                                                                                                }, children: "Profit" }) })] }), _jsxs("tr", { className: "heading", children: [_jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '15%',
                                                                                            }, children: "Product-Number" }), _jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '35%',
                                                                                            }, children: "Name" }), _jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '10%',
                                                                                                textAlign: 'center',
                                                                                            }, children: "Quantity" }), _jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '10%',
                                                                                                textAlign: 'center',
                                                                                            }, children: "Amount" }), _jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '10%',
                                                                                                textAlign: 'center',
                                                                                            }, children: "%" }), _jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '10%',
                                                                                                textAlign: 'center',
                                                                                            }, children: "Amount" }), _jsx("td", { style: {
                                                                                                padding: '5px',
                                                                                                verticalAlign: 'top',
                                                                                                background: 'transparent',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#000',
                                                                                                fontSize: '13px',
                                                                                                width: '10%',
                                                                                                textAlign: 'center',
                                                                                            }, children: "%" })] }), _jsxs("tr", { className: "total rowsHourlySalePDFReportCommonClass", children: [_jsx("td", { style: { width: '15%' } }), _jsx("td", { style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                fontWeight: 'normal',
                                                                                                padding: '5px',
                                                                                                paddingBottom: '25px !important',
                                                                                                fontSize: '13px',
                                                                                                width: '35%',
                                                                                            } }), _jsx("td", { id: "lblTotalQuantity_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                fontWeight: 'normal',
                                                                                                padding: '5px',
                                                                                                paddingBottom: '25px !important',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0" }), _jsx("td", { id: "lblTotalProductsSaleAmount_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                fontWeight: 'normal',
                                                                                                padding: '5px',
                                                                                                paddingBottom: '25px !important',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" }), _jsx("td", { id: "lblTotalProductsSalePercentage_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                fontWeight: 'normal',
                                                                                                padding: '5px',
                                                                                                paddingBottom: '25px !important',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" }), _jsx("td", { id: "lblTotalProductsProfitAmount_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                fontWeight: 'normal',
                                                                                                padding: '5px',
                                                                                                paddingBottom: '25px !important',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" }), _jsx("td", { id: "lblTotalProductsProfitPercentage_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                fontWeight: 'normal',
                                                                                                padding: '5px',
                                                                                                paddingBottom: '25px !important',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" })] }), _jsxs("tr", { className: "total_final rowsHourlySalePDFReportCommonClass", children: [_jsx("td", { style: { width: '15%' } }), _jsx("td", { style: { width: '35%' } }), _jsx("td", { id: "lbl_GrandTotalQuantity_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0" }), _jsx("td", { id: "lbl_GrandTotalProductsSaleAmount_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" }), _jsx("td", { id: "lbl_GrandTotalProductsSalePercentage_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" }), _jsx("td", { id: "lbl_GrandTotalProductsProfitAmount_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" }), _jsx("td", { id: "lbl_GrandTotalProductsProfitPercentage_HourlySalePDFReport_RestaurantReports", style: {
                                                                                                borderTop: '1px solid #000',
                                                                                                borderBottom: '1px solid #000',
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '13px',
                                                                                                textAlign: 'center',
                                                                                                width: '10%',
                                                                                            }, children: "0.00" })] })] }) }) })] }) })] }) })] }), _jsxs("div", { id: "hourly_sale2", style: { display: activeTab === 'hourlySale2' ? 'block' : 'none' }, children: [_jsxs("div", { id: "dllFilterGraphOption_BreakfastLunchDinnerReports_ManageReports", className: "dropdown-content dropdownContent_BreakfastLunchDinnerReports", children: [_jsx("a", { id: "optFilteration_Weekly_BreakfastLunchDinnerReports", href: "javascript:;", className: "optFilterationClass_BreakfastLunchDinnerReports", onclick: "GetBreakfastLunchDinnerGraphDataOfRestaurant(1);", children: "Weekly" }), _jsx("a", { id: "optFilteration_Monthly_BreakfastLunchDinnerReports", href: "javascript:;", className: "optFilterationClass_BreakfastLunchDinnerReports", onclick: "GetBreakfastLunchDinnerGraphDataOfRestaurant(2);", children: "Monthly" }), _jsx("a", { id: "optFilteration_Yearly_BreakfastLunchDinnerReports", href: "javascript:;", className: "optFilterationClass_BreakfastLunchDinnerReports active", onclick: "GetBreakfastLunchDinnerGraphDataOfRestaurant(3);", children: "Yearly" }), _jsx("a", { id: "optFilteration_CustomDates_BreakfastLunchDinnerReports", href: "javascript:;", className: "optFilterationClass_BreakfastLunchDinnerReports", onclick: "ShowCustomDates_Selection_Popup(3);", children: "Custom Dates" })] }), _jsxs("div", { className: "graph", children: ["  ", _jsx(HighchartsReact, { highcharts: Highcharts, options: options })] })] })] })] }) }), _jsx(EmailModal, {}), _jsx("button", { id: "btn_CustomDate_HourlySalesGraph_ManageReports_Modal", type: "button", className: "btn btn-info btn-lg", "data-toggle": "modal", "data-target": "#CustomDate_HourlySalesGraph_ManageReports_Modal", style: { display: 'none' } }), _jsx("div", { className: "modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", id: "CustomDate_HourlySalesGraph_ManageReports_Modal", "data-backdrop": "static", "data-keyboard": "false", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", style: { marginTop: '100px' }, children: _jsxs("div", { className: "modal-content plus_modal_cont custm_date-wrappopup", style: { width: '400px' }, children: [_jsx("div", { className: "modal-header plus_modal_head", style: {
                                    display: 'block',
                                    paddingBottom: '20px',
                                    textAlign: 'center',
                                    paddingTop: '0px',
                                }, children: _jsx("h4", { className: "modal-title plus_head_popup", style: { left: '0px' }, children: "Custom Date" }) }), _jsx("div", { className: "modal-body new_modal_work", children: _jsx("div", { className: "col-md-12 col-lg-12 col-12", children: _jsxs("form", { children: [_jsx("div", { className: "dates_wraps", children: _jsxs("div", { className: "form-group text_wrap-datepicker", style: { display: 'block' }, children: [_jsx("label", { style: { width: '100%', fontSize: '16px', fontWeight: '600' }, children: "Select Date" }), _jsx("input", { type: "text", className: "form-control datepicker", id: "txtDate_HourlySalesGraph_ManageReports_Modal", placeholder: "Date", style: { cursor: 'pointer', width: '100%' }, readOnly: true }), _jsx("div", { id: "date_error_HourlySalesGraph_ManageReports_Modal", className: "errorsClass2" })] }) }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", style: { paddingBottom: '0px', paddingTop: '10px' }, children: [_jsx("button", { id: "btnCancel_HourlySalesGraph_ManageReports_Modal", type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", "data-dismiss": "modal", style: { display: 'none' } }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: closeDateModal, children: "Cancel" }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", children: "Apply" })] })] }) }) })] }) }) })] }));
};
export default Hourlysale;
