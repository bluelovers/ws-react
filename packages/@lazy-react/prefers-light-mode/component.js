"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefersLightMode = void 0;
const tslib_1 = require("tslib");
const prefersLightMode_1 = require("./prefersLightMode");
const styles_1 = require("@material-ui/core/styles");
const global_1 = require("material-ui-theme-state/lib/global");
const react_1 = tslib_1.__importStar(require("react"));
const mergeThemeSetting_1 = require("./lib/mergeThemeSetting");
function PrefersLightMode({ config, value, defaultValue, ...props }) {
    var _a;
    let bool = (_a = value !== null && value !== void 0 ? value : (0, prefersLightMode_1.prefersLightMode)()) !== null && _a !== void 0 ? _a : defaultValue;
    let [theme, setTheme] = (0, react_1.useState)((0, mergeThemeSetting_1.mergeThemeSetting)(bool, config));
    if (typeof window !== "undefined") {
        (0, react_1.useEffect)(() => {
            const lazy = () => {
                setTheme(theme => {
                    // @ts-ignore
                    theme.palette.type = bool ? 'light' : 'dark';
                    return theme;
                });
            };
            lazy();
        }, []);
    }
    const muiTheme = (0, global_1.createTheme)(theme, {
        setTheme,
    }).theme;
    return (react_1.default.createElement(styles_1.MuiThemeProvider, { ...props, theme: muiTheme }));
}
exports.PrefersLightMode = PrefersLightMode;
exports.default = PrefersLightMode;
//# sourceMappingURL=component.js.map