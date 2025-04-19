import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Swal from "sweetalert2";
const ForgotPassword = () => {
    const handleForgotPassword = () => {
        // Your forgot password logic here, calling the ForgotPassword function
        Swal.fire("Password Reset Link Sent!", "Check your email", "success");
    };
    const sliderSettings = {
        slidesToShow: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToScroll: 1,
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission (no actual API call)
    };
    return (_jsxs("div", { className: "login-page", children: [_jsx("div", { id: "LoaderDiv", style: { opacity: 0.6, position: "fixed", zIndex: 9999999999 } }), _jsx("header", { className: "main-header", style: { display: "none" }, children: _jsx("div", { className: "container", children: _jsx("div", { className: "logo", children: _jsx("img", { src: "../../Content/SuperAdmin/images/logo.png", alt: "logo", className: "main-logo" }) }) }) }), _jsx("div", { className: "login_wrap", children: _jsx("div", { className: "container-fluid", children: _jsxs("div", { className: "wraps-center row flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column-reverse", children: [_jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-12 px-0", children: _jsxs("div", { className: "login_wraps-form", children: [_jsxs("h1", { children: ["Forgot Password?", " ", _jsx("span", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/logo.png", alt: "logo", className: "main-logo" }) })] }), _jsxs("form", { className: "form_login", onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group form_login-inpts", children: [_jsx("label", { style: { fontWeight: 600 }, children: "Enter your registered email" }), _jsx("input", { type: "text", className: "form-control text_wraps-input", id: "txtEmail", name: "txtEmail", placeholder: "Email", autoComplete: "off", style: { textTransform: "lowercase" } }), _jsx("div", { id: "email_error_ForgotPassword", className: "errorsClass" })] }), _jsx("div", { className: "form-group form-check", children: _jsx("div", { className: "sb-checkbox", children: _jsx("label", { className: "form-check-label", children: _jsx("a", { href: "/SuperAdmin/Login", children: _jsx("span", { className: "wrap-remember", children: "Back To Login" }) }) }) }) }), _jsx("button", { type: "button", className: "btn btn-primary wrap_submit-signin", onClick: handleForgotPassword, children: "Submit" })] })] }) }), _jsx("div", { className: "col-md-6 col-lg-6 col-sm-6 col-12 px-0", style: { padding: 0 }, children: _jsxs(Slider, { ...sliderSettings, className: "carousel", children: [_jsx("div", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/loginwrap.jpg", alt: "login-image", className: "login_image" }) }), _jsx("div", { children: _jsx("img", { src: "../../Content/SuperAdmin/images/firstraps.jpg", alt: "login-image", className: "login_image" }) })] }) })] }) }) })] }));
};
export default ForgotPassword;
