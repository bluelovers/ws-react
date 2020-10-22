"use strict";
/// <reference types="react" />
/// <reference types="next" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStorageHook = void 0;
const tslib_1 = require("tslib");
const core_1 = require("./src/core");
Object.defineProperty(exports, "createStorageHook", { enumerable: true, get: function () { return core_1.createStorageHook; } });
const storage_1 = tslib_1.__importDefault(require("./src/storage"));
// @ts-ignore
const useStorage = exports.useStorage = core_1.createStorageHook(storage_1.default);
exports.default = useStorage;
//# sourceMappingURL=index.js.map