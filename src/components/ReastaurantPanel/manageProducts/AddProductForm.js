import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const AddProductForm = () => {
    const [productData, setProductData] = useState({
        productNumber: '',
        sellingPrice: '',
        productName: '',
        cost: '',
        description: '',
        mainDepartment: '',
        subDepartment: '',
        barcode: '',
        productImage: null,
        barcodeImage: null,
        recommended: false,
        featuredProduct: false,
        forceSelling: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData({
            ...productData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        setProductData({
            ...productData,
            [fieldName]: file,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send productData to the server)
        console.log('Product data submitted:', productData);
    };
    const showBarcodeImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle barcode image preview logic
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductData({
                    ...productData,
                    barcodeImage: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const showProductImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle product image preview logic
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductData({
                    ...productData,
                    productImage: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const [description, setDescription] = useState('');
    const [mainDepartment, setMainDepartment] = useState('0');
    const [subDepartment, setSubDepartment] = useState('0');
    const [barcode, setBarcode] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [barcodeImage, setBarcodeImage] = useState(null);
    const [recommended, setRecommended] = useState(false);
    const [featuredProduct, setFeaturedProduct] = useState(false);
    const [forceSelling, setForceSelling] = useState(false);
    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    return (_jsx("div", { className: "tab-pane active", id: "AddUpdateProduct_tab", children: _jsx("div", { className: "main_deapt", style: { margin: '20px 5px 0px', borderRadius: '10px' }, children: _jsxs("form", { onSubmit: handleSubmit, className: "new_customer-wrap", children: [_jsx("input", { type: "hidden", id: "hdn_PId", value: "332" }), _jsx("input", { type: "hidden", id: "hdn_DefaultOpenSection_AddUpdateProduct", value: "0" }), _jsxs("div", { className: "row custom_add_pro_rpw", children: [_jsx("div", { className: "col-12 col-md-6 col-lg-6", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsx("label", { htmlFor: "txtProductNumber_ProductForm", children: "PRODUCT NO." }), _jsx("input", { type: "text", className: "form-control IsNumeric", id: "txtProductNumber_ProductForm", name: "productNumber", value: productData.productNumber, readOnly: true })] }) }), _jsx("div", { className: "col-12 col-md-6 col-lg-6", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsx("label", { htmlFor: "txtSellingPrice_ProductForm", children: "SELLING PRICE" }), _jsx("input", { type: "text", className: "form-control IsDecimal", id: "txtSellingPrice_ProductForm", name: "sellingPrice", value: productData.sellingPrice, onChange: handleChange }), _jsx("div", { id: "sellingPrice_error_ProductForm", className: "errorsClass2" })] }) })] }), _jsxs("div", { className: "row custom_add_pro_rpw", children: [_jsx("div", { className: "col-12 col-md-6 col-lg-6", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsxs("label", { htmlFor: "txtProductName_ProductForm", children: ["NAME ", _jsx("span", { className: "requiredFieldClass", children: "*" })] }), _jsx("input", { type: "text", className: "form-control", id: "txtProductName_ProductForm", name: "productName", value: productData.productName, onChange: handleChange }), _jsx("div", { id: "txtProductName_error_ProductForm", className: "errorsClass2" })] }) }), _jsx("div", { className: "col-12 col-md-6 col-lg-6", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsx("label", { htmlFor: "txtCost_ProductForm", children: "COST" }), _jsx("input", { type: "text", className: "form-control IsDecimal", id: "txtCost_ProductForm", name: "cost", value: productData.cost, onChange: handleChange }), _jsx("div", { id: "txtCost_error_ProductForm", className: "errorsClass2" })] }) })] }), _jsxs("div", { className: "row custom_add_pro_rpw", children: [_jsx("div", { className: "col-12 col-md-6 col-lg-6", children: _jsxs("div", { className: "row row-gap", children: [_jsx("div", { className: "col-12", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsx("label", { htmlFor: "txtDescription_ProductForm", children: "DESCRIPTION" }), _jsxs("div", { className: "d-flex flex-column", children: [_jsx("textarea", { className: "form-control textareaFieldStyle", id: "txtDescription_ProductForm", name: "txtDescription_ProductForm", style: { height: '85px' }, value: description, onChange: (e) => setDescription(e.target.value) }), _jsx("div", { id: "txtDescription_error_ProductForm", className: "errorsClass2" })] })] }) }), _jsx("div", { className: "col-12", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsxs("label", { htmlFor: "ddlMainDepartment_ProductForm", children: ["MAIN DEPARTMENT ", _jsx("span", { className: "requiredFieldClass", children: "*" })] }), _jsxs("div", { className: "d-flex flex-column", children: [_jsx("div", { className: "select_box add_pro_sel", children: _jsxs("select", { className: "form-control", id: "ddlMainDepartment_ProductForm", name: "ddlMainDepartment_ProductForm", value: mainDepartment, onChange: (e) => setMainDepartment(e.target.value), children: [_jsx("option", { value: "0", children: "Select Main Department" }), _jsx("option", { value: "1", children: "Chicken Recipes" }), _jsx("option", { value: "2", children: "Veg Recipes" }), _jsx("option", { value: "3", children: "New Recipes" })] }) }), _jsx("div", { id: "ddlMainDepartment__error_ProductForm", className: "errorsClass2" })] }), _jsx("a", { href: "javascript:void(0);", children: "ADD NEW" })] }) }), _jsx("div", { className: "col-12", children: _jsxs("div", { className: "form-group aline_input mb-0", children: [_jsxs("label", { htmlFor: "ddlSubDepartment_ProductForm", children: ["SUB DEPARTMENT ", _jsx("span", { className: "requiredFieldClass", children: "*" })] }), _jsxs("div", { className: "d-flex flex-column", children: [_jsx("div", { className: "select_box add_pro_sel", children: _jsxs("select", { className: "form-control", id: "ddlSubDepartment_ProductForm", name: "ddlSubDepartment_ProductForm", value: subDepartment, onChange: (e) => setSubDepartment(e.target.value), children: [_jsx("option", { value: "0", children: "Select" }), _jsx("option", { value: "137", children: "sada" })] }) }), _jsx("div", { id: "ddlSubDepartment_error_ProductForm", className: "errorsClass2" })] }), _jsx("a", { href: "javascript:void(0);", children: "ADD NEW" })] }) }), _jsx("div", { className: "col-12", children: _jsxs("div", { className: "form-group aline_input wrap_costs mb-0", style: { width: '101%' }, children: [_jsx("label", { htmlFor: "txtBarcode_ProductForm", children: "BARCODE" }), _jsxs("div", { className: "d-flex flex-column", children: [_jsx("input", { type: "text", className: "form-control mb-1", id: "txtBarcode_ProductForm", name: "txtBarcode_ProductForm", disabled: true, value: barcode, onChange: (e) => setBarcode(e.target.value) }), _jsx("div", { id: "txtBarcode_error_ProductForm", className: "errorsClass2" }), _jsxs("div", { children: [barcodeImage && _jsx("img", { src: barcodeImage, style: { width: '100%' }, alt: "Barcode Preview" }), _jsx("input", { className: "d-none", type: "file", accept: "image/*", id: "fileBarcodeImage_ProductForm", onChange: (e) => handleImageChange(e, setBarcodeImage) })] })] }), _jsx("a", { href: "javascript:void(0);", onClick: () => setBarcodeImage(null), children: "REMOVE" })] }) })] }) }), _jsx("div", { className: "col-12 col-md-6 col-lg-6", children: _jsxs("div", { className: "row row-gap", children: [_jsx("div", { className: "col-12", children: _jsxs("div", { className: "checkform", children: [_jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { type: "checkbox", checked: recommended, onChange: () => setRecommended(!recommended) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }), _jsx("label", { children: "Recommended" }), _jsx("br", {}), _jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { type: "checkbox", checked: featuredProduct, onChange: () => setFeaturedProduct(!featuredProduct) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }), _jsx("label", { children: " Featured Product" }), _jsx("br", {}), _jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { type: "checkbox", checked: forceSelling, onChange: () => setForceSelling(!forceSelling) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }), _jsx("label", { children: "Force Selling" }), _jsx("br", {})] }) }), _jsxs("div", { className: "col-12", children: [_jsxs("div", { className: "upload_files-warps", children: [_jsxs("div", { className: "upload-btn-wrapper", children: [_jsx("button", { className: "btn p-1", children: productImage && _jsx("img", { src: productImage, style: { width: '100%' }, alt: "Product Preview" }) }), _jsx("input", { type: "file", accept: "image/*", id: "fileProductImage_ProductForm", onChange: (e) => handleImageChange(e, setProductImage) })] }), _jsxs("div", { className: "add_delete-warsp", style: { paddingLeft: '26px' }, children: [_jsx("p", { className: "buttons_wraps_add", children: _jsx("button", { type: "button", className: "add_button_pro ProductPageBtnCommanClass", onClick: () => setProductImage(null), children: "ADD" }) }), _jsx("p", { className: "buttons_wraps_delete", children: _jsx("button", { type: "button", className: "add_button_pro ProductPageBtnCommanClass", onClick: () => setProductImage(null), children: "DELETE" }) })] })] }), _jsx("div", { id: "fileProductImage_error_ProductForm", className: "errorsClass2" })] })] }) })] }), _jsx("div", { className: "col-12", children: _jsxs("div", { className: "text-end", children: [_jsx("a", { href: "/Restaurant/ManageProducts/", children: _jsx("button", { type: "button", className: "ml-2 btm_button_pro btm_button_pro_sm ProductPageBtnCommanClass", children: "BACK" }) }), _jsx("button", { type: "button", className: "btm_button_pro btm_button_pro_sm ProductPageBtnCommanClass", 
                                    // onClick={handleInsertUpdateProduct}
                                    style: { marginRight: '20px' }, children: "SAVE" })] }) })] }) }) }));
};
export default AddProductForm;
