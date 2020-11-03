"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebFontLoader = void 0;
const react_1 = require("react");
const core_1 = require("./core");
function useWebFontLoader() {
    return react_1.useCallback(core_1.useWebFontLoaderCore, []);
}
exports.useWebFontLoader = useWebFontLoader;
exports.default = useWebFontLoader;
//# sourceMappingURL=react.js.map