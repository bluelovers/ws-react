"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const tslib_1 = require("tslib");
const proxy_1 = require("./proxy");
const local_storage_fallback_1 = tslib_1.__importDefault(require("local-storage-fallback"));
exports.storage = new proxy_1.StorageProxy(local_storage_fallback_1.default);
exports.default = exports.storage;
//# sourceMappingURL=storage.js.map