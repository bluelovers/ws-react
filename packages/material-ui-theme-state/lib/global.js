"use strict";
/// <reference types="react" />
/// <reference types="next" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = exports.store = exports.useTheme = void 0;
const index_1 = require("./index");
const globalThemeState = (0, index_1.create)();
exports.useTheme = globalThemeState.useTheme, exports.store = globalThemeState.store, exports.createTheme = globalThemeState.createTheme;
exports.default = globalThemeState;
//# sourceMappingURL=global.js.map