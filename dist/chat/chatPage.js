"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FriendsList_1 = __importDefault(require("./FriendsList"));
const chatWindow_1 = __importDefault(require("./chatWindow"));
const ChatPage = () => {
    return (react_1.default.createElement("div", { className: "chat_page" },
        react_1.default.createElement("h1", null, "Chat Page"),
        react_1.default.createElement(FriendsList_1.default, null),
        react_1.default.createElement(chatWindow_1.default, null)));
};
exports.default = ChatPage;
