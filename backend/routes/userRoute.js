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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const userModel_1 = require("../models/userModel");
//register an user
exports.router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new userModel_1.User(req.body);
        yield user.save();
        console.log('There she goeeeesss ', user);
        res.status(200).json({ message: 'There he goeeeesss', userFields: user });
    }
    catch (error) {
        console.error(`Something's fucked my guy`);
        res.status(500).json({ error: 'Failed to register user' });
    }
}));
