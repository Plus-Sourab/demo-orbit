import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Navbar = ({ title }) => {
    // const[isNavbar,setIsNavbar]=useState(true)
    const navbarToggle = () => {
        const body = document.body; // Targeting the body element
        body.classList.toggle('sidebar-icons-only');
    };
    return (_jsx("div", { className: "row", children: _jsxs("div", { children: [_jsxs("div", { className: "topbar d-flex align-items-center", style: { height: '60px' }, children: [_jsx("div", { className: "col-1 text-center px-0 icon-box", children: _jsx("button", { className: "align-self-center p-0", type: "button", onClick: navbarToggle, children: _jsx("i", { className: "fa fa-bars", "aria-hidden": "true", style: { color: "#4235b4" } }) }) }), _jsx("div", { id: "heading_PageTitle_RestaurantLayoutSetStyle", className: "col-11 text-center pl-0", children: _jsx("div", { className: "dropdown-wraps_user", children: _jsxs("h1", { className: "head_panel_14", id: "heading_PageTitle_RestaurantLayout", children: [title || '', " "] }) }) })] }), _jsx("nav", { className: "navbar navbar-expand-lg navbar-light bg-light", children: _jsxs("div", { className: "container-fluid", children: [_jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: _jsx("span", { className: "navbar-toggler-icon" }) }), _jsx("a", { className: "navbar-brand", href: "/Restaurant/Dashboard", children: title || 'Dashboard' }), _jsx("div", { className: "collapse navbar-collapse", id: "navbarNav", children: _jsx("ul", { className: "navbar-nav ms-auto", children: _jsx("li", { className: "nav-item" }) }) })] }) })] }) }));
};
export default Navbar;
