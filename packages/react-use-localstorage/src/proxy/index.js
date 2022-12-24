"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageProxy = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const abstract_1 = tslib_1.__importDefault(require("./abstract"));
class StorageProxy extends abstract_1.default {
    getItem(key) {
        // @ts-ignore
        key = this.hashKey(key);
        let value = this.storage.getItem(key);
        return (0, util_1.isNullItem)(value) ? null : JSON.parse(value);
    }
    setItem(key, value) {
        // @ts-ignore
        key = this.hashKey(key);
        if ((0, util_1.isNullItem)(value)) {
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