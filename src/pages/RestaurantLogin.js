import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
const RestaurantLogin = () => {
    // Slider settings with explicit typing
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    };
    // Placeholder function for the login check
    const CheckLogin = () => {
        // Replace with actual login logic
        console.log("Checking login...");
    };
    // Event handler for form submission (if needed)
    const handleSubmit = (e) => {
        e.preventDefault();
        CheckLogin(); // Call login logic
    };
    return (_jsx("div", { className: "login_wrap", children: _jsx("div", { className: "container-fluid", children: _jsxs("div", { className: "wraps-center row flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column-reverse", children: [_jsxs("div", { className: "col-md-6 col-lg-6 col-sm-6 col-12 px-0", children: [_jsxs("div", { className: "login_wraps-form", children: [_jsxs("h1", { children: ["Sign In", " ", _jsx("span", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/logo-1.svg", alt: "logo", className: "main-logo" }) })] }), _jsxs("form", { action: "/Restaurant/Login", method: "post", className: "form_login", onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group form_login-inpts", children: [_jsx("label", { children: "Email" }), _jsx("input", { type: "text", className: "form-control text_wraps-input", id: "txtEmail", name: "txtEmail", placeholder: "youremail@gmail.com", autoComplete: "off" }), _jsx("div", { id: "email_error_Login", className: "errorsClass" })] }), _jsxs("div", { className: "form-group form_login-inpts", children: [_jsx("label", { children: "Password" }), _jsx("input", { id: "txtPassword", name: "txtPassword", type: "password", className: "form-control text_wraps-input", placeholder: "Password" }), _jsx("div", { id: "password_error_Login", className: "errorsClass" })] }), _jsx("div", { className: "form-group form-check", children: _jsx("div", { className: "sb-checkbox", children: _jsx("label", { className: "form-check-label", children: _jsx("a", { href: "2.ForgotPassword.html", children: _jsx("span", { className: "wrap-remember", children: "Forgot Password?" }) }) }) }) }), _jsx("button", { type: "submit", className: "btn btn-primary wrap_submit-signin", children: "Sign In" })] })] }), _jsx("div", { id: "dvErrLogin_Section", className: "row", style: { display: "none" }, children: _jsx("div", { className: "col-md-12 col-lg-12 col-sm-12 errLoginSection", children: _jsx("span", { id: "resp_error_Login", className: "errorsClass" }) }) })] }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-12 px-0", style: { padding: 0 }, children: _jsx("div", { className: "carousel", children: _jsxs(Slider, { ...sliderSettings, children: [_jsx("div", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/firstraps.jpg", alt: "login-image", className: "login_image" }) }), _jsx("div", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/loginwrap.jpg", alt: "login-image", className: "login_image" }) }), _jsx("div", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/firstraps.jpg", alt: "login-image", className: "login_image" }) }), _jsx("div", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/loginwrap.jpg", alt: "login-image", className: "login_image" }) })] }) }) })] }) }) }));
};
export default RestaurantLogin;
