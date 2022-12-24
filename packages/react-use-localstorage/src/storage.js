"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const proxy_1 = require("./proxy");
const local_storage_fallback_1 = require("local-storage-fallback");
exports.storage = new proxy_1.StorageProxy(local_storage_fallback_1.storage);
exports.default = exports.storage;
//# sourceMappingURL=storage.js.map