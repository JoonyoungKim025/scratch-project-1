"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
// **Overview: We will be testing LOGIN, REGISTER, and chatWindow(input button) using enzyme shallow rendering
// test FUNCTIONALITY and UI rendering for each**
// Enzyme is a wrapper around React test utilities which makes it easier to 
// shallow render and traverse the shallow rendered tree.
// ... import componenets
const login_1 = __importDefault(require("../client/loginSignUp/login"));
// Newer Enzyme versions require an adapter to a particular version of React
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe('React unit tests', () => {
    // Test for LOGIN
    describe('Login', () => {
        it('renders correctly', () => {
            const tree = react_test_renderer_1.default.create(react_1.default.createElement(login_1.default, null)).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
