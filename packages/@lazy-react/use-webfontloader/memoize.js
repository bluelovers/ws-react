"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebFontLoader = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const index_1 = tslib_1.__importDefault(require("./index"));
exports.useWebFontLoader = lodash_1.memoize(index_1.default);
exports.default = exports.useWebFontLoader;
//# sourceMappingURL=memoize.js.map