"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebFontLoader = void 0;
const lodash_1 = require("lodash");
exports.useWebFontLoader = lodash_1.memoize(function useWebFontLoader(config) {
    if (typeof window !== 'undefined') {
        const WebFontLoader = require('webfontloader');
        if (typeof config === 'function') {
            WebFontLoader.load(config(WebFontLoader));
        }
        else {
            WebFontLoader.load(config);
        }
    }
});
exports.default = exports.useWebFontLoader;
//# sourceMappingURL=index.js.map