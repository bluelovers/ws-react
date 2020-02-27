"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proxy_1 = require("./proxy");
const local_storage_fallback_1 = __importDefault(require("local-storage-fallback"));
exports.storage = new proxy_1.StorageProxy(local_storage_fallback_1.default);
exports.default = exports.storage;
//# sourceMappingURL=storage.js.map