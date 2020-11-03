"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebFontLoader = void 0;
const lodash_1 = require("lodash");
const core_1 = require("./core");
const fn = lodash_1.memoize(core_1.useWebFontLoaderCore);
function useWebFontLoader() {
    return fn;
}
exports.useWebFontLoader = useWebFontLoader;
exports.default = useWebFontLoader;
//# sourceMappingURL=memoize.js.map