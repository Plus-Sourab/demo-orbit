import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../../../assets/CSS/peripheral.css";
// import "../../../index.css"
const EmailModal = () => {
    const closeEmailModal = () => {
        const cancelButton = document.getElementById('btnCancel_SendPDFReportEmail_RestaurantReports_Modal');
        if (cancelButton) {
            cancelButton.click();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("button", { id: "btn_SendPDFReportEmail_RestaurantReports_Modal", type: "button", className: "btn btn-info btn-lg", "data-toggle": "modal", "data-target": "#SendPDFReportEmail_RestaurantReports_Modal", style: { display: 'none' } }), _jsx("div", { className: "modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", id: "SendPDFReportEmail_RestaurantReports_Modal", "data-backdrop": "static", "data-keyboard": "false", style: {}, children: _jsx("div", { className: "modal-dialog transition-opacity cstm_modal_dialog", children: _jsxs("div", { className: "modal-content plus_modal_cont", children: [_jsx("div", { className: "modal-header plus_modal_head", style: {
                                    display: 'block',
                                    paddingBottom: 0,
                                    textAlign: 'center',
                                }, children: _jsx("h4", { className: "modal-title plus_head_popup", style: { left: 0 }, children: "Send Report" }) }), _jsxs("div", { className: "modal-body new_modal_work", children: [_jsxs("div", { className: "form-group plus_from_group", children: [_jsx("input", { type: "text", className: "form-control plus_imput_feild", id: "txtEmail_SendPDFReportEmail_RestaurantReports_Modal", placeholder: "Enter Email", style: { textTransform: 'lowercase' } }), _jsx("div", { id: "email_error_SendPDFReportEmail_RestaurantReports_Modal", className: "errorsClass2" })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", children: [_jsx("button", { id: "btnCancel_SendPDFReportEmail_RestaurantReports_Modal", type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", "data-dismiss": "modal", style: { display: 'none' } }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: closeEmailModal, children: "Cancel" }), _jsx("button", { id: "btnSendEmail_SendPDFReportEmail_RestaurantReports_Modal", type: "button", className: "cstm_model_plusbtn_2 btn btn-danger", children: "Send" })] })] })] }) }) })] }));
};
export default EmailModal;
