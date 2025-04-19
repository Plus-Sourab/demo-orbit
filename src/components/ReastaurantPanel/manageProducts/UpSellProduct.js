import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
const UpSellProduct = () => {
    const [upsellProducts, setUpsellProducts] = useState([
        {
            id: 249,
            name: "HOT SPICY CHK BONELESS",
            price: 100,
            img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
            selected: true,
            disabled: true,
        },
        {
            id: 252,
            name: "ORIGINAL FRIED CHICKEN BOWL",
            price: 1000,
            img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
            selected: true,
            disabled: true,
        },
        {
            id: 255,
            name: "HOT SPICY CHICKEN BOWL",
            price: 17.99,
            img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
            selected: false,
            disabled: false,
        },
        {
            id: 256,
            name: "HONEY SOY CHICKEN BOWL",
            price: 100,
            img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
            selected: false,
            disabled: false,
        },
    ]);
    const [crossSellOptions, setCrossSellOptions] = useState([
        { id: 252, name: "ORIGINAL FRIED CHICKEN BOWL" },
        { id: 255, name: "HOT SPICY CHICKEN BOWL" },
        { id: 256, name: "HONEY SOY CHICKEN BOWL" },
        { id: 257, name: "ORIGINAL FRIED CHICKEN COMBO" },
    ]);
    const handleCheckboxChange = (productId) => {
        setCheckedProducts((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    };
    const handleUpsellSelectChange = (productId, upsellId) => {
        setSelectedUpsells((prevState) => ({
            ...prevState,
            [productId]: upsellId,
        }));
    };
    const handleAddProducts = () => {
        // Your AddProductsToUpsellTable function logic here
    };
    const handleRemoveProducts = () => {
        // Your RemoveProductsFromUpsellTable function logic here
    };
    const handleSubmit = () => {
        // Your LinkUpsellByProduct function logic here
    };
    return (_jsx("div", { id: "contentWrapper_RestaurantLayout", className: "content-wrapper pt-5 min-h-screen", children: _jsxs("div", { className: "top_area_row", children: [_jsx("div", { className: "row align-items-center", children: _jsx("div", { className: "col-12 col-md-4 col-lg-4", children: _jsx("nav", { children: _jsx("div", { className: "main_nav_bread", children: _jsxs("ol", { className: "breadcrumb pl-3", children: [_jsx("li", { className: "breadcrumb-item nav_bread_one", children: _jsx(Link, { className: "fs-6 fw-bold", to: "/manage-products", children: "Products" }) }), _jsx("li", { className: "breadcrumb-icon", children: _jsx("i", { className: "fa fa-angle-right", "aria-hidden": "true" }) }), _jsx("li", { className: "breadcrumb-item nav_bread_two", children: _jsx("span", { className: "fs-6 fw-bold", children: "Upsell By Product" }) })] }) }) }) }) }), _jsx("div", { className: "wrap_tabs-products sidebar_ul-nav_tabs", children: _jsx("div", { className: "tab-content", children: _jsxs("div", { className: "upsell-cross-main", children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6", children: _jsx("div", { className: "upsell-cross-inner upsell-cross-inner-2", children: _jsxs("div", { className: "upsell-cross-overflow", children: [_jsx("h3", { children: "Product List" }), _jsx("div", { className: "cross-scroll", id: "cross-scroll-upsell", children: _jsxs("table", { className: "table", id: "product_list_table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "#" }), _jsx("th", { className: "text-center", scope: "col", children: "Photo" }), _jsx("th", { className: "text-center", scope: "col", children: "Name" }), _jsx("th", { className: "text-center", scope: "col", children: "Price" })] }) }), _jsx("tbody", { className: "upsell_table_body", children: upsellProducts.map((product, index) => (_jsxs("tr", { children: [_jsx("td", { children: _jsx("input", { type: "checkbox", className: "form-check-input productCheck", id: `productCheck${index}`, checked: product.selected, disabled: product.disabled }) }), _jsx("td", { className: "text-center", children: _jsx("img", { src: product.img, alt: product.name, width: "50", height: "50" }) }), _jsx("td", { className: "text-center", children: product.name }), _jsxs("td", { className: "text-center", children: ["$", product.price] })] }, product.id))) })] }) })] }) }) }), _jsx("div", { className: "col-md-6", children: _jsx("div", { className: "upsell-cross-inner upsell-cross-inner-2", children: _jsxs("div", { className: "upsell-cross-overflow", children: [_jsx("h3", { children: "Item Upsell / Cross Sell" }), _jsx("div", { className: "cross-scroll", id: "cross-scroll-upsell", children: _jsxs("table", { className: "table", id: "upsell_by_product_list", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "#" }), _jsx("th", { className: "text-center", scope: "col", children: "Name" }), _jsx("th", { className: "text-center", scope: "col", children: "Price" }), _jsx("th", { className: "text-center", scope: "col", children: "Upsell Product" })] }) }), _jsx("tbody", { className: "upsell_table_body", children: upsellProducts.map((product, index) => (_jsxs("tr", { id: `R${index}`, className: "upsellRows", "data-id": product.id, children: [_jsx("td", { children: _jsx("input", { type: "checkbox", className: "form-check-input upsellProductCheck", id: `upsellProductCheck${index}`, "data-id": product.id }) }), _jsx("td", { className: "text-center", children: product.name }), _jsxs("td", { className: "text-center", children: ["$", product.price] }), _jsx("td", { className: "w-100", children: _jsxs("select", { className: "form-control upsellByProductListDropdown", children: [_jsx("option", { children: "Select" }), crossSellOptions.map((option) => (_jsx("option", { value: option.id, children: option.name }, option.id)))] }) })] }, `upsell-${product.id}`))) })] }) })] }) }) })] }), _jsx("div", { className: "btn-upsel mt-4", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-6 col-md-6", children: [_jsx("button", { children: _jsx(Link, { className: "text-light", to: "/Restaurant/ManageProducts", children: "Exit" }) }), _jsx("button", { className: "products-add-btn", onClick: handleAddProducts, disabled: true, children: "Add" })] }), _jsxs("div", { className: "col-12 col-md-6", style: { textAlign: "right" }, children: [_jsx("button", { className: "upsell_remove_btn", onClick: handleRemoveProducts, children: "Remove" }), _jsx("button", { className: "upsell-submit-btn", id: "submit_UpsellByProductData", onClick: handleSubmit, children: "Submit" })] })] }) })] }) }) })] }) }));
};
export default UpSellProduct;
