import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import EmailModal from './EmailModal';
const Department = (props) => {
    const [activeTab, setActiveTab] = useState('master_department');
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const buttonRef = useRef(null);
    const cancelRef = useRef(null);
    const dropdownRef = useRef(null);
    const handleDateModal = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };
    const handleCloseModal = () => {
        if (cancelRef.current) {
            cancelRef.current.click();
        }
    };
    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
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
        const emailButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal");
        if (emailButton) {
            emailButton.click();
        }
    };
    const options = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff',
        },
        title: {
            y: -60,
            style: {
                fontWeight: 'bold',
                fontSize: '16px',
            },
        },
        tooltip: {
            pointFormat: '{point.percentage:.2f}% (${point.y})<br>{point.name}',
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
            },
        },
        legend: {
            enabled: true,
        },
        series: [
            {
                name: 'Refund Reasons',
                colorByPoint: true,
                data: [
                    { name: 'Main 2', y: 253, color: '#4aa3f0' },
                    { name: 'Juice', y: 253, color: '#4aa3f0' },
                    { name: 'Veg Recipe', y: 40, color: '#6a0dad' },
                ],
            },
        ],
    };
    const options2 = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff',
        },
        title: {
            y: -60,
            style: {
                fontWeight: 'bold',
                fontSize: '16px',
            },
        },
        tooltip: {
            pointFormat: '{point.percentage:.2f}% (${point.y})<br>{point.name}',
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
            },
        },
        legend: {
            enabled: true,
        },
        series: [
            {
                name: 'Refund Reasons',
                colorByPoint: true,
                data: [
                    { name: 'Main 2', y: 253, color: '#4aa3f0' },
                    { name: 'Juice', y: 253, color: '#4aa3f0' },
                    { name: 'Recipe', y: 40, color: '#6a0dad' },
                ],
            },
        ],
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { id: "department", className: "container-fluid", children: _jsxs("div", { className: "cgt-desc", children: [_jsxs("div", { className: "tabs_wraps-div", children: [_jsxs("ul", { className: "tabs clearfix", children: [_jsx("li", { children: _jsx("a", { id: "tab_MainDepartmentReport_ManageRestaurantReports", className: `FinancialReportDataClassCommon ${activeTab === "master_department" ? 'active' : ''}`, onClick: () => setActiveTab("master_department"), children: "MASTER DEPARTMENT" }) }), _jsx("li", { children: _jsx("a", { id: "tab_SubDepartmentReport_ManageRestaurantReports", className: `FinancialReportDataClassCommon ${activeTab === "wrap_department" ? 'active' : ''}`, onClick: () => setActiveTab("wrap_department"), children: "DEPARTMENT" }) })] }), _jsx("span", { id: "FilterOptionsMenu_MainDepartmentReport", className: "dropbtn FilterOptionsMenuCommonClass Vector_horizental", style: { background: 'rgb(246, 248, 252)' }, children: _jsx("img", { src: "./Content/Restaurant/icons/Vector_horizental.png", alt: "icon", className: "dropbtn vertical-menus" }) }), _jsx("span", { id: "FilterOptionsMenu_SubDepartmentReport", className: "dropbtn FilterOptionsMenuCommonClass Vector_horizental", style: { background: 'rgb(246, 248, 252)' }, ref: dropdownRef, onClick: toggleDropdown, children: _jsx("img", { src: "./Content/Restaurant/icons/Vector_horizental.png", alt: "icon", className: "dropbtn vertical-menus" }) }), _jsxs("div", { id: "dllFilterGraphOption_MainDepartmentReports_ManageReports", className: `dropdown-content dropdownContent_FinancialReports ${isOpen ? 'show' : ''}`, children: [_jsx("a", { id: "optFilteration_Weekly_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", children: "Weekly" }), _jsx("a", { id: "optFilteration_Monthly_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", children: "Monthly" }), _jsx("a", { id: "optFilteration_Yearly_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", children: "Yearly" }), _jsx("a", { id: "optFilteration_CustomDates_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", 
                                            // onClick={() => handleFilterChange('CustomDates')}
                                            onClick: handleDateModal, children: "Custom Dates" })] })] }), _jsxs("div", { className: "cgt-content", children: [_jsxs("div", { id: "master_department", className: `tab ${activeTab === 'master_department' ? 'active' : ''}`, style: { display: activeTab === 'wrap_department' ? 'none' : 'block' }, children: [_jsx("div", { className: "graph", children: _jsx(HighchartsReact, { highcharts: Highcharts, options: options }) }), _jsx("hr", { className: "space_wraps" }), _jsx("div", { className: "pdf_reports", children: _jsxs("div", { className: "wrap_pdf", children: [_jsx("p", { id: "link_Send_MainDepartmentReportPDF", className: "Email_wraps-right", style: { cursor: 'pointer' }, onClick: handleEmailModalOpen, children: "Email" }), _jsx("div", { className: "container_content", id: "container_content", children: _jsxs("div", { className: "invoice-box", style: {
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
                                                                    }, children: "Main-Department Sales Report" }), _jsx("p", { id: "lblFilterValue_MainDepartment_PDFReport_RestaurantReports", style: { textAlign: 'center' }, children: "01 Jan 2024 00:00:00 to 05 Nov 2024 10:21:58" }), _jsx("div", { className: "table-responsive", children: _jsx("table", { id: "tblMainDepartment_PDFReport_RestaurantReports", cellPadding: 0, cellSpacing: 0, style: { width: '100%', lineHeight: 'inherit', textAlign: 'left' }, children: _jsxs("tbody", { children: [_jsxs("tr", { className: "heading", children: [_jsx("td", { colSpan: 2 }), _jsx("td", { colSpan: 3, style: { padding: '5px', verticalAlign: 'top', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '16px', textAlign: 'center', paddingBottom: '0px' }, children: "Sales" })] }), _jsxs("tr", { className: "heading", children: [_jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%' }, children: "Id" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '40%' }, children: "Name" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "Quantity" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "Amount" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "%" })] }), _jsxs("tr", { className: "details rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }, children: "21" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }, children: "Main 2" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "1" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "$75.55" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "14.90" })] }), _jsxs("tr", { className: "details rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }, children: "7" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }, children: "Juice Recipes" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "-2" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "$11.55" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "2.28" })] }), _jsxs("tr", { className: "details rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }, children: "2" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }, children: "Veg Recipes" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "3" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "$420.00" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "82.82" })] }), _jsxs("tr", { className: "total_final department_sale rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { width: '15%' } }), _jsx("td", { style: { width: '40%' } }), _jsx("td", { style: { fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }, children: "2" }), _jsx("td", { style: { fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }, children: "$507.10" }), _jsx("td", { style: { width: '15%', textAlign: 'center' }, children: " " })] })] }) }) })] }) }), _jsx("div", { id: "dv_Download_MainDepartmentReport_Section", className: "text-center", style: { padding: '20px' }, children: _jsxs("form", { method: "post", children: [_jsx("input", { type: "hidden", name: "hdn_MainDepartmentReport_Html" }), _jsx("input", { type: "hidden", name: "hdn_MainDepartment_Graph_base64" }), _jsx("button", { type: "submit", id: "btnDownload_MainDepartmentReportPDF_RestaurantReports", className: "btn btn-info btn_print", children: "PDF Download" })] }) })] }) })] }), _jsxs("div", { id: "wrap_department", className: `tab ${activeTab === 'wrap_department' ? 'active' : ''}`, style: { display: activeTab === 'master_department' ? 'none' : 'block' }, children: [_jsxs("div", { id: "dllFilterGraphOption_MainDepartmentReports_ManageReports", className: "dropdown-content dropdownContent_MainDepartmentReports", children: [_jsx("a", { id: "optFilteration_Weekly_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", children: "Weekly" }), _jsx("a", { id: "optFilteration_Monthly_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", children: "Monthly" }), _jsx("a", { id: "optFilteration_Yearly_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", children: "Yearly" }), _jsx("a", { id: "optFilteration_CustomDates_MainDepartmentReports", className: "optFilterationClass_MainDepartmentReports", onClick: handleDateModal, children: "Custom Dates" })] }), _jsx("div", { className: "graph", children: _jsx(HighchartsReact, { highcharts: Highcharts, options: options2 }) }), _jsx("hr", { className: "space_wraps" }), _jsx("div", { className: "pdf_reports", children: _jsxs("div", { className: "wrap_pdf", children: [_jsx("p", { id: "link_Send_MainDepartmentReportPDF", className: "Email_wraps-right", style: { cursor: 'pointer' }, onClick: () => console.log('Send PDF via Email'), children: "Email" }), _jsx("div", { className: "container_content", id: "container_content", children: _jsxs("div", { className: "invoice-box", style: {
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
                                                                    }, children: "Main-Department Sales Report" }), _jsx("p", { id: "lblFilterValue_MainDepartment_PDFReport_RestaurantReports", style: { textAlign: 'center' }, children: "01 Jan 2024 00:00:00 to 05 Nov 2024 10:21:58" }), _jsx("div", { className: "table-responsive", children: _jsx("table", { id: "tblMainDepartment_PDFReport_RestaurantReports", cellPadding: 0, cellSpacing: 0, style: { width: '100%', lineHeight: 'inherit', textAlign: 'left' }, children: _jsxs("tbody", { children: [_jsxs("tr", { className: "heading", children: [_jsx("td", { colSpan: 2 }), _jsx("td", { colSpan: 3, style: { padding: '5px', verticalAlign: 'top', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '16px', textAlign: 'center', paddingBottom: '0px' }, children: "Sales" })] }), _jsxs("tr", { className: "heading", children: [_jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%' }, children: "Id" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '40%' }, children: "Name" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "Quantity" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "Amount" }), _jsx("td", { style: { padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "%" })] }), _jsxs("tr", { className: "details rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }, children: "21" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }, children: "Main 2" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "1" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "$75.55" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "14.90" })] }), _jsxs("tr", { className: "details rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }, children: "7" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }, children: "Juice Recipes" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "-2" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "$11.55" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "2.28" })] }), _jsxs("tr", { className: "details rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }, children: "2" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }, children: "Veg Recipes" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "3" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "$420.00" }), _jsx("td", { style: { padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }, children: "82.82" })] }), _jsxs("tr", { className: "total_final department_sale rowsMainDepartmentPDFReportCommonClass", children: [_jsx("td", { style: { width: '15%' } }), _jsx("td", { style: { width: '40%' } }), _jsx("td", { style: { fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }, children: "2" }), _jsx("td", { style: { fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }, children: "$507.10" }), _jsx("td", { style: { width: '15%', textAlign: 'center' }, children: " " })] })] }) }) })] }) }), _jsx("div", { id: "dv_Download_MainDepartmentReport_Section", className: "text-center", style: { padding: '20px' }, children: _jsxs("form", { method: "post", children: [_jsx("input", { type: "hidden", name: "hdn_MainDepartmentReport_Html" }), _jsx("input", { type: "hidden", name: "hdn_MainDepartment_Graph_base64" }), _jsx("button", { type: "submit", id: "btnDownload_MainDepartmentReportPDF_RestaurantReports", className: "btn btn-info btn_print", children: "PDF Download" })] }) })] }) })] })] })] }) }), _jsx("button", { id: "btn_CustomDates_Selection_ManageReports_Modal", type: "button", ref: buttonRef, onClick: () => console.log("Button clicked"), className: "btn btn-info btn-lg", "data-toggle": "modal", "data-target": "#CustomDates_Selection_ManageReports_Modal", style: { display: "none" } }), _jsx("div", { className: "modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ", id: "CustomDates_Selection_ManageReports_Modal", "data-backdrop": "static", "data-keyboard": "false", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content plus_modal_cont custm_date-wrappopup", children: [_jsx("div", { className: "modal-header plus_modal_head", style: {
                                    display: 'block',
                                    paddingBottom: '30px',
                                    textAlign: 'center',
                                    paddingTop: '0px'
                                }, children: _jsx("h4", { className: "modal-title plus_head_popup", style: { left: "0px" }, children: "Custom Date" }) }), _jsx("div", { className: "modal-body new_modal_work", children: _jsx("div", { className: "col-md-12 col-lg-12 col-12 p-0", children: _jsxs("form", { children: [_jsxs("div", { className: "dates_wraps", children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsxs("div", { className: "form-group text_wrap-datepicker", style: { marginBottom: "5px" }, children: [_jsx("label", { style: { width: "auto", marginRight: "8px" }, children: "From" }), _jsx(DatePicker, { selected: startDate, onChange: (date) => setStartDate(date), placeholderText: "Select Start Date", className: "form-control datetimepickerClass", dateFormat: "MM/dd/yyyy" })] }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsxs("div", { className: "form-group text_wrap-datepicker", style: { marginBottom: "5px" }, children: [_jsx("label", { style: { width: "auto", marginRight: "8px" }, children: "To" }), _jsx(DatePicker, { selected: endDate, onChange: (date) => setEndDate(date), placeholderText: "Select End Date", className: "form-control datetimepickerClass", dateFormat: "MM/dd/yyyy" })] }) })] }), _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsx("div", { id: "fromDate_error_CustomDatesSelection_ManageReports_Modal", className: "errorsClass2", style: { paddingLeft: "55px" } }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6", children: _jsx("div", { id: "toDate_error_CustomDatesSelection_ManageReports_Modal", className: "errorsClass2", style: { paddingLeft: "32px" } }) })] })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", style: { paddingBottom: "0px", paddingTop: "25px" }, children: [_jsx("button", { id: "btnCancel_CustomDatesSelection_ManageReports_Modal", ref: cancelRef, onClick: () => console.log("closebutton"), type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", "data-dismiss": "modal", style: { display: "none" } }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: handleCloseModal, children: "Cancel" }), _jsx("button", { id: "btnSubmit_GraphsData_By_CustomDates_ManageReports", type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", children: "Apply" })] })] }) }) })] }) }) }), _jsx(EmailModal, {})] }));
};
export default Department;
