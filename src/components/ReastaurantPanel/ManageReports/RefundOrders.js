import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const RefundOrders = () => {
    const options = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff'
        },
        title: {
            text: 'Current-Year <br> Refund-Order-Reasons',
            // align: 'center',
            // verticalAlign: 'middle',
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
                innerSize: '60%', // Creates the donut effect
                // dataLabels: {
                //     enabled: true,
                //     format: '{point.percentage:.2f}% (${point.y})<br>{point.name}',
                //     distance: -50,
                //     style: {
                //         color: 'black',
                //         fontSize: '12px'
                //     }
                // }
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
    return (_jsxs("div", { id: "viewrecord", className: "container-fluid tab-pane px-0 active", children: [_jsx("ul", { className: "tabs clearfix d-none", children: _jsx("li", { children: _jsx("a", { id: "tab_ViewRecords_ManageRestaurantReports", href: "#viewrecord", className: "ViewRecordReportDataClassCommon active", onClick: "SearchViewRecords_ManageReoprts();" }) }) }), _jsx("div", { className: "container-fluid col-box px-0", children: _jsxs("div", { className: "row align-items-center bg-light select-icon marg-box", children: [_jsx("div", { className: "col-6 col-md-4 col-lg-2", children: _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "ddlTimePeriodSearchTypeValue" }), _jsxs("select", { className: "form-control commonClass_ManageReports", id: "ddlTimePeriodSearchTypeValue", children: [_jsx("option", { value: "1", children: "Today" }), _jsx("option", { value: "2", children: "Yesterday" }), _jsx("option", { value: "3", children: "Weekly" }), _jsx("option", { value: "4", children: "Monthly" }), _jsx("option", { value: "5", children: "Yearly" }), _jsx("option", { value: "6", children: "Custom Dates" })] })] }) }), _jsxs("div", { className: "col-6 col-md-4 col-lg-3", children: [_jsxs("div", { className: "form-group text_wrap-datepicker mb-0", children: [_jsx("label", { className: "mb-0", style: { width: 'auto', marginRight: '8px' }, children: "From" }), _jsx("input", { type: "text", className: "form-control datetimepickerClass datetimepicker-input bg-light mt-0", id: "FromDate_CustomDatesSelectionViewRecord_ManageReports", style: { cursor: 'pointer', width: '100%' }, readOnly: true })] }), _jsx("div", { id: "fromDate_error_CustomDatesSelectionViewRecord_ManageReports", className: "errorsClass2" })] }), _jsxs("div", { className: "col-12 col-md-4 col-lg-3 date-pick-col", children: [_jsxs("div", { className: "form-group text_wrap-datepicker mb-0", children: [_jsx("label", { className: "mb-0", style: { width: 'auto', marginRight: '8px' }, children: "To" }), _jsx("input", { type: "text", className: "form-control datetimepickerClass datetimepicker-input bg-light mt-0", id: "ToDate_CustomDatesSelectionViewRecord_ManageReports", style: { cursor: 'pointer', width: '100%' }, readOnly: true })] }), _jsx("div", { id: "toDate_error_CustomDatesSelectionViewRecord_ManageReports", className: "errorsClass2" })] }), _jsx("div", { className: "col-9 col-md-6 col-lg-3", children: _jsxs("div", { className: "form-group tender-bx", children: [_jsx("label", { htmlFor: "ddlTenderTypeId", children: "Tender Type" }), _jsxs("select", { className: "form-control", id: "ddlTenderTypeId", children: [_jsx("option", { value: "0", children: "All" }), _jsx("option", { value: "1", children: "Cash" }), _jsx("option", { value: "3", children: "EFTPOS" }), _jsx("option", { value: "7", children: "mPOSs" }), _jsx("option", { value: "8", children: "American Express" }), _jsx("option", { value: "9", children: "MasterCard" })] })] }) }), _jsx("div", { className: "col-3 col-md-4 col-lg-1 pl-0", children: _jsx("button", { className: "select-bx btn btn-primary text-white font-weight-normal commonClass_ManageReports", children: "Search" }) })] }) }), _jsx("div", { className: "table-section px-0", children: _jsxs("div", { className: "container-fluid px-0", children: [_jsxs("div", { className: "row row-box", children: [_jsxs("div", { className: "col-sm-12 col-md-7 col-lg-7 manage-report-table p-0", children: [_jsxs("div", { className: "table-responsive searchedCompletedOrdersDataOfRestaurant", style: { position: 'relative' }, children: [_jsx("div", { id: "LoaderDiv_ViewRecord_ManageReports", style: {
                                                        opacity: 1,
                                                        bottom: 0,
                                                        background: 'rgba(254, 253, 253, 0.68)',
                                                        width: '100%',
                                                        zIndex: 2147483647,
                                                        position: 'absolute',
                                                        display: 'none'
                                                    }, children: _jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsx("img", { src: "./Content/Images/Loader.gif", alt: "Loading...", style: { maxWidth: '6%' } }) }) }), _jsxs("table", { id: "BindSearchedCompletedOrdersDataOfRestaurant", className: "table table-bordered text-center bg-white mb-0", children: [_jsx("thead", { children: _jsxs("tr", { className: "bluelight", children: [_jsx("th", { scope: "col", children: "Code" }), _jsx("th", { scope: "col", children: "Machine Name" }), _jsx("th", { scope: "col", children: "Date" }), _jsx("th", { scope: "col", children: "Clerk" }), _jsx("th", { scope: "col", children: "Customer" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { "data-oid": "38897", style: { cursor: 'pointer' }, children: [_jsx("td", { children: "38897" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:20 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] }), _jsxs("tr", { "data-oid": "38896", style: { cursor: 'pointer' }, className: "selectedRow", children: [_jsx("td", { children: "38896" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:11 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] }), _jsxs("tr", { "data-oid": "38897", style: { cursor: 'pointer' }, children: [_jsx("td", { children: "38897" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:20 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] }), _jsxs("tr", { "data-oid": "38897", style: { cursor: 'pointer' }, children: [_jsx("td", { children: "38897" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:20 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] }), _jsxs("tr", { "data-oid": "38897", style: { cursor: 'pointer' }, children: [_jsx("td", { children: "38897" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:20 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] }), _jsxs("tr", { "data-oid": "38897", style: { cursor: 'pointer' }, children: [_jsx("td", { children: "38897" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:20 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] }), _jsxs("tr", { "data-oid": "38897", style: { cursor: 'pointer' }, children: [_jsx("td", { children: "38897" }), _jsx("td", { children: "MSTMM" }), _jsx("td", { children: "30-Oct-2024 01:20 PM" }), _jsx("td", { children: "Crust Pizza & More" }), _jsx("td", {})] })] })] })] }), _jsx("div", { id: "ShowMoreSearchViewRecords_ManageReoprts", className: "p-2 text-center", children: _jsx("button", { className: "btn btn-primary commonClass_ManageReports", children: "View more" }) })] }), _jsx("div", { className: " col-sm-12 col-md-5 col-lg-5 pr-0", children: _jsxs("div", { className: "bg-white border", style: { maxHeight: "56vh", overflowY: "auto", overflowX: "hidden" }, children: [_jsx("div", { id: "LoaderDiv_RefundOrder_SingleOrder_ManageReports", style: {
                                                    opacity: "1",
                                                    zIndex: "9999999999",
                                                    position: "absolute",
                                                    width: "96%",
                                                    transform: "translate(0%, 100%)"
                                                } }), _jsxs("div", { id: "cssFadeSection_ManageReoprts_LoaderDiv_RefundOrder_SingleOrder_ManageReports", className: "", children: [_jsx("h6", { className: "mb-0 text-center", id: "BindedRefundType_refundOrder", children: "Fast Refund" }), _jsxs("ul", { className: "item-quntity", id: "BindProductListSelectedOrder_RefundOrderTab", children: [_jsxs("li", { children: [_jsx("span", { className: "recipe-name", children: "Lichi Juice(1)" }), _jsx("span", { className: "text-right", children: "$2" })] }), _jsx("p", { className: "pr-0", children: "Refund-Reason: " })] }), _jsx("div", { className: "row  px-3 ", children: _jsxs("div", { className: "col-12", children: [_jsxs("h6", { className: "mb-0 mt-2 total2 font-weight-bold", children: [_jsx("span", { children: "Total" }), _jsx("span", { className: "float-end", id: "SingleOrderTotalAmount_RefundOrder", children: "$2" })] }), _jsxs("h6", { className: "mb-0 mt-2 total2 font-weight-bold", children: [_jsxs("span", { children: ["Discount", _jsx("span", { id: "orderDiscountName_RefundOrder" })] }), _jsx("span", { className: "float-end", id: "SingleOrderDiscount_RefundOrder", children: "$0.00" })] }), _jsxs("h6", { className: "mb-0 mt-2 total2 font-weight-bold", children: [_jsx("span", { children: "GST" }), _jsx("span", { className: "float-end", id: "SingleOrderGST_RefundOrder", children: "$17.35" })] }), _jsx("h6", { id: "SingleOrderPaymentType_RefundOrder", className: "mb-0 mt-2 total2 font-weight-bold row pb-2", children: _jsxs("span", { className: "col-12 mb-1", children: [_jsx("span", { children: "Payment Type" }), _jsx("span", { className: "float-end", children: "EFTPOS" })] }) }), _jsxs("h6", { className: "mb-0 mt-2 total2 font-weight-bold", children: [_jsx("span", { children: "Balance Change" }), _jsx("span", { className: "float-end", id: "SingleOrderBalanceChange_RefundOrder", children: "-$NaN" })] }), _jsxs("h6", { className: "mb-0 mt-2 total2 font-weight-bold", id: "showingRefund_SingleProduct", children: [_jsxs("span", { children: ["Refund", _jsx("span", { id: "total_RefundCount", children: "(1)" })] }), _jsx("span", { className: "float-end", id: "SingleOrderRefund_RefundOrder", children: "-$2" })] }), _jsx("h6", { id: "RefundReason_SingleOrder", className: "mt-1" })] }) }), _jsx("div", { className: "row my-3  pb-0 d-none", children: _jsx("div", { className: "col text-center", children: _jsx("button", { className: "btn btn-primary commonClass_ManageReports", onclick: "Show_SendInvoiceEmailPopup_RestaurantSingleOrder();", children: "Send Invoice" }) }) })] })] }) })] }), _jsx("div", { className: "graph bg-white", children: _jsx(HighchartsReact, { highcharts: Highcharts, options: options }) })] }) })] }));
};
export default RefundOrders;
