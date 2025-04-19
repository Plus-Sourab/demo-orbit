import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import "../../assets/CSS/manage-reasons.css";
const reasonsData = [
    { id: 20, label: 'reason 20' },
    { id: 15, label: 'reason 1' },
    { id: 19, label: 'reason 7' },
    { id: 17, label: 'reason 5' },
    { id: 8, label: 'reason 3' },
    { id: 7, label: 'reason 2' },
    { id: 16, label: 'reason 4' }
];
const ManageReasons = () => {
    const [reasons, setReasons] = useState(reasonsData);
    const [newReason, setNewReason] = useState('');
    const handleCheckboxChange = (id) => {
        setReasons(prevReasons => prevReasons.map(reason => reason.id === id ? { ...reason, checked: !reason.checked } : reason));
    };
    const handleEdit = (id) => {
        const updatedReasons = reasons.map(reason => reason.id === id
            ? { ...reason, editing: !reason.editing }
            : { ...reason, editing: false });
        setReasons(updatedReasons);
    };
    const handleDelete = (id) => {
        setReasons(prevReasons => prevReasons.filter(reason => reason.id !== id));
    };
    const handleAddReason = () => {
        if (newReason.trim() !== '') {
            const newReasonObj = {
                id: Date.now(),
                label: newReason,
                checked: false,
                editing: false
            };
            setReasons([...reasons, newReasonObj]);
            setNewReason('');
        }
    };
    return (_jsx("div", { className: "container-scroller", children: _jsx("div", { className: "page-body-wrapper", children: _jsx("div", { id: "contentWrapper_RestaurantLayout", className: "content-wrapper", children: _jsx("div", { className: "mange_regions_section", children: _jsx("main", { className: "content", children: _jsxs("div", { className: "card", style: { borderRadius: '6px' }, children: [_jsx("div", { className: "row g-0", children: _jsx("div", { className: "col-12 col-lg-12 col-xl-12", children: _jsx("div", { className: "position-relative", children: _jsx("div", { id: "ReasonsList_Section_ManageReasons", className: "chat-messages p-4 ui-sortable", style: { paddingRight: '20px', minHeight: 'calc(100vh - 308px)' }, children: reasons.map(reason => (_jsxs("div", { className: "chat-message-left pb-3 ReasonSectionCommonClass ui-sortable-handle", style: { width: '100%', alignItems: 'center' }, children: [_jsx("div", { style: { textAlign: 'left', marginRight: '10px' }, children: _jsx("input", { id: `chkReason_${reason.id}_ManageReasons`, type: "checkbox", className: "edit_checkbox", style: { cursor: 'pointer' }, checked: reason.checked, onChange: () => handleCheckboxChange(reason.id) }) }), _jsx("div", { id: `lblReason_${reason.id}_Section_ManageReasons`, className: "flex-shrink-1 rounded py-2 px-3 ml-3 lblReasonSectionClass", style: { width: 'inherit', minHeight: '50px', cursor: 'pointer' }, onClick: () => handleEdit(reason.id), children: reason.label }), reason.editing && (_jsx("div", { id: `TextFieldReason_${reason.id}_Section_ManageReasons`, className: "flex-shrink-1 rounded py-2 px-3 ml-3 TextFieldReasonSectionClass", style: { width: 'inherit' }, children: _jsx("input", { id: `txtReasonForEdit_${reason.id}_ManageReasons`, type: "text", className: "form-control TextFieldReasonClass", onBlur: () => handleEdit(reason.id) }) })), _jsx("div", { style: { textAlign: 'right' }, children: _jsx("span", { className: "material-icons", style: { fontSize: '40px', cursor: 'pointer' }, title: "Delete Reason", onClick: () => handleDelete(reason.id), children: "delete" }) })] }, reason.id))) }) }) }) }), _jsx("div", { className: "flex-grow-0 py-3 px-4 border-top", children: _jsxs("div", { className: "input-group", children: [_jsx("input", { id: "txtReason_ManageReasons", type: "text", className: "form-control", placeholder: "Add New Reason...", value: newReason, onChange: (e) => setNewReason(e.target.value) }), _jsx("input", { type: "button", className: "btn", style: { background: '#554EBC', color: '#fff' }, value: "ADD", onClick: handleAddReason })] }) })] }) }) }) }) }) }));
};
export default ManageReasons;
