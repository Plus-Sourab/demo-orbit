import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../../../assets/CSS/manageProducts/addProduct.css";
import AddProductForm from "./AddProductForm";
import ModifierSetup from "./ModifierSetup";
import PrinterAllocationTab from "./PrinterAllocationTab";
import ItemVisibilitySetup from "./ItemVisibilitySetup";
import { Link } from "react-router-dom";
// import AddProductForm from "./AddProductForm";
// import ItemVisibilitySetup from "./ItemVisibilitySetup";
// import PrinterAllocationTab from "./PrinterAllocationTab";
// import ModifierSetup from "./ModifierSetup";
const AddProduct = () => {
    // Define the functions for button actions
    const backToProducts = () => {
        // Function logic for going back to products
    };
    const goToAddProductScreen = () => {
        // Function logic for adding a new product
    };
    const previousProduct = () => {
        // Function logic for previous product
    };
    const nextProduct = () => {
        // Function logic for next product
    };
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState("AddUpdateProduct_tab");
    // Function to handle tab change
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (_jsx("div", { className: "product-body", children: _jsx("div", { className: "container-scroller", children: _jsx("div", { className: "page-body-wrapper", children: _jsxs("div", { id: "contentWrapper_RestaurantLayout", className: "content-wrapper", children: [_jsx("div", { className: "top_area_row", children: _jsxs("div", { className: "row align-items-center", children: [_jsx("div", { className: "col-12 col-md-4 col-lg-4", children: _jsx("nav", { children: _jsx("div", { className: "main_nav_bread", children: _jsxs("ol", { className: "breadcrumb pl-4", children: [_jsx("li", { className: "breadcrumb-item nav_bread_one", children: _jsx(Link, { className: "fs-6 fw-bold ", to: "/manage-products", onClick: backToProducts, children: "Products" }) }), _jsx("li", { className: "breadcrumb-icon", children: _jsx("i", { className: "fa fa-angle-right", "aria-hidden": "true" }) }), _jsx("li", { className: "breadcrumb-item nav_bread_two", children: _jsx(Link, { to: "#", className: "fs-6 fw-bold", id: "ProductFormName_ProductForm", children: "Edit Product" }) })] }) }) }) }), _jsx("div", { className: "col-12 col-md-4 col-lg-4", style: { textAlign: "right" }, children: _jsx("div", { id: "dv_AddNewProductSection_AddUpdateProduct", style: { textAlign: "right" }, children: _jsx("button", { type: "button", className: "btn-primary ProductPageBtnCommanClass", style: { backgroundColor: "#5650BD" }, onClick: goToAddProductScreen, children: "+ Add New Product" }) }) }), _jsxs("div", { className: "col-12 col-md-4 col-lg-4", style: { textAlign: "right" }, children: [_jsxs("a", { href: "#", id: "dv_PreviousProductSection_AddUpdateProduct", className: "btn-primary productbx anchorButtonProductCommonClass", onClick: previousProduct, style: { backgroundColor: "#5650BD" }, children: [_jsx("i", { className: "fa fa-angle-left", "aria-hidden": "true" }), " ", "Previous Product"] }), _jsxs("a", { href: "#", id: "dv_NextProductSection_AddUpdateProduct", className: "btn-primary productbx anchorButtonProductCommonClass", onClick: nextProduct, style: { backgroundColor: "#5650BD" }, children: ["Next Product", " ", _jsx("i", { className: "fa fa-angle-right", "aria-hidden": "true" })] })] })] }) }), _jsxs("div", { className: "wrap_tabs-products sidebar_ul-nav_tabs wrao_sidebrs", children: [_jsxs("ul", { className: "nav nav-pills footer_nav-tabs", role: "tablist", children: [_jsx("li", { className: "nav-item tabOptionClass", children: _jsx("a", { id: "a_GeneralTab_AddUpdateProduct", className: `nav-link anchorButtonProductCommonClass ${activeTab === "AddUpdateProduct_tab" ? "active" : ""}`, onClick: () => handleTabClick("AddUpdateProduct_tab"), href: "#AddUpdateProduct_tab", children: "General" }) }), _jsx("li", { className: "nav-item tabOptionClass", children: _jsx("a", { id: "a_tab_ModifierSetup_AddUpdateProduct", className: `nav-link px-0 anchorButtonProductCommonClass ${activeTab === "ModifierSetup_tab" ? "active" : ""}`, onClick: () => handleTabClick("ModifierSetup_tab"), href: "#ModifierSetup_tab", children: "Modifier Setup" }) }), _jsx("li", { className: "nav-item tabOptionClass", children: _jsx("a", { id: "a_tab_PrintersAllocation_AddUpdateProduct", className: `nav-link px-0 anchorButtonProductCommonClass ${activeTab === "PrinterSetup_tab" ? "active" : ""}`, onClick: () => handleTabClick("PrinterSetup_tab"), href: "#PrinterSetup_tab", children: "Printers Allocation" }) }), _jsx("li", { className: "nav-item tabOptionClass", children: _jsx("a", { id: "a_tab_ItemVisibility_AddUpdateProduct", className: `nav-link px-0 anchorButtonProductCommonClass ${activeTab === "ItemVisibilitySetup_tab" ? "active" : ""}`, onClick: () => handleTabClick("ItemVisibilitySetup_tab"), href: "#ItemVisibilitySetup_tab", children: "Item Visibility" }) })] }), _jsxs("div", { className: "tab-content", children: [_jsx("div", { id: "AddUpdateProduct_tab", className: `tab-pane ${activeTab === "AddUpdateProduct_tab" ? "active" : ""}`, children: _jsx(AddProductForm, {}) }), _jsx("div", { id: "ModifierSetup_tab", className: `tab-pane ${activeTab === "ModifierSetup_tab" ? "active" : ""}`, children: _jsx(ModifierSetup, {}) }), _jsx("div", { id: "PrinterSetup_tab", className: `tab-pane ${activeTab === "PrinterSetup_tab" ? "active" : ""}`, children: _jsx(PrinterAllocationTab, {}) }), _jsx("div", { id: "ItemVisibilitySetup_tab", className: `tab-pane ${activeTab === "ItemVisibilitySetup_tab" ? "active" : ""}`, children: _jsx(ItemVisibilitySetup, {}) })] })] })] }) }) }) })
    // </div>
    );
};
export default AddProduct;
