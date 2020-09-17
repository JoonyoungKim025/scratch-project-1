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
const notLoggedIn_1 = __importDefault(require("./containers/notLoggedIn"));
const loggedIn_1 = __importDefault(require("./containers/loggedIn"));
// Setting app as functional component
const App = () => {
    const [loggedIn, setLoggedIn] = react_1.useState(false);
    return (react_1.default.createElement("div", { className: "app_div" }, loggedIn === false ?
        react_1.default.createElement(notLoggedIn_1.default, null) : react_1.default.createElement(loggedIn_1.default, null)));
};
exports.default = App;
