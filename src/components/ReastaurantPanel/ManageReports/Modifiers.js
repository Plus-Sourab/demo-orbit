import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import EmailModal from './EmailModal';
const Modifiers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
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
    const handleDateModal = () => {
        const dateModalButton = document.getElementById('btn_CustomDates_Selection_ManageReports_Modal');
        dateModalButton?.click();
    };
    const handleCloseModal = () => {
        const closeModalButton = document.getElementById('btnCancel_CustomDatesSelection_ManageReports_Modal');
        closeModalButton?.click();
    };
    const handleEmailModalOpen = () => {
        const emailModalButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal");
        emailModalButton?.click();
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "modifiers", className: "container-fluid", children: [_jsxs("div", { className: "cgt-desc", children: [_jsx("div", { id: "FieldsSection_ModifierSalesGraph_ManageReports", className: "select_warppers", children: _jsxs("div", { className: "select_warps-box", children: [_jsx("div", { className: "select_box", children: _jsxs("select", { className: "form-control", id: "modifierSalesType_ModifierSalesRecordsFilter", children: [_jsx("option", { value: "top", children: "Top" }), _jsx("option", { value: "worst", children: "Worst" })] }) }), _jsx("div", { className: "select_box", children: _jsxs("select", { className: "form-control", id: "maxRecords_ModifierSalesRecordsFilter", children: [_jsx("option", { value: "10", children: "10" }), _jsx("option", { value: "20", children: "20" }), _jsx("option", { value: "30", children: "30" }), _jsx("option", { value: "40", children: "40" }), _jsx("option", { value: "50", children: "50" })] }) })] }) }), _jsx("div", { className: "clear" }), _jsxs("div", { className: "tabs_wraps-div", children: [_jsx("ul", { className: "tabs clearfix fit_data", children: _jsx("li", { children: _jsx("a", { id: "tab_ModifierSalesReport_ManageRestaurantReports", href: "#modifier_sales", className: "FinancialReportDataClassCommon active", children: "MODIFIER SALES" }) }) }), _jsx("span", { id: "FilterOptionsMenu_ModifierSalesReport", ref: buttonRef, className: "dropbtn FilterOptionsMenuCommonClass Vector_horizental", style: { background: 'rgb(246, 248, 252)' }, onClick: toggleDropdown, children: _jsx("img", { src: "../../Content/Restaurant/icons/Vector_horizental.png", alt: "icon", className: "dropbtn vertical-menus" }) }), _jsxs("div", { id: "modifierSales_graphFilter", className: `dropdown-content dropdownContent_ModfierSalestReports ${isOpen ? 'show' : ''}`, ref: dropdownRef, style: { zIndex: 100 }, children: [_jsx("a", { href: "javascript:;", "data-value": "1", children: "Weekly" }), _jsx("a", { href: "javascript:;", "data-value": "2", children: "Monthly" }), _jsx("a", { href: "javascript:;", "data-value": "3", children: "Yearly" }), _jsx("a", { href: "javascript:;", "data-value": "4", onClick: handleDateModal, children: "Custom date" })] })] }), _jsx("div", { className: "cgt-content", children: _jsxs("div", { id: "modifier_sales", className: "tab active", style: {}, children: [_jsx("div", { className: "graph", children: _jsxs("div", { className: "set-graph", children: [_jsx("div", { id: "lblSelectedFilterOption_ModifierSaleReports_ManageReports", className: "lblHeading_HourlySales_Style", children: "Yearly" }), _jsxs("div", { id: "dv_ProductSalesGraphData_Section_ManageReports", className: "product_sale-bars", children: [_jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Product 999" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '47.05%' } }) }), _jsx("span", { className: "value-progress", children: "$65.7" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "2 Veg Items with 1 Juice" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '24.28%' } }) }), _jsx("span", { className: "value-progress", children: "$33.91" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Veg Salad Soya Champ" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '17.4%' } }) }), _jsx("span", { className: "value-progress", children: "$24.3" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Lichi Juice" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '8.62%' } }) }), _jsx("span", { className: "value-progress", children: "$12.04" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Mix Juice 222" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Veg Salad 2" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Mango Shake" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Veg Noodles" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Veg Tikki" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Veg Pasta testing veggie pasta of the test description" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "Veg Champ" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] }), _jsxs("div", { className: "wrap_bar-progress", children: [_jsx("p", { className: "product-name", children: "French Fries" }), _jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar orange", style: { backgroundColor: '#5751BD', width: '0%' } }) }), _jsx("span", { className: "value-progress", children: "$0" })] })] })] }) }), _jsx("hr", { className: "space_wraps" }), _jsx("div", { className: "pdf_reports", children: _jsxs("div", { className: "wrap_pdf", children: [_jsx("p", { id: "link_Send_ModifierSaleReportPDF", className: "Email_wraps-right", style: { cursor: 'pointer' }, onClick: handleEmailModalOpen, children: "Email" }), _jsx("div", { className: "container_content", id: "container_content", children: _jsxs("div", { className: "invoice-box", style: {
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
                                                                    }, children: "Modifier Sales Report" }), _jsx("p", { id: "lblFilterValue_ModifierSales_PDFReport_RestaurantReports", style: { textAlign: 'center' }, children: "01 Jan 2024 00:00:00 to 05 Nov 2024 11:16:00" }), _jsxs("div", { className: "table-responsive", children: [_jsx("div", { className: "sales_wrap_profits", style: { textAlign: 'right' }, children: _jsx("span", { style: {
                                                                                    borderBottom: '2px solid #000',
                                                                                    padding: '0px 200px',
                                                                                    fontWeight: 'bold',
                                                                                    fontSize: '13px',
                                                                                }, children: "Sales" }) }), _jsx("table", { id: "tblModifierSales_PDFReport_RestaurantReports", cellPadding: "0", cellSpacing: "0", style: { width: '100%', lineHeight: 'inherit', textAlign: 'left' }, children: _jsxs("tbody", { children: [_jsxs("tr", { className: "heading", children: [_jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '4%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '45%',
                                                                                                }, children: "Modifier Option Name" }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '3%',
                                                                                                    textAlign: 'center',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '3%',
                                                                                                    textAlign: 'center',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '8%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "Quantity" }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '10%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "Nett ex" }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '6%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "Tax" }), _jsx("td", { style: {
                                                                                                    background: 'transparent',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    fontWeight: 'bold',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '12px',
                                                                                                    color: '#000',
                                                                                                    width: '7%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "Nett inc" })] }), _jsxs("tr", { className: "details rowsModifierSalesPDFReportCommonClass", children: [_jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '4%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    width: '38%',
                                                                                                }, children: "Option B-100" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '3%',
                                                                                                    textAlign: 'center',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '3%',
                                                                                                    textAlign: 'center',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '8%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "1" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '10%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "13.04" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '6%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "1.96" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '7%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "15.00" })] }), _jsxs("tr", { className: "details rowsModifierSalesPDFReportCommonClass", children: [_jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '4%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #000',
                                                                                                    width: '38%',
                                                                                                }, children: "Option A-100" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '3%',
                                                                                                    textAlign: 'center',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '3%',
                                                                                                    textAlign: 'center',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '8%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "1" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '10%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "8.04" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '6%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "1.96" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '1px solid #808080b5',
                                                                                                    width: '7%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "10.00" })] }), _jsxs("tr", { className: "total_final stock_item_sale rowsModifierSalesPDFReportCommonClass", children: [_jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    width: '4%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    width: '45%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    width: '3%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    width: '3%',
                                                                                                } }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '2px solid #000 !important',
                                                                                                    borderTop: '2px solid #000 !important',
                                                                                                    fontWeight: 'bold',
                                                                                                    width: '8%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "3" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '2px solid #000 !important',
                                                                                                    borderTop: '2px solid #000 !important',
                                                                                                    fontWeight: 'bold',
                                                                                                    width: '10%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "21.74" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '2px solid #000 !important',
                                                                                                    borderTop: '2px solid #000 !important',
                                                                                                    fontWeight: 'bold',
                                                                                                    width: '6%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "3.26" }), _jsx("td", { style: {
                                                                                                    color: '#000',
                                                                                                    padding: '5px',
                                                                                                    verticalAlign: 'top',
                                                                                                    fontSize: '13px',
                                                                                                    borderBottom: '2px solid #000 !important',
                                                                                                    borderTop: '2px solid #000 !important',
                                                                                                    fontWeight: 'bold',
                                                                                                    width: '7%',
                                                                                                    textAlign: 'center',
                                                                                                }, children: "25.00" })] })] }) })] })] }) }), _jsx("div", { id: "dv_Download_ModifierSalesReport_Section", className: "text-center", style: { padding: '20px' }, children: _jsxs("form", { action: "/Reports/Download_ModifierSales_ReportasPDF", method: "post", children: [_jsx("input", { type: "hidden", name: "hdn_ModifierSalesReport_Html" }), _jsx("button", { type: "submit", id: "btnDownload_ModifierSalesReportPDF_RestaurantReports", className: "btn btn-info btn_print", children: "PDF Download" })] }) })] }) })] }) })] }), _jsx("button", { id: "btn_CustomDates_Selection_ManageReports_Modal", type: "button", className: "btn btn-info btn-lg", "data-toggle": "modal", "data-target": "#CustomDates_Selection_ManageReports_Modal", style: { display: "none" } }), _jsx("div", { className: "modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ", id: "CustomDates_Selection_ManageReports_Modal", "data-backdrop": "static", "data-keyboard": "false", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content plus_modal_cont custm_date-wrappopup", children: [_jsx("div", { className: "modal-header plus_modal_head", style: {
                                            display: 'block',
                                            paddingBottom: '30px',
                                            textAlign: 'center',
                                            paddingTop: '0px'
                                        }, children: _jsx("h4", { className: "modal-title plus_head_popup", style: { left: "0px" }, children: "Custom Date" }) }), _jsx("div", { className: "modal-body new_modal_work", children: _jsx("div", { className: "col-md-12 col-lg-12 col-12 p-0", children: _jsxs("form", { children: [_jsxs("div", { className: "dates_wraps", children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsxs("div", { className: "form-group text_wrap-datepicker", style: { marginBottom: "5px" }, children: [_jsx("label", { style: { width: "auto", marginRight: "8px" }, children: "From" }), _jsx(DatePicker, { selected: startDate, onChange: (date) => setStartDate(date), placeholderText: "Select Start Date", className: "form-control datetimepickerClass", dateFormat: "MM/dd/yyyy" })] }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsxs("div", { className: "form-group text_wrap-datepicker", style: { marginBottom: "5px" }, children: [_jsx("label", { style: { width: "auto", marginRight: "8px" }, children: "To" }), _jsx(DatePicker, { selected: endDate, onChange: (date) => setEndDate(date), placeholderText: "Select End Date", className: "form-control datetimepickerClass", dateFormat: "MM/dd/yyyy" })] }) })] }), _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsx("div", { id: "fromDate_error_CustomDatesSelection_ManageReports_Modal", className: "errorsClass2", style: { paddingLeft: "55px" } }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsx("div", { id: "toDate_error_CustomDatesSelection_ManageReports_Modal", className: "errorsClass2", style: { paddingLeft: "32px" } }) })] })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", style: { paddingBottom: "0px", paddingTop: "25px" }, children: [_jsx("button", { id: "btnCancel_CustomDatesSelection_ManageReports_Modal", type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", "data-dismiss": "modal", style: { display: "none" } }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: handleCloseModal, children: "Cancel" }), _jsx("button", { id: "btnSubmit_GraphsData_By_CustomDates_ManageReports", type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", children: "Apply" })] })] }) }) })] }) }) })] }), _jsx(EmailModal, {})] }));
};
export default Modifiers;
