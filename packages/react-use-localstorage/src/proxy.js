"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
class AbstractStorageProxy {
    constructor(storage) {
        this.storage = storage;
        util_1.assertStorageLike(this.storage);
    }
    removeItem(key) {
        this.storage.removeItem(key);
    }
    equal(a, b) {
        a = util_1.iifNullItem(a);
        b = util_1.iifNullItem(b);
        return a === b || this.serializerValue(a) === this.serializerValue(b);
    }
    serializerValue(value) {
        return JSON.stringify(value);
    }
}
exports.AbstractStorageProxy = AbstractStorageProxy;
class StorageProxy extends AbstractStorageProxy {
    getItem(key) {
        let value = this.storage.getItem(key);
        return util_1.isNullItem(value) ? null : JSON.parse(value);
    }
    setItem(key, value) {
        if (util_1.isNullItem(value)) {
            this.storage.removeItem(key);
        }
        else {
            this.storage.setItem(key, this.serializerValue(value));
        }
    }
}
exports.StorageProxy = StorageProxy;
//# sourceMappingURL=proxy.js.map