"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const io = require('socket.io-client');
//set up our socket
const socket = io('http://localhost:5000');
const ChatWindow = () => {
    //piece of state holding a message
    const [data, setData] = react_1.useState({
        message: '',
        username: ''
    });
    const [messagesArr, setMessagesArr] = react_1.useState([]);
    //on incoming message add to messageArr and render new messages
    react_1.useEffect(() => {
        socket.on("message", (payload) => {
            setMessagesArr([...messagesArr, payload]);
        });
    }, []);
    //event handler to update message in state
    const handleChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            message: value
        }));
    };
    //event handler to handle clicking the submit button (does nothing currently)
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    //build an arrary of div elements to be rendered
    const renderArr = messagesArr.map(el => react_1.default.createElement("div", { className: "message" }, el));
    return (react_1.default.createElement("div", { id: "chatContainer" },
        react_1.default.createElement("div", { id: "chatWindow" }, renderArr),
        react_1.default.createElement("div", { id: "inputContainer" },
            react_1.default.createElement("input", { type: "text", id: "messageInput", placeholder: "Type a Message...", value: data.message, onChange: handleChange }),
            react_1.default.createElement("button", { type: "submit", onClick: handleSubmit, id: "sendMessageBtn" }, "Send"))));
};
exports.default = ChatWindow;
