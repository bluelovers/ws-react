"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebFontLoader = void 0;
function useWebFontLoader(config) {
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
exports.useWebFontLoader = useWebFontLoader;
exports.default = useWebFontLoader;
//# sourceMappingURL=index.js.map