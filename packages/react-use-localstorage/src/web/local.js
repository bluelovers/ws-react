"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("../core");
const proxy_1 = tslib_1.__importDefault(require("../proxy"));
exports.useStorage = core_1.createStorageHook(new proxy_1.default(window.localStorage));
exports.default = useStorage;
//# sourceMappingURL=local.js.map