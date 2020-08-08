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
exports.PrefersLightMode = void 0;
const prefersLightMode_1 = require("./prefersLightMode");
const styles_1 = require("@material-ui/core/styles");
const global_1 = require("material-ui-theme-state/lib/global");
const react_1 = __importStar(require("react"));
const mergeThemeSetting_1 = require("./lib/mergeThemeSetting");
function PrefersLightMode({ config, value, defaultValue, ...props }) {
    var _a;
    let bool = (_a = value !== null && value !== void 0 ? value : prefersLightMode_1.prefersLightMode()) !== null && _a !== void 0 ? _a : defaultValue;
    let [theme, setTheme] = react_1.useState(mergeThemeSetting_1.mergeThemeSetting(bool, config));
    if (typeof window !== "undefined") {
        react_1.useEffect(() => {
            const lazy = () => {
                setTheme(theme => {
                    theme.palette.type = bool ? 'light' : 'dark';
                    return theme;
                });
            };
            lazy();
        }, []);
    }
    const muiTheme = global_1.createTheme(theme, {
        setTheme,
    }).theme;
    return (react_1.default.createElement(styles_1.MuiThemeProvider, Object.assign({}, props, { theme: muiTheme })));
}
exports.PrefersLightMode = PrefersLightMode;
exports.default = PrefersLightMode;
//# sourceMappingURL=component.js.map