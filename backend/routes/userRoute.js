"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const userController_1 = require("../controllers/userController");
//register an user
exports.router.post('/register', userController_1.createUser);
//login an user
exports.router.post('/login', userController_1.loginUser);
