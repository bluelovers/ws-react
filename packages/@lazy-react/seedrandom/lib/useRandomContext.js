"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRandomContext = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const RandomContext_1 = tslib_1.__importDefault(require("./RandomContext"));
function useRandomContext() {
    return react_1.useContext(RandomContext_1.default);
}
exports.useRandomContext = useRandomContext;
exports.default = useRandomContext;
//# sourceMappingURL=useRandomContext.js.map