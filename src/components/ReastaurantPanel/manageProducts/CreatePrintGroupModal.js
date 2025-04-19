import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const CreatePrintGroupModal = ({ isOpen, onClose, onSubmit }) => {
    const [printGroupName, setPrintGroupName] = useState('');
    const [error, setError] = useState('');
    const handleInputChange = (e) => {
        setPrintGroupName(e.target.value);
    };
    const handleSubmit = () => {
        if (printGroupName.trim() === '') {
            setError('Print Group Name is required');
        }
        else {
            setError('');
            onSubmit(printGroupName);
        }
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "modal fixed inset-0 z-1000 bg-black bg-opacity-50 flex items-center justify-center", style: { display: 'block' }, "aria-modal": "true", role: "dialog", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content plus_modal_cont", children: [_jsx("div", { className: "modal-header plus_modal_head flex items-center", style: { display: 'block', paddingBottom: 0 }, children: _jsx("h4", { className: "modal-title plus_head_popup", children: "Add Print Group" }) }), _jsxs("div", { className: "modal-body new_modal_work", children: [_jsxs("div", { className: "form-group plus_from_group", children: [_jsx("input", { type: "text", className: "form-control plus_imput_feild", placeholder: "Enter Print Group", value: printGroupName, onChange: handleInputChange }), error && _jsx("div", { className: "errorsClass2", children: error })] }), _jsxs("div", { className: "modal-bottom plus_modal_bottom", children: [_jsx("button", { type: "button", className: "cstm_model_plusbtn_1 btn btn-danger", onClick: onClose, children: "Cancel" }), _jsx("button", { type: "button", className: "cstm_model_plusbtn_2 btn btn-danger", onClick: handleSubmit, children: "Add" })] })] })] }) }) }));
};
export default CreatePrintGroupModal;
