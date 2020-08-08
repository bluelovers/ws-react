"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefersLightMode = void 0;
const useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
function prefersLightMode() {
    try {
        return useMediaQuery_1.default('(prefers-color-scheme: light)');
    }
    catch (e) {
    }
}
exports.prefersLightMode = prefersLightMode;
exports.default = prefersLightMode;
//# sourceMappingURL=prefersLightMode.js.map