"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const proxy_1 = require("../proxy");
exports.useStorage = (0, core_1.createStorageHook)(new proxy_1.StorageProxy(window.sessionStorage));
exports.default = useStorage;
//# sourceMappingURL=session.js.map