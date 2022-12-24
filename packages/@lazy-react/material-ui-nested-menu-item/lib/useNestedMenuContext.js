"use strict";
/**
 * Created by user on 2020/11/14.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNestedMenuContext = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const NestedMenuContext_1 = tslib_1.__importDefault(require("./NestedMenuContext"));
function useNestedMenuContext() {
    return (0, react_1.useContext)(NestedMenuContext_1.default);
}
exports.useNestedMenuContext = useNestedMenuContext;
exports.default = useNestedMenuContext;
//# sourceMappingURL=useNestedMenuContext.js.map