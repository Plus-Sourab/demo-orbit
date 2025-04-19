import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ImportModifiersModal from "./Models/ImportModifiersModal";
import ModifierOptionModal from "./ModifierSetup/ModifierOptionModal";
import TimelineItem from "./ModifierSetup/TimelineItem";
import AddModifierModal from "./ModifierSetup/AddModifierModal";
const ModifierSetup = () => {
    //   const [modifierOptions, setModifierOptions] = useState([
    // { id: 3447, name: "Item 1", maxAllow: 1, price: 10, isDefault: false },
    // { id: 3448, name: "Item 2", maxAllow: 1, price: 0, isDefault: true },
    // { id: 3449, name: "Item 3", maxAllow: 1, price: 0, isDefault: false },
    //   ]);
    const EditModifier = (modifierId) => {
        // Edit modifier logic
        console.log("Edit Modifier", modifierId);
    };
    const ConfirmDeleteModifier = (modifierId) => {
        // Delete modifier logic
        console.log("Delete Modifier", modifierId);
    };
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to open the modal
    const GetAllProductsHavingModifiers = () => {
        console.log("Fetching products...");
        setIsModalOpen(true); // Open the modal when this function is called
    };
    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };
    const [isModifierModalOpen, setIsModifierModalOpen] = useState(false);
    // Function to show the modal
    const openModifierOptionModal = () => {
        setIsModifierModalOpen(true);
    };
    // Function to close the modal
    const closeModifierOptionModal = () => {
        setIsModifierModalOpen(false);
    };
    // Handle form submission (replace with actual logic)
    const handleModifierOptionSubmit = () => {
        console.log("Modifier option form submitted");
        closeModifierOptionModal(); // Close the modal after submission
    };
    const [isOpen, setIsOpen] = useState(true);
    const handleEditModifier = () => {
        // Add your logic to edit the modifier
    };
    const handleDeleteModifier = () => {
        // Add your logic to confirm and delete the modifier
    };
    const [isModifierFormModalOpen, setIsModifierFormModalOpen] = useState(false);
    // Function to open the modal
    const handleOpenModal = () => {
        setIsModifierFormModalOpen(true);
    };
    // Function to close the modal
    const handleCloseModal = () => {
        setIsModifierFormModalOpen(false);
    };
    return (
    // <div id="ModifierSetup_tab" className="tab-pane fade">
    _jsxs("div", { className: "product_main-wrap", style: { paddingTop: "12px", minHeight: "400px" }, children: [_jsx("div", { children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-sm-12", children: _jsx("button", { id: "btn_ImportModifiersShow_AddUpdateProduct", className: "float-end btn btn-primary btn-sm", onClick: GetAllProductsHavingModifiers, children: "Import Modifiers from another Product" }) }), _jsx(ImportModifiersModal, { isModalOpen: isModalOpen, closeModal: closeModal })] }) }), _jsx("div", { className: "wrap-product_main", style: { marginTop: "12px", paddingTop: "10px", paddingBottom: "0px" }, children: _jsxs("ul", { id: "ModifierOptionsData_ModifierSetup", className: "timeline", children: [_jsxs("li", { className: "timeline-inverted", children: [_jsx("div", { className: "timeline-badge", children: "1" }), _jsx("div", { className: "timeline-panel", children: _jsx("div", { children: _jsx("div", { className: "timeline-heading", children: _jsx("div", { className: "faq", "data-component": "Faq", children: _jsx("div", { className: "faq__grid__faqs", children: _jsxs("details", { className: "faq__grid__faqs__faq", children: [_jsx("summary", { className: "faq__grid__faqs__faq__button", children: _jsx("div", { className: "faq__grid__faqs__faq__button__content", children: _jsxs("div", { className: "heading_text-wraps", children: [_jsx("div", { className: "title_faq_wrap", style: { minWidth: "330px", maxWidth: "330px" }, children: _jsx("div", { className: "head_title", children: "Extra" }) }), _jsxs("div", { className: "other_wrap-all first_other_wraps", children: [_jsx("label", { style: { marginLeft: "16px" }, children: "Min" }), _jsx("input", { type: "text", className: "form-control min_max-value", value: "1", readOnly: true }), _jsx("label", { children: "Max" }), _jsx("input", { type: "text", className: "form-control min_max-value", value: "1", readOnly: true }), _jsx("p", { className: "default_value-wrsp", style: { display: "none" }, children: "Default Item" }), _jsx("div", { className: "faq__grid__faqs__faq__button__arrow", style: { display: "none" }, children: _jsx("svg", { width: "19", height: "12", viewBox: "0 0 19 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M16.385 0.884766L9.5 7.75477L2.615 0.884766L0.5 2.99977L9.5 11.9998L18.5 2.99977L16.385 0.884766Z", fill: "#1A73E8" }) }) })] }), _jsxs("div", { className: "heading_edit_delete", children: [_jsx("a", { href: "javascript:;", onClick: () => EditModifier(1048), children: _jsx("i", { className: "fa fa-edit", title: "Edit Modifier" }) }), _jsx("a", { href: "javascript:;", onClick: () => ConfirmDeleteModifier(1048), children: _jsx("i", { className: "fa fa-trash", title: "Delete Modifier" }) })] })] }) }) }), _jsxs("div", { className: "type_wrapper-item d-flex flex-wrap ", children: [_jsxs("div", { className: "type_wrapper-item", children: [_jsxs("p", { style: { position: "relative" }, children: [_jsxs("div", { className: "item-edit-del", style: {
                                                                                            position: "absolute",
                                                                                            top: "3px",
                                                                                            right: "3px",
                                                                                            display: "flex",
                                                                                            gap: "0px",
                                                                                        }, children: [_jsx("a", { href: "javascript:;", title: "Edit Option", onClick: () => EditModifierOption_ModifierSetup(3447), children: _jsx("i", { className: "fa fa-edit", style: { fontSize: "18px" } }) }), _jsx("a", { href: "javascript:;", title: "Delete Option", onClick: () => ConfirmDeleteModifierOption_ModifierSetup(1048, 3447), children: _jsx("i", { className: "fa fa-trash", style: { fontSize: "18px" } }) })] }), _jsx("input", { type: "text", className: "form-control modifierOptionTitleStyle", value: `Item 1`, style: {
                                                                                            borderTopRightRadius: "0px",
                                                                                            borderBottomLeftRadius: "6px",
                                                                                            borderBottomRightRadius: "6px",
                                                                                        }, readOnly: true })] }), _jsxs("div", { className: "wrapper_type-value", children: [_jsx("label", { children: "Max Allow" }), _jsx("input", { type: "text", className: "form-control min_max-value my-1", value: "1", readOnly: true }), _jsx("div", { className: "clear" }), _jsx("label", { children: "Price" }), _jsx("input", { type: "text", className: "form-control min_max-value my-1 ", value: "10", readOnly: true }), _jsx("div", { className: "clear" }), _jsx("label", { style: { marginTop: "4px" }, children: "Is Default" }), _jsx("input", { id: "chkModifierOption_Default_3447 my-1", type: "checkbox", style: {
                                                                                            marginTop: "4px",
                                                                                            cursor: "pointer",
                                                                                            width: "25px",
                                                                                        }, className: "DefaultMOCheckboxClass_1048", onChange: () => ConfirmSetDefaultModifierOption_ModifierSetup(3447, 1048) }), _jsx("div", { className: "clear" })] })] }), _jsxs("div", { className: "type_wrapper-item", children: [_jsxs("p", { style: { position: "relative" }, children: [_jsxs("div", { className: "item-edit-del", style: {
                                                                                            position: "absolute",
                                                                                            top: "3px",
                                                                                            right: "3px",
                                                                                            display: "flex",
                                                                                            gap: "0px",
                                                                                        }, children: [_jsx("a", { href: "javascript:;", title: "Edit Option", onClick: () => EditModifierOption_ModifierSetup(3447), children: _jsx("i", { className: "fa fa-edit", style: { fontSize: "18px" } }) }), _jsx("a", { href: "javascript:;", title: "Delete Option", onClick: () => ConfirmDeleteModifierOption_ModifierSetup(1048, 3447), children: _jsx("i", { className: "fa fa-trash", style: { fontSize: "18px" } }) })] }), _jsx("input", { type: "text", className: "form-control modifierOptionTitleStyle", value: `Item 1`, style: {
                                                                                            borderTopRightRadius: "0px",
                                                                                            borderBottomLeftRadius: "6px",
                                                                                            borderBottomRightRadius: "6px",
                                                                                        }, readOnly: true })] }), _jsxs("div", { className: "wrapper_type-value", children: [_jsx("label", { children: "Max Allow" }), _jsx("input", { type: "text", className: "form-control min_max-value my-1", value: "1", readOnly: true }), _jsx("div", { className: "clear" }), _jsx("label", { children: "Price" }), _jsx("input", { type: "text", className: "form-control min_max-value my-1 ", value: "10", readOnly: true }), _jsx("div", { className: "clear" }), _jsx("label", { style: { marginTop: "4px" }, children: "Is Default" }), _jsx("input", { id: "chkModifierOption_Default_3447 my-1", type: "checkbox", style: {
                                                                                            marginTop: "4px",
                                                                                            cursor: "pointer",
                                                                                            width: "25px",
                                                                                        }, className: "DefaultMOCheckboxClass_1048", onChange: () => ConfirmSetDefaultModifierOption_ModifierSetup(3447, 1048) }), _jsx("div", { className: "clear" })] })] }), _jsxs("div", { className: "type_wrapper-item", children: [_jsxs("p", { style: { position: "relative" }, children: [_jsxs("div", { className: "item-edit-del", style: {
                                                                                            position: "absolute",
                                                                                            top: "3px",
                                                                                            right: "3px",
                                                                                            display: "flex",
                                                                                            gap: "0px",
                                                                                        }, children: [_jsx("a", { href: "javascript:;", title: "Edit Option", onClick: () => EditModifierOption_ModifierSetup(3447), children: _jsx("i", { className: "fa fa-edit", style: { fontSize: "18px" } }) }), _jsx("a", { href: "javascript:;", title: "Delete Option", onClick: () => ConfirmDeleteModifierOption_ModifierSetup(1048, 3447), children: _jsx("i", { className: "fa fa-trash", style: { fontSize: "18px" } }) })] }), _jsx("input", { type: "text", className: "form-control modifierOptionTitleStyle", value: `Item 1`, style: {
                                                                                            borderTopRightRadius: "0px",
                                                                                            borderBottomLeftRadius: "6px",
                                                                                            borderBottomRightRadius: "6px",
                                                                                        }, readOnly: true })] }), _jsxs("div", { className: "wrapper_type-value", children: [_jsx("label", { children: "Max Allow" }), _jsx("input", { type: "text", className: "form-control min_max-value my-1", value: "1", readOnly: true }), _jsx("div", { className: "clear" }), _jsx("label", { children: "Price" }), _jsx("input", { type: "text", className: "form-control min_max-value my-1 ", value: "10", readOnly: true }), _jsx("div", { className: "clear" }), _jsx("label", { style: { marginTop: "4px" }, children: "Is Default" }), _jsx("input", { id: "chkModifierOption_Default_3447 my-1", type: "checkbox", style: {
                                                                                            marginTop: "4px",
                                                                                            cursor: "pointer",
                                                                                            width: "25px",
                                                                                        }, className: "DefaultMOCheckboxClass_1048", onChange: () => ConfirmSetDefaultModifierOption_ModifierSetup(3447, 1048) }), _jsx("div", { className: "clear" })] })] }), _jsxs("div", { className: "type_wrapper-item", children: [_jsx("p", { onClick: openModifierOptionModal, children: _jsx("a", { href: "#", children: _jsx("span", { className: "add_item-css", children: _jsx("i", { className: "fa fa-plus", "aria-hidden": "true" }) }) }) }), _jsx(ModifierOptionModal, { isOpen: isModifierModalOpen, onClose: closeModifierOptionModal, onSubmit: handleModifierOptionSubmit })] })] })] }) }) }) }) }) })] }), _jsx(TimelineItem, {}), _jsx(TimelineItem, {}), _jsxs("li", { className: "timeline-inverted", children: [_jsx("div", { className: "timeline-badge", children: "12" }), _jsx("div", { className: "timeline-panel", children: _jsx("div", { className: "timeline-heading", children: _jsx("div", { className: "faq", children: _jsx("div", { className: "faq__grid__faqs", children: _jsx("summary", { className: "faq__grid__faqs__faq__button", "data-category": "faq", "data-label": "\u00BFCu\u00E1nto tiempo dura la sesi\u00F3n?", onClick: handleOpenModal, children: _jsx("div", { className: "faq__grid__faqs__faq__button__content", children: _jsx("div", { className: "heading_text-wraps", children: _jsx("div", { className: "title_faq_wrap", children: _jsx("div", { className: "head_title", children: "Add Modifier" }) }) }) }) }) }) }) }) })] }), isModifierFormModalOpen && (_jsx(AddModifierModal, { onClose: handleCloseModal }))] }) })] })
    // </div>
    );
};
export default ModifierSetup;
