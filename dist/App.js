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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import regularly as react
const react_1 = __importStar(require("react"));
const header_1 = __importDefault(require("./loginSignUp/header"));
const register_1 = __importDefault(require("./loginSignUp/register"));
const chatPage_1 = __importDefault(require("./chat/chatPage"));
// import UserProfile from "./userProfile/userProfile";
// import Search from "./searchResult/search";
const login_1 = __importDefault(require("./loginSignUp/login"));
// Setting app as functional component
const App = () => {
    const [componentRendering, setComponentRendering] = react_1.useState({
        status: "OFF",
        chat: "OFF",
    });
    const handleSubmitOne = (event) => {
        event.preventDefault();
        setComponentRendering({
            status: "SIGNUP",
        });
    };
    const handleSubmitTwo = (event) => {
        event.preventDefault();
        setComponentRendering({
            status: "LOGIN",
        });
    };
    const handleSubmitThree = (event) => {
        event.preventDefault();
        setComponentRendering({
            chat: "ON",
        });
    };
    return (react_1.default.createElement("div", { className: "app_div" }, componentRendering.chat === "OFF" ? (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: handleSubmitThree }, "Go to Chat"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(header_1.default, null)),
        react_1.default.createElement("div", null,
            componentRendering.status === "OFF" ? (react_1.default.createElement("div", { id: "buttonGroup" },
                react_1.default.createElement("button", { onClick: handleSubmitOne, className: "loginSignUpButtons" }, "Signup"),
                react_1.default.createElement("button", { onClick: handleSubmitTwo, className: "loginSignUpButtons" }, "Login"))) : null,
            react_1.default.createElement("div", { id: "loginSignUpContainer" },
                componentRendering.status === "LOGIN" ? (react_1.default.createElement("div", { className: "logIn" },
                    react_1.default.createElement(login_1.default, null))) : null,
                componentRendering.status === "SIGNUP" ? (react_1.default.createElement("div", { className: "signUp" },
                    react_1.default.createElement(register_1.default, null))) : null)))) : (react_1.default.createElement(chatPage_1.default, null))));
};
exports.default = App;
