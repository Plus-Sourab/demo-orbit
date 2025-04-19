import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// import CreatePrintGroupModal from "";
import { Link } from "react-router-dom";
import CreatePrintGroupModal from "./CreatePrintGroupModal";
const AddPrintGroup = () => {
    // useEffect(() => {
    //   // Setting the page title when the component mounts
    //   document.getElementById("heading_PageTitle_RestaurantLayout").innerHTML =
    //     "Print Group";
    //   document.body.classList.add("main-dept-bx");
    //   return () => {
    //     document.body.classList.remove("main-dept-bx");
    //   };
    // }, []);
    const handleCheckboxChange = () => {
        // Implement the functionality for enabling the delete print group option
    };
    const handleEditPrintGroup = (id) => {
        // Implement the logic to edit print group details
        console.log(`Editing print group with ID: ${id}`);
    };
    const handleDeletePrintGroup = (id) => {
        // Implement the logic for confirming the deletion of a print group
        console.log(`Confirming deletion for print group with ID: ${id}`);
    };
    const handleOpenCreatePrintGroupPopup = () => {
        // Logic to open the popup for creating a new print group
        console.log("Opening create print group popup");
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // Function to handle form submission (for the modal)
    const handleCreatePrintGroup = (printGroupName) => {
        console.log("Print Group Created:", printGroupName);
        closeModal(); // Close the modal after submission
    };
    const [deleteEnabled, setDeleteEnabled] = useState(false);
    const [printGroups, setPrintGroups] = useState([
        { id: 61, name: "test" },
        { id: 62, name: "test1" },
    ]);
    const toggleDeleteOption = () => {
        setDeleteEnabled((prev) => !prev);
    };
    // const handleEditPrintGroup = (id) => {
    //   console.log(`Edit Print Group with id: ${id}`);
    //   // Add logic to edit the print group
    // };
    // const handleDeletePrintGroup = (id) => {
    //   console.log(`Confirm Delete Print Group with id: ${id}`);
    //   // Add logic to delete the print group
    // };
    const openCreatePrintGroupPopup = () => {
        console.log("Open Create Print Group Popup");
        // Add logic to open the create print group popup
    };
    return (_jsx("div", { id: "contentWrapper_RestaurantLayout", className: "content-wrapper", children: _jsxs("div", { className: "top_area_row", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-sm-8", children: _jsx("nav", { children: _jsx("div", { className: "main_nav_bread", children: _jsxs("ol", { className: "breadcrumb pl-3", children: [_jsx("li", { className: "breadcrumb-item nav_bread_one ", children: _jsx(Link, { className: "fs-6 fw-bold", to: "/manage-products", children: "Products" }) }), _jsx("li", { className: "breadcrumb-item nav_right pl-1 px-2", children: _jsx("a", { href: "javascript:;", className: "fs-6 fw-bold", style: { textDecoration: "none", cursor: "text" }, children: _jsx("i", { className: "fa fa-angle-right", "aria-hidden": "true" }) }) }), _jsx("li", { className: "breadcrumb-item nav_bread_two pl-0", children: _jsx(Link, { to: "javascript:;", className: "fs-6 fw-bold", style: { textDecoration: "none", cursor: "text" }, children: "Print Group" }) })] }) }) }) }) }), _jsx("div", { className: " main-dept-bx", children: _jsxs("div", { className: "main_deapt main-dept-bx", children: [_jsxs("div", { className: "row align-items-center", children: [_jsx("div", { className: "col-sm-10", children: _jsx("h2", { className: "mb-0", children: "PRINT GROUP" }) }), _jsx("div", { className: "col-sm-2", children: _jsx("div", { className: "check_wrap-right", children: _jsx("div", { className: "form-group mb-0", children: _jsxs("label", { className: "form-check-label", children: [_jsx("input", { type: "checkbox", className: "sb-checkbox__input cstm_wrap_uppr", id: "chkDeletePrintGroup_ManagePrintGroups", name: "chkDeletePrintGroup_ManagePrintGroups", checked: deleteEnabled, onChange: toggleDeleteOption }), _jsx("label", { className: "sb-checkbox__label sb-checkbox__label--green wrap_label_check", htmlFor: "chkDeletePrintGroup_ManagePrintGroups" }), _jsx("span", { className: "onlie_prder" })] }) }) }) })] }), _jsx("div", { className: "main_dept_below", children: _jsxs("div", { id: "dv_PrintGroupsList_Section_ManagePrintGroups", className: "row ui-sortable", children: [printGroups.map((group) => (_jsx("div", { className: "col-sm-2 printGroupsListClass", "data-pgid": group.id, children: _jsxs("div", { className: "wrap_chekox-remove", children: [_jsx("span", { children: _jsx("a", { href: "#", title: group.name, onClick: () => handleEditPrintGroup(group.id), children: group.name }) }), _jsx("span", { className: "removecions removeIconPrintGroupClass", style: { display: deleteEnabled ? "inline" : "none" }, onClick: () => handleDeletePrintGroup(group.id), children: _jsx("span", { className: "material-symbols-outlined", children: "remove" }) })] }) }, group.id))), _jsxs("div", { className: "col-sm-2 wrapadd-plus-cion pt-0", children: [_jsx("div", { className: "svg_plus_icon", children: _jsx("a", { href: "#", onClick: openModal, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", children: _jsxs("g", { transform: "translate(-688.5 -285.5)", children: [_jsx("line", { y2: "16", transform: "translate(697.5 286.5)", fill: "none", stroke: "#1c2126", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }), _jsx("line", { x2: "16", transform: "translate(689.5 294.5)", fill: "none", stroke: "#1c2126", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })] }) }) }) }), _jsx(CreatePrintGroupModal, { isOpen: isModalOpen, onClose: closeModal, onSubmit: handleCreatePrintGroup })] })] }) })] }) })] }) }));
};
export default AddPrintGroup;
