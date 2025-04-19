import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const OrderStatsCard = () => {
    // States for order statistics
    const [dailyOrder, setDailyOrder] = useState(0);
    const [weeklyOrder, setWeeklyOrder] = useState(7);
    const [monthlyOrder, setMonthlyOrder] = useState(706);
    // Loading state
    const [loading, setLoading] = useState(false);
    return (_jsxs("div", { className: "col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12", children: [loading && (_jsx("div", { className: "LoaderDiv_DashboardRestaurantCommonClass", style: {
                    opacity: 1,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2147483647,
                    display: "block", // Change from 'none' to 'block' when loading
                }, children: _jsx("div", { style: {
                        backgroundColor: "#ffffff",
                        top: 0,
                        left: 0,
                        width: "100% !important",
                        height: "100% !important",
                        zIndex: 999999999999999,
                        opacity: 0.4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }, children: _jsx("img", { src: "../../Content/Images/Loader.gif", alt: "Loading...", style: { backgroundColor: "#ffffff", width: "50px" } }) }) })), _jsxs("div", { className: "wraps_dashbords graph_wrapsproduts", style: { padding: "12px" }, children: [_jsx("h3", { className: "graph_heading", children: "Order Statistics" }), _jsxs("div", { className: "text_wrap_price mt-5", children: [_jsxs("div", { className: "text_wraps", children: [_jsxs("p", { className: "color_wrap-text", children: [_jsx("span", { className: "color_spns" }), _jsx("span", { className: "order_texts", children: "Daily Order" })] }), _jsx("p", { className: "order_price", id: "dailyOrderValue_OrderStats_Dashboard", children: dailyOrder })] }), _jsxs("div", { className: "text_wraps", children: [_jsxs("p", { className: "color_wrap-text", children: [_jsx("span", { className: "color_spns yellow" }), _jsx("span", { className: "order_texts", children: "Weekly Order" })] }), _jsx("p", { className: "order_price", id: "weeklyOrderValue_OrderStats_Dashboard", children: weeklyOrder })] }), _jsxs("div", { className: "text_wraps", children: [_jsxs("p", { className: "color_wrap-text", children: [_jsx("span", { className: "color_spns red" }), _jsx("span", { className: "order_texts", children: "Monthly Order" })] }), _jsx("p", { className: "order_price", id: "monthlyOrderValue_OrderStats_Dashboard", children: monthlyOrder })] })] })] })] }));
};
export default OrderStatsCard;
