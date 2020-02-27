"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
class AbstractStorageProxy {
    constructor(storage) {
        this.storage = storage;
        this.#handleMap = new WeakMap();
        util_1.assertStorageLike(this.storage);
    }
    #handleMap;
    hashKey(key) {
        return key;
    }
    removeItem(key) {
        this.storage.removeItem(this.hashKey(key));
    }
    equal(a, b) {
        a = util_1.iifNullItem(a);
        b = util_1.iifNullItem(b);
        return a === b || this.serializesValue(a) === this.serializesValue(b);
    }
    serializesValue(value) {
        return JSON.stringify(value);
    }
    deserializesValue(value) {
        if (!util_1.isNullItem(value)) {
            // @ts-ignore
            value = JSON.parse(value);
        }
        return util_1.iifNullItem(value);
    }
    mount(handleStorage) {
        if (typeof window !== "undefined") {
            if (this.#handleMap.has(handleStorage)) {
                return this.#handleMap.get(handleStorage);
            }
            window.addEventListener('storage', handleStorage);
            const unmount = () => {
                window.removeEventListener('storage', handleStorage);
                this.#handleMap.delete(handleStorage);
            };
            this.#handleMap.set(handleStorage, unmount);
            return unmount;
        }
        return () => void 0;
    }
}
exports.AbstractStorageProxy = AbstractStorageProxy;
exports.default = AbstractStorageProxy;
//# sourceMappingURL=abstract.js.map