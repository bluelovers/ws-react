"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactSuspense = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
// @ts-ignore
const ReactSuspense = ({ fallback, ...prop }) => {
    if (typeof window === 'undefined') {
        return fallback;
    }
    return react_1.default.createElement(react_1.Suspense, Object.assign({}, prop, { fallback: fallback }));
};
exports.ReactSuspense = ReactSuspense;
exports.default = exports.ReactSuspense;
//# sourceMappingURL=index.js.map