"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by user on 2020/2/27.
 */
const local_1 = __importDefault(require("./src/web/local"));
var core_1 = require("./src/core");
Object.defineProperty(exports, "createStorageHook", { enumerable: true, get: function () { return core_1.createStorageHook; } });
exports.useStorage = local_1.default;
exports.default = useStorage;
//# sourceMappingURL=index.js.map