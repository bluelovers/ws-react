"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeThemeSetting = void 0;
const tslib_1 = require("tslib");
const merge_1 = tslib_1.__importDefault(require("lodash/merge"));
const blue_1 = tslib_1.__importDefault(require("@material-ui/core/colors/blue"));
const purple_1 = tslib_1.__importDefault(require("@material-ui/core/colors/purple"));
function mergeThemeSetting(bool, theme = {}) {
    theme !== null && theme !== void 0 ? theme : (theme = {});
    theme = merge_1.default(theme, {
        palette: {
            primary: blue_1.default,
            secondary: purple_1.default,
        },
        typography: {
            fontFamily: 'JetBrains Mono, Consolas',
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '@font-face': [
                        {
                            '-webkit-font-feature-settings': '"liga" on, "calt" on',
                            '-webkit-font-smoothing': 'antialiased',
                            textRendering: 'optimizeLegibility',
                            fontFamily: ['JetBrains Mono', "Roboto", "Helvetica", "Arial", 'sans-serif'].join(','),
                        },
                    ],
                },
            },
        },
    });
    theme.palette.type = bool ? 'light' : 'dark';
    return theme;
}
exports.mergeThemeSetting = mergeThemeSetting;
exports.default = mergeThemeSetting;
//# sourceMappingURL=mergeThemeSetting.js.map