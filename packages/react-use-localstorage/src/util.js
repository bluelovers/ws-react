"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateInitialValue = exports.isSetStateAction = exports.isStateInitialValue = exports.notStorageLike = exports.assertStorageLike = exports.iifNullItem = exports.isNullItem = void 0;
const assert_1 = require("assert");
function isNullItem(value) {
    return typeof value === 'undefined' || value === null;
}
exports.isNullItem = isNullItem;
function iifNullItem(value, ...argv) {
    let fallbackValue = null;
    if (argv.length) {
        fallbackValue = argv[0];
    }
    return isNullItem(value) ? fallbackValue : value;
}
exports.iifNullItem = iifNullItem;
function assertStorageLike(storage) {
    if (notStorageLike(storage)) {
        throw new assert_1.AssertionError({
            message: `${storage} not a localStorage like object`
        });
    }
}
exports.assertStorageLike = assertStorageLike;
function notStorageLike(localStorage) {
    return (isNullItem(localStorage) || typeof localStorage.setItem !== 'function' || typeof localStorage.getItem !== 'function' || typeof localStorage.removeItem !== 'function');
}
exports.notStorageLike = notStorageLike;
function isStateInitialValue(initialValue) {
    return typeof initialValue === 'function';
}
exports.isStateInitialValue = isStateInitialValue;
function isSetStateAction(initialValue) {
    return typeof initialValue === 'function';
}
exports.isSetStateAction = isSetStateAction;
function getStateInitialValue(initialValue) {
    return isStateInitialValue(initialValue) ? initialValue() : initialValue;
}
exports.getStateInitialValue = getStateInitialValue;
//# sourceMappingURL=util.js.map