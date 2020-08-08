"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonTheme = void 0;
const react_1 = __importDefault(require("react"));
const global_1 = require("material-ui-theme-state/lib/global");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
function ButtonTheme(props) {
    const { theme, setTheme } = global_1.useTheme();
    let click = () => {
        setTheme(theme => {
            theme.palette.type = (theme.palette.type !== 'light') ? 'light' : 'dark';
            return theme;
        }, true);
    };
    return (react_1.default.createElement(Button_1.default, Object.assign({ variant: "contained", color: "secondary" }, props, { onClick: click })));
}
exports.ButtonTheme = ButtonTheme;
exports.default = ButtonTheme;
//# sourceMappingURL=button.js.map