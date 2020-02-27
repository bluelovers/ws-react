"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const abstract_1 = __importDefault(require("./abstract"));
class StorageProxy extends abstract_1.default {
    getItem(key) {
        // @ts-ignore
        key = this.hashKey(key);
        let value = this.storage.getItem(key);
        return util_1.isNullItem(value) ? null : JSON.parse(value);
    }
    setItem(key, value) {
        // @ts-ignore
        key = this.hashKey(key);
        if (util_1.isNullItem(value)) {
            this.storage.removeItem(key);
        }
        else {
            this.storage.setItem(key, this.serializesValue(value));
        }
    }
}
exports.StorageProxy = StorageProxy;
exports.default = StorageProxy;
//# sourceMappingURL=index.js.map