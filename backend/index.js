"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const userRoute_1 = require("./routes/userRoute");
const messageRoute_1 = require("./routes/messageRoute");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
// setting up express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Server routes
app.use('/user', userRoute_1.router);
app.use('/message', messageRoute_1.router);
//Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port: ' + port);
    (0, db_1.default)();
});
