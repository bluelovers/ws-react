"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const tslib_1 = require("tslib");
const MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
const useNestedMenuContext_1 = tslib_1.__importDefault(require("./useNestedMenuContext"));
const react_1 = tslib_1.__importDefault(require("react"));
function MenuItem(props) {
    const state = useNestedMenuContext_1.default();
    return react_1.default.createElement(MenuItem_1.default, { onClick: state.closeMenu, ...props });
}
exports.MenuItem = MenuItem;
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map