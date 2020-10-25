"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeThemeSetting = void 0;
const tslib_1 = require("tslib");
const merge_1 = tslib_1.__importDefault(require("lodash/merge"));
function mergeThemeSetting(bool, theme = {}) {
    theme !== null && theme !== void 0 ? theme : (theme = {});
    theme = merge_1.default(theme, {
        palette: {
        /*
        primary: blue,
        secondary: purple,
         */
        },
    });
    theme.palette.type = bool ? 'light' : 'dark';
    return theme;
}
exports.mergeThemeSetting = mergeThemeSetting;
exports.default = mergeThemeSetting;
//# sourceMappingURL=mergeThemeSetting.js.map