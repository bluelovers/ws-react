"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const globalThemeState = index_1.default();
exports.useTheme = globalThemeState.useTheme, exports.store = globalThemeState.store, exports.createTheme = globalThemeState.createTheme;
exports.default = globalThemeState;
//# sourceMappingURL=global.js.map