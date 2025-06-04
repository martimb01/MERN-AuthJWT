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
exports.default = RegisterForm;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
function RegisterForm() {
    const [inputs, setInputs] = (0, react_1.useState)({
        username: "",
        password: "",
        profileImgUrl: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: ''
    });
    //Handle user input
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(Object.assign(Object.assign({}, inputs), { [name]: value }));
        console.log(e);
    };
    //Handle submit (registration)
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield axios_1.default.post('http://localhost:4000/user/register', inputs)
                .then(function (response) {
                console.log(response.data);
            })
                .catch(function (error) {
                console.log("Did not work! (logging on browser console)");
                console.log(error);
            });
        }
        catch (error) {
            console.log("Axios request did not work!");
            console.error(error);
        }
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { children: "Username" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "string", name: "username", value: inputs.username, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { children: "Password" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", value: inputs.password, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { children: "Profile Picture URL" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "string", name: "profileImgUrl", value: inputs.profileImgUrl, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { children: "First Name" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "string", name: "firstName", value: inputs.firstName, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { children: "Last Name" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "string", name: "lastName", value: inputs.lastName, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { children: "Email" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "string", name: "email", value: inputs.email, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { children: "Date Of Birth" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "date", name: "dateOfBirth", value: inputs.dateOfBirth, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Register!" })] }) }));
}
