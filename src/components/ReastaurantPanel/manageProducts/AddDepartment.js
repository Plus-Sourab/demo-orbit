import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddSubDepartmentModal from "./AddSubDepartmentModal";
// import AddSubDepartmentModal from "./AddSubDepartmentModal";
const AddDepartment = () => {
    const [isDeleteEnabled, setDeleteEnabled] = useState(false);
    const subDepartments = [
        {
            id: 346,
            title: "ਦੀਵਾਲੀ ਸਪੈਸ਼ਲ",
            imgSrc: "subdepartmentImage_1714630696536_ed8d60f58e7d498aa524455a1df4e706.png",
        },
        {
            id: 347,
            title: "दिवाली विशेष",
            imgSrc: "Miso grill salmon don_resized_50d684b7881c4b06b2dae7914cc535c7_2d4e08fc129446cba8bc17ad643d129f.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        {
            id: 367,
            title: "COMBOS",
            imgSrc: "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
        },
        // Add other departments similarly...
    ];
    const handleDeleteToggle = () => {
        setDeleteEnabled(!isDeleteEnabled);
    };
    const editSubDepartment = (id) => {
        console.log(`Edit sub-department with ID: ${id}`);
    };
    const confirmDeleteSubDepartment = (id) => {
        console.log(`Delete sub-department with ID: ${id}`);
    };
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showCropModal, setShowCropModal] = useState(false);
    const [selectedMainDepartment, setSelectedMainDepartment] = useState("0");
    const [departmentName, setDepartmentName] = useState("");
    const [selectedPrintGroup, setSelectedPrintGroup] = useState("0");
    const [previewImage, setPreviewImage] = useState(null);
    // const closeModal = () => {
    //   setShowResponseModal(false);
    //   setShowCreateModal(false);
    //   setShowCropModal(false);
    // };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };
    const handleAddUpdateDepartment = (type) => {
        if (type === 1) {
            // Add functionality
        }
        else if (type === 2) {
            // Update functionality
        }
    };
    const handleCropImage = () => {
        // Crop image functionality
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return (_jsx("div", { className: " department-class sidebar-icon-only min-vh-100", children: _jsx("div", { id: "contentWrapper_RestaurantLayout", className: "content-wrapper ", children: _jsxs("div", { className: "top_area_row", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-sm-8", children: _jsx("nav", { children: _jsx("div", { className: "main_nav_bread", children: _jsxs("ol", { className: "breadcrumb", children: [_jsx("li", { className: "breadcrumb-item nav_bread_one", children: _jsx(Link, { to: "/manage-products", children: "Products" }) }), _jsx("li", { className: "breadcrumb-item nav_right pl-0", children: _jsx("a", { href: "#", style: { textDecoration: "none", cursor: "text" }, children: _jsx("i", { className: "fa fa-angle-right", "aria-hidden": "true" }) }) }), _jsx("li", { className: "breadcrumb-item nav_bread_two pl-0", children: _jsx("a", { href: "#", style: { textDecoration: "none", cursor: "text" }, children: "Department" }) })] }) }) }) }) }), _jsxs("div", { className: "main_deapt", children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-sm-10", children: _jsx("h2", { className: "mb-0", children: "DEPARTMENT" }) }), _jsx("div", { className: "col-sm-2", children: _jsx("div", { className: "check_wrap-right", children: _jsx("div", { className: "form-group mb-0", children: _jsxs("label", { className: "form-check-label", children: [_jsx("input", { type: "checkbox", className: "sb-checkbox__input cstm_wrap_uppr", id: "chkDeleteSubDepartment", name: "chkDeleteSubDepartment", checked: isDeleteEnabled, onChange: handleDeleteToggle }), _jsx("label", { className: "sb-checkbox__label sb-checkbox__label--green wrap_label_check", htmlFor: "chkDeleteSubDepartment" }), _jsx("span", { className: "onlie_prder" })] }) }) }) })] }), _jsx("div", { className: "main_dept_below", children: _jsxs("div", { id: "dv_SubDeparmentsList_Section", className: "row ui-sortable", children: [subDepartments.map((subDept) => (_jsx("div", { className: "col-sm-2 subDepartmentsListClass ui-sortable-handle", "data-sid": subDept.id, children: _jsxs("div", { className: "wrap_chekox-remove", children: [_jsx("span", { children: _jsx("a", { href: "#", onClick: () => editSubDepartment(subDept.id), title: subDept.title, children: subDept.title }) }), subDept.imgSrc && (_jsx("span", { children: _jsx("img", { src: `../../Content/ImageUploads/SubDepartmentImages/${subDept.imgSrc}`, onClick: () => editSubDepartment(subDept.id), style: {
                                                                width: "auto",
                                                                height: "70px",
                                                                cursor: "pointer",
                                                            }, alt: subDept.title }) })), isDeleteEnabled && (_jsx("span", { className: "removecions removeIconSubDepartmentClass", onClick: () => confirmDeleteSubDepartment(subDept.id), children: _jsx("span", { className: "material-symbols-outlined", children: "remove" }) }))] }) }, subDept.id))), _jsxs("div", { className: "col-sm-2 wrapadd-plus-cion", children: [_jsx("div", { className: "svg_plus_icon", children: _jsx("a", { href: "#", onClick: (e) => {
                                                            e.preventDefault();
                                                            openModal();
                                                        }, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", children: _jsxs("g", { transform: "translate(-688.5 -285.5)", children: [_jsx("line", { y2: "16", transform: "translate(697.5 286.5)", fill: "none", stroke: "#1c2126", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }), _jsx("line", { x2: "16", transform: "translate(689.5 294.5)", fill: "none", stroke: "#1c2126", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })] }) }) }) }), _jsx(AddSubDepartmentModal, { isVisible: isModalVisible, onClose: closeModal })] }), _jsxs("div", { children: [showResponseModal && (_jsx("div", { className: "modal", style: { zIndex: 1065 }, children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content", children: [_jsx("div", { className: "modal-header", children: _jsx("h4", { className: "modal-title", children: "Response Message" }) }), _jsxs("div", { className: "modal-body", children: [_jsx("p", { id: "lblResponseMessage_SubDepartment_Modal", children: "Response Message" }), _jsx("button", { type: "button", className: "btn btn-danger", onClick: () => setShowResponseModal(false), children: "Close" })] })] }) }) })), showCreateModal && (_jsx("div", { className: "modal", "data-backdrop": "static", "data-keyboard": "false", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content", children: [_jsx("div", { className: "modal-header", children: _jsx("h4", { className: "modal-title", children: "Add Department" }) }), _jsxs("div", { className: "modal-body", children: [_jsx("div", { className: "form-group", children: _jsx("select", { className: "form-control", value: selectedMainDepartment, onChange: (e) => setSelectedMainDepartment(e.target.value), children: _jsx("option", { value: "0", children: "Select Main-Department" }) }) }), _jsx("div", { className: "form-group", children: _jsx("input", { type: "text", className: "form-control", placeholder: "Enter Department Name", value: departmentName, onChange: (e) => setDepartmentName(e.target.value) }) }), _jsx("div", { className: "form-group", children: _jsx("select", { className: "form-control", value: selectedPrintGroup, onChange: (e) => setSelectedPrintGroup(e.target.value), children: _jsx("option", { value: "0", children: "Select Print-Group" }) }) }), _jsxs("div", { className: "form-group", children: [_jsx("input", { type: "file", className: "form-control", accept: "image/*", onChange: handleImageChange }), previewImage && (_jsx("img", { src: previewImage, alt: "Preview", style: { width: "100px", height: "auto" } }))] }), _jsx("button", { type: "button", className: "btn btn-danger", onClick: () => setShowCreateModal(false), children: "Cancel" }), _jsx("button", { type: "button", className: "btn btn-danger", onClick: () => handleAddUpdateDepartment(1), children: "Add" }), _jsx("button", { type: "button", className: "btn btn-danger", onClick: () => handleAddUpdateDepartment(2), style: { display: "none" }, children: "Update" })] })] }) }) })), showCropModal && (_jsx("div", { className: "modal", "data-backdrop": "static", "data-keyboard": "false", children: _jsx("div", { className: "modal-dialog cstm_modal_dialog", children: _jsxs("div", { className: "modal-content", style: { width: "700px" }, children: [_jsx("div", { className: "modal-header", style: { textAlign: "center" }, children: _jsx("h4", { className: "modal-title", children: "Adjust SubDepartment Image" }) }), _jsxs("div", { className: "modal-body", children: [_jsx("div", { className: "form-group", children: _jsx("div", { className: "image-wrapper", id: "dv_CropImage_Section" }) }), _jsx("button", { type: "button", className: "btn btn-danger", onClick: handleCropImage, children: "Set" })] })] }) }) }))] })] }) })] })] }) }) }));
};
export default AddDepartment;
