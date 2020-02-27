"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./src/core");
Object.defineProperty(exports, "createStorageHook", { enumerable: true, get: function () { return core_1.createStorageHook; } });
const storage_1 = __importDefault(require("./src/storage"));
// @ts-ignore
const useStorage = exports.useStorage = core_1.createStorageHook(storage_1.default);
exports.default = useStorage;
//# sourceMappingURL=index.js.map