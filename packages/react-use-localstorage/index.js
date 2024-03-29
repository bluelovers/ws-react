"use strict";
/// <reference types="react" />
/// <reference types="next" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStorageHook = void 0;
const core_1 = require("./src/core");
Object.defineProperty(exports, "createStorageHook", { enumerable: true, get: function () { return core_1.createStorageHook; } });
const storage_1 = require("./src/storage");
// @ts-ignore
const useStorage = exports.useStorage = (0, core_1.createStorageHook)(storage_1.storage);
exports.default = useStorage;
//# sourceMappingURL=index.js.map