"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonTheme = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const global_1 = require("material-ui-theme-state/lib/global");
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
function ButtonTheme(props) {
    const { setTheme } = (0, global_1.useTheme)();
    let click = () => {
        setTheme(theme => {
            // @ts-ignore
            theme.palette.type = (theme.palette.type !== 'light') ? 'light' : 'dark';
            return theme;
        }, true);
    };
    return (react_1.default.createElement(Button_1.default, { variant: "contained", color: "secondary", ...props, onClick: click }));
}
exports.ButtonTheme = ButtonTheme;
exports.default = ButtonTheme;
//# sourceMappingURL=button.js.map