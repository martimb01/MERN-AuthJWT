"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandingPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function LandingPage() {
    const nav = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome to xats!" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => { nav('/register'); }, children: "Register" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { children: "Login" })] })] }));
}
