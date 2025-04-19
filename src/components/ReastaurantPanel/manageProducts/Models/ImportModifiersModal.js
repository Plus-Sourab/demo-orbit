import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const ImportModifiersModal = ({ isModalOpen, closeModal }) => {
    // Handle form submission (you can adjust this as needed)
    const handleSubmit = () => {
        console.log("Importing modifiers...");
        closeModal(); // Close modal after submission
    };
    return (_jsx("div", { children: isModalOpen && (_jsx("div", { className: "modal show", id: "ImportModifiers_Modal", "data-backdrop": "static", "data-keyboard": "false", style: { display: 'block' }, "aria-modal": "true", role: "dialog", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content plus_modal_cont", children: [_jsx("div", { className: "modal-header plus_modal_head", children: _jsx("h4", { id: "heading_Title_ImportModifiers_Modall", className: "modal-title plus_head_popup", children: "Import Modifiers" }) }), _jsxs("div", { className: "modal-body new_modal_work", children: [_jsxs("div", { className: "form-group pop-up_drop", children: [_jsx("div", { className: "select_box", children: _jsx("select", { className: "form-control", id: "ddlProduct_ImportModifiers_Modal", children: _jsx("option", { value: "0", children: "Select Product" }) }) }), _jsx("div", { id: "product_error_ImportModifiers_Modal", className: "errorsClass2 errorsClass2_ImportModifiers" })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", children: [_jsx("button", { id: "btnCancel_ImportModifiers_Modal", type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: closeModal, children: "Cancel" }), _jsx("button", { id: "btnSubmit_ImportModifiers_Modal", type: "button", className: "cstm_model_plusbtn_2 btn btn-danger", onClick: handleSubmit, children: "Import" })] })] })] }) }) })) }));
};
export default ImportModifiersModal;
