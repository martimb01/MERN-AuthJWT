"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandingPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
function LandingPage() {
    const nav = (0, react_router_dom_1.useNavigate)();
    const [inputs, setInputs] = (0, react_1.useState)({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(Object.assign(Object.assign({}, inputs), { [name]: value }));
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield axios_1.default.post('http://localhost:4000/user/login', inputs)
                .then(function (response) {
                console.log('Axios logIn post request worked!');
                console.log(response.data);
            })
                .catch(function (error) {
                console.log("Axios post request worked but something went wrong in the logIn backend");
                console.log(error);
            });
        }
        catch (error) {
            console.log("Axios post request did not work");
            console.log(error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome to xats!" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("h1", { children: "LOGIN" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { onChange: handleChange, name: "username", type: "text", value: inputs.username }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { onChange: handleChange, name: "password", type: "password", value: inputs.password }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Login" })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => { nav('/register'); }, children: "Register" })] }));
}
