"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const RegisterForm_1 = __importDefault(require("./pages/RegisterForm"));
const LandingPage_1 = __importDefault(require("./pages/LandingPage"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(LandingPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/register', element: (0, jsx_runtime_1.jsx)(RegisterForm_1.default, {}) })] }));
}
