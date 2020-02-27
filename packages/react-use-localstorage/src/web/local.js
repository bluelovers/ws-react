"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const proxy_1 = __importDefault(require("../proxy"));
exports.useStorage = core_1.createStorageHook(new proxy_1.default(window.localStorage));
exports.default = useStorage;
//# sourceMappingURL=local.js.map