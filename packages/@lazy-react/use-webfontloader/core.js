"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebFontLoaderCore = void 0;
function useWebFontLoaderCore(config) {
    if (typeof window !== 'undefined') {
        const WebFontLoader = require('webfontloader');
        if (typeof config === 'function') {
            WebFontLoader.load(config(WebFontLoader));
        }
        else {
            WebFontLoader.load(config);
        }
    }
}
exports.useWebFontLoaderCore = useWebFontLoaderCore;
exports.default = useWebFontLoaderCore;
//# sourceMappingURL=core.js.map