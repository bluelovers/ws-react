"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactSuspense = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
// @ts-ignore
const ReactSuspense = ({ fallback, content, ...prop }) => {
    fallback !== null && fallback !== void 0 ? fallback : (fallback = react_1.default.createElement(react_1.default.Fragment, null, "Loading"));
    if (typeof window === 'undefined') {
        return content !== null && content !== void 0 ? content : fallback;
    }
    return react_1.default.createElement(react_1.Suspense, { ...prop, fallback: fallback });
};
exports.ReactSuspense = ReactSuspense;
exports.default = exports.ReactSuspense;
//# sourceMappingURL=index.js.map