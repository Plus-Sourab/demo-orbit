import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ImportProducts = () => {
    const [fileError, setFileError] = useState('');
    const navigate = useNavigate();
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // Call a validation function here
            // ValidateFile_ImportProducts(file); // You can replace this with actual validation logic
        }
    };
    const handleSubmit = () => {
        // Replace this with your actual import functionality
        console.log('Importing products...');
    };
    return (_jsx("div", { className: "content-wrapper min-h-[620px] pt-5", children: _jsxs("div", { className: "top_area_row ", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-sm-8", children: _jsx("nav", { children: _jsx("div", { className: "main_nav_bread", children: _jsxs("ol", { className: "breadcrumb pl-3", children: [_jsx("li", { className: "breadcrumb-item nav_bread_one ", children: _jsx(Link, { className: "fs-6 fw-bold", to: "/manage-products", children: "Products" }) }), _jsx("li", { className: "breadcrumb-item nav_right pl-1 px-2", children: _jsx("a", { href: "javascript:;", className: "fs-6 fw-bold", style: { textDecoration: "none", cursor: "text" }, children: _jsx("i", { className: "fa fa-angle-right", "aria-hidden": "true" }) }) }), _jsx("li", { className: "breadcrumb-item nav_bread_two pl-0", children: _jsx(Link, { to: "javascript:;", className: "fs-6 fw-bold", style: { textDecoration: "none", cursor: "text" }, children: "Import Products" }) })] }) }) }) }) }), _jsx("div", { className: "wrap_tabs-products sidebar_ul-nav_tabs", children: _jsx("div", { className: "main_deapt  my-4 p-8 rounded-lg", children: _jsxs("form", { action: "javascript:void(0)", className: "new_customer-wrap", children: [_jsx("div", { className: "row custom_add_pro_rpw mb-0", children: _jsxs("div", { className: "col-sm-6", children: [_jsxs("div", { className: "form-group aline_input", children: [_jsx("label", { className: "w-full pl-0 pb-0", children: "Select Excel File" }), _jsx("div", { className: "flex flex-col w-full", children: _jsx("input", { type: "file", accept: ".xls,.xlsx,.csv", name: "txtExcelSheet_ProductsData_ImportProducts", id: "txtExcelSheet_ProductsData_ImportProducts", onChange: handleFileChange }) })] }), _jsx("div", { className: "row dv_Note_Section mt-4", children: _jsxs("div", { className: "col-sm-12", children: [_jsx("span", { className: "font-semibold", children: "Note:" }), _jsx("span", { children: "Please select the valid excel-file containing the product data to import." }), _jsx("br", {}), _jsx("span", { children: "Only .xls, .xlsx, and .csv formats are allowed" })] }) })] }) }), _jsxs("div", { className: "row custom_add_pro_rpw button_botm mt-4", children: [_jsx("div", { className: "col-sm-6 text-left", children: fileError && _jsx("div", { id: "excelFile_error_ImportProducts", className: "errorsClass2", children: fileError }) }), _jsxs("div", { className: "col-sm-6", children: [_jsx("button", { type: "button", className: "ml-2 btm_button_pro btm_button_pro_sm", onClick: () => navigate('/manage-products'), children: "BACK" }), _jsx("button", { type: "button", className: "btm_button_pro btm_button_pro_sm mr-5", onClick: handleSubmit, children: "Submit" })] })] })] }) }) })] }) }));
};
export default ImportProducts;
