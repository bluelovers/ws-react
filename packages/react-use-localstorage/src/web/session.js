"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v3_1 = __importDefault(require("../core/v3"));
exports.useStorage = v3_1.default(window.sessionStorage);
exports.default = useStorage;
//# sourceMappingURL=session.js.map