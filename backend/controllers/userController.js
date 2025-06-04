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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.loginUser = loginUser;
exports.getAllUsers = getAllUsers;
const userModel_1 = require("../models/userModel");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = new userModel_1.User(req.body);
            //Saving user to DB, yes, password is saved as plain text, SUE ME
            yield user.save();
            console.log('There she goeeeesss ', user);
            res.status(200).json({ message: 'There he goeeeesss', userFields: user });
        }
        catch (error) {
            console.error(`createUser controller did not work`);
            res.status(500).json({ error: 'createUser controller did not work' });
        }
    });
}
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Checking if username exists
            const user = yield userModel_1.User.findOne({ username: req.body.username });
            if (!user) {
                res.status(401).json({ message: 'Username does not exist!' });
                return;
            }
            //Comparing users password with the password in the req body
            if (user.password === req.body.password) {
                res.status(200).json({ message: 'Successful login!', user });
                return;
            }
            res.status(401).json({ message: 'Password is incorrect!' });
        }
        catch (error) {
            console.error(`createUser controller did not work`);
            res.status(401).json({ message: `loginUser controller did not work` });
        }
    });
}
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userModel_1.User.find({});
            res.status(200).json({ message: 'Heres all users', users });
            return;
        }
        catch (error) {
            console.error(`createUser controller did not work`);
            res.status(500).json({ error: 'getAllUsers controller did not work' });
        }
    });
}
