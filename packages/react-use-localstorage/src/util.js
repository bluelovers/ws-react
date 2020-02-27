"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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