"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedMenuRoot = void 0;
const tslib_1 = require("tslib");
const Menu_1 = tslib_1.__importDefault(require("@material-ui/core/Menu/Menu"));
const useNestedMenuContext_1 = tslib_1.__importDefault(require("./useNestedMenuContext"));
const react_1 = tslib_1.__importDefault(require("react"));
function NestedMenuRoot(props) {
    const state = useNestedMenuContext_1.default();
    return react_1.default.createElement(Menu_1.default, Object.assign({ onClose: state.closeMenu }, props, { open: !!state.menuPosition, anchorReference: "anchorPosition", anchorPosition: state.menuPosition }));
}
exports.NestedMenuRoot = NestedMenuRoot;
exports.default = NestedMenuRoot;
//# sourceMappingURL=NestedMenuRoot.js.map