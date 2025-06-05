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
exports.getMessageByReceiverId = exports.sendMessage = void 0;
const messageModel_1 = require("../models/messageModel");
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const senderId = req.body.senderId;
        const senderFirstName = req.body.senderFirstName;
        const senderLastName = req.body.senderLastName;
        const receiverId = req.body.receiverId;
        const content = req.body.content;
        const message = new messageModel_1.Message({
            senderId,
            receiverId,
            content,
            senderFirstName,
            senderLastName
        });
        yield message.save();
        res.status(200).json({ info: 'Message created!', message });
    }
    catch (error) {
        res.status(500).json({ message: 'message controler post didnt work!', error });
    }
});
exports.sendMessage = sendMessage;
const getMessageByReceiverId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receiverId = req.params.id;
        const messages = yield messageModel_1.Message.find({ receiverId: receiverId });
        if (messages.length === 0) {
            res.status(200).json({ message: 'No messages for you!' });
            console.log('messageController get successfull but no messages for this receiverId!');
            return;
        }
        res.status(200).json({ message: `Messages fetched successfully!`, messages });
        console.log('Messages fetched successfully!');
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong with the getMessagesByReceiverId controller!' });
        console.error(error);
    }
});
exports.getMessageByReceiverId = getMessageByReceiverId;
