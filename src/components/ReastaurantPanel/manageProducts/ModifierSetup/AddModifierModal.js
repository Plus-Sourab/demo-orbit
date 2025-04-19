import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
const AddModifierModal = ({ onClose }) => {
    const [modifierName, setModifierName] = useState("");
    const [minSelection, setMinSelection] = useState("0");
    const [maxSelection, setMaxSelection] = useState("1");
    const [isMandatory, setIsMandatory] = useState(false);
    // Handling checkbox state
    const handleMandatoryChange = () => {
        setIsMandatory(!isMandatory);
    };
    // Function to handle form submission
    const handleSubmit = () => {
        // Logic for adding/updating modifier
        console.log("Modifier Added", {
            modifierName,
            minSelection,
            maxSelection,
            isMandatory,
        });
        onClose();
    };
    return (_jsxs("div", { className: "modal show", style: { display: "block" }, "aria-modal": "true", role: "dialog", children: [_jsx("div", { className: "modal-dialog cstm_modal_dialog", style: { marginTop: "100px" }, children: _jsxs("div", { className: "modal-content plus_modal_cont", children: [_jsx("div", { className: "modal-header plus_modal_head", style: { textAlign: "center" }, children: _jsx("h4", { id: "heading_Title_AddUpdateModifier_AddProduct_Modal", className: "modal-title plus_head_popup", children: "Add Modifier" }) }), _jsxs("div", { className: "modal-body new_modal_work", children: [_jsxs("div", { className: "form-group plus_from_group", style: { marginTop: "0px" }, children: [_jsx("label", { className: "lblModifiersSettingClass", children: "Name" }), _jsx("input", { type: "text", className: "form-control plus_imput_feild", value: modifierName, onChange: (e) => setModifierName(e.target.value), placeholder: "Enter Modifier Name" })] }), _jsxs("div", { className: "form-group plus_from_group", style: { marginTop: "0px", marginBottom: "0px" }, children: [_jsx("label", { className: "lblModifiersSettingClass", children: "Mandatory" }), _jsx("p", { style: { textAlign: "left", padding: "0px" }, children: _jsxs("label", { className: "switch round_wraps", children: [_jsx("input", { type: "checkbox", checked: isMandatory, onChange: handleMandatoryChange }), _jsx("span", { className: "slider round" })] }) })] }), _jsxs("div", { className: "form-group plus_from_group", style: { display: "inline-block", width: "40%" }, children: [_jsx("label", { className: "lblModifiersSettingClass", children: "Min" }), _jsx("input", { type: "text", className: "form-control plus_imput_feild", value: minSelection, disabled: true, placeholder: "0" })] }), _jsxs("div", { className: "form-group plus_from_group", style: { display: "inline-block", width: "40%" }, children: [_jsx("label", { className: "lblModifiersSettingClass", children: "Max" }), _jsx("input", { type: "text", className: "form-control plus_imput_feild", value: maxSelection, onChange: (e) => setMaxSelection(e.target.value), placeholder: "1" })] }), _jsx("div", { className: "form-group plus_from_group", style: { marginTop: "0px", marginBottom: "0px" } })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", style: { paddingTop: "15px" }, children: [_jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: onClose, children: "Cancel" }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_2 btn btn-danger", onClick: handleSubmit, children: "Add" })] })] }) }), _jsx("div", { className: "modal-backdrop show", style: {
                    background: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1030, // Lower z-index to be below the modal content
                } })] }));
};
export default AddModifierModal;
