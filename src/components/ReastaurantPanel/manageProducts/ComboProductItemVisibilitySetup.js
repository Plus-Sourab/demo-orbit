import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ComboProductItemVisibilitySetup = () => {
    // State to manage visibility for each item
    const [kioskVisible, setKioskVisible] = useState(false);
    const [posVisible, setPosVisible] = useState(false);
    const [tableQrVisible, setTableQrVisible] = useState(false);
    const [storeQrVisible, setStoreQrVisible] = useState(false);
    // Handler for toggling visibility
    const handleVisibilityChange = (id) => {
        switch (id) {
            case 1:
                setKioskVisible((prev) => !prev);
                break;
            case 2:
                setPosVisible((prev) => !prev);
                break;
            case 5:
                setTableQrVisible((prev) => !prev);
                break;
            case 6:
                setStoreQrVisible((prev) => !prev);
                break;
            default:
                break;
        }
    };
    return (_jsx("div", { id: "ItemVisibilitySetup_tab", className: "tab-pane fade active show", children: _jsx("div", { className: "product_main-wrap", style: { paddingTop: '30px', minHeight: '400px' }, children: _jsx("div", { className: "items_chckbox-wraps wrap_product-availability", style: { height: '410px', overflowY: 'auto' }, children: _jsxs("div", { className: "col-md-12 col-lg-12 col-sm-12 product_availability-wrap", children: [_jsxs("div", { className: "row mb_bottom_25 mrgn_top_20", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsx("p", { className: "product_item-name", children: _jsx("span", { style: { fontSize: '18px', fontWeight: '500' }, children: "Kiosk" }) }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { id: "chk_KioskVisibility_ProductForm", type: "checkbox", checked: kioskVisible, onChange: () => handleVisibilityChange(1) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }) })] }), _jsxs("div", { className: "row mb_bottom_25", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsx("p", { className: "product_item-name", children: _jsx("span", { style: { fontSize: '18px', fontWeight: '500' }, children: "POS" }) }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { id: "chk_POSVisibility_ProductForm", type: "checkbox", checked: posVisible, onChange: () => handleVisibilityChange(2) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }) })] }), _jsxs("div", { className: "row mb_bottom_25", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsx("p", { className: "product_item-name", children: _jsx("span", { style: { fontSize: '18px', fontWeight: '500' }, children: "Table-QR" }) }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { id: "chk_WebMenuVisibility_ProductForm", type: "checkbox", checked: tableQrVisible, onChange: () => handleVisibilityChange(5) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }) })] }), _jsxs("div", { className: "row mb_bottom_25", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsx("p", { className: "product_item-name", children: _jsx("span", { style: { fontSize: '18px', fontWeight: '500' }, children: "Store-QR" }) }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-6", style: { textAlign: 'center' }, children: _jsxs("label", { className: "switch round_wraps product_option_style", children: [_jsx("input", { id: "chk_CustomerVisibility_ProductForm", type: "checkbox", checked: storeQrVisible, onChange: () => handleVisibilityChange(6) }), _jsx("span", { className: "slider round", style: { top: '-5px' } })] }) })] })] }) }) }) }));
};
export default ComboProductItemVisibilitySetup;
