import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const AddSubDepartmentModal = ({ isVisible, onClose }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [departmentName, setDepartmentName] = useState("");
    const [mainDepartment, setMainDepartment] = useState("0");
    const [printGroup, setPrintGroup] = useState("0");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (type) => {
        if (type === 1) {
            // Add logic here
            console.log("Adding Sub Department");
        }
        else if (type === 2) {
            // Update logic here
            console.log("Updating Sub Department");
        }
        onClose();
    };
    if (!isVisible)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "modal-overlay", "data-backdrop": "static", "data-keyboard": "false", style: { zIndex: 9 }, onClick: onClose }), _jsx("div", { className: "modal show", id: "CreateSubDepartment_Modal", role: "dialog", style: { display: 'block', paddingRight: '17px' }, children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content plus_modal_cont", children: [_jsx("div", { className: "modal-header plus_modal_head ml-4", children: _jsx("h4", { id: "heading_Title_SubDepartmentModal", className: "modal-title plus_head_popup", children: "Add Department" }) }), _jsxs("div", { className: "modal-body new_modal_work", children: [_jsxs("div", { className: "form-group pop-up_drop", children: [_jsx("div", { className: "select_box", children: _jsxs("select", { className: "form-control", id: "ddlMainDepartment_ManageSubDepartment", value: mainDepartment, onChange: (e) => setMainDepartment(e.target.value), children: [_jsx("option", { value: "0", children: "Select Main-Department" }), _jsx("option", { value: "102", children: "DESSERTssss" }), _jsx("option", { value: "103", children: "BEVERAGES" }), _jsx("option", { value: "104", children: "Food" }), _jsx("option", { value: "105", children: "Indian Food" }), _jsx("option", { value: "106", children: "Take away" })] }) }), _jsx("div", { id: "mainDepartment_error_ManageSubDepartment", className: "errorsClass2" })] }), _jsxs("div", { className: "form-group plus_from_group", children: [_jsx("input", { type: "text", className: "form-control plus_imput_feild", id: "txtSubDepartmentName_ManageSubDepartment", placeholder: "Enter Department Name", value: departmentName, onChange: (e) => setDepartmentName(e.target.value) }), _jsx("div", { id: "subDepartmentName_error_ManageSubDepartment", className: "errorsClass2" })] }), _jsxs("div", { className: "form-group pop-up_drop", children: [_jsx("div", { className: "select_box", children: _jsx("select", { className: "form-control", id: "ddlPrintGroup_ManageSubDepartment", value: printGroup, onChange: (e) => setPrintGroup(e.target.value), children: _jsx("option", { value: "0", children: "Select Print-Group" }) }) }), _jsx("div", { id: "printGroup_error_ManageSubDepartment", className: "errorsClass2" })] }), _jsxs("div", { className: "form-group plus_from_group", style: { marginBottom: '0px' }, children: [_jsx("input", { type: "file", className: "form-control plus_imput_feild", id: "fileSubDepartmentImage_ManageSubDepartment", accept: "image/*", onChange: handleImageChange }), _jsx("label", { children: "Note: Only .jpg, .jpeg, and .png formats are allowed." }), _jsx("div", { style: { textAlign: 'center' }, children: imagePreview && _jsx("img", { src: imagePreview, alt: "Preview", style: { width: '100px', height: 'auto', marginBottom: '20px' } }) }), _jsx("div", { id: "SubDepartmentImage_error_ManageSubDepartment", className: "errorsClass2", style: { paddingBottom: '10px' } })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", children: [_jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: onClose, children: "Cancel" }), _jsx("button", { id: "btnSubmit_SubDepartment", type: "button", className: "cstm_model_plusbtn_2 btn btn-danger", onClick: () => handleSubmit(1), children: "Add" }), _jsx("button", { id: "btnUpdate_SubDepartment", type: "button", className: "cstm_model_plusbtn_2 btn btn-danger", onClick: () => handleSubmit(2), style: { display: 'none' }, children: "Update" })] })] })] }) }) })] }));
};
export default AddSubDepartmentModal;
