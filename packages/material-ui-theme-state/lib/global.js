"use strict";
/// <reference types="react" />
/// <reference types="next" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = exports.store = exports.useTheme = void 0;
const tslib_1 = require("tslib");
const index_1 = tslib_1.__importDefault(require("./index"));
const globalThemeState = index_1.default();
exports.useTheme = globalThemeState.useTheme, exports.store = globalThemeState.store, exports.createTheme = globalThemeState.createTheme;
exports.default = globalThemeState;
//# sourceMappingURL=global.js.map