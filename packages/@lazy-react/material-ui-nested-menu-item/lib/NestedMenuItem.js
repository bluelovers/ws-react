"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedMenuItem = void 0;
const tslib_1 = require("tslib");
const material_ui_nested_menu_item_1 = tslib_1.__importDefault(require("material-ui-nested-menu-item"));
const useNestedMenuContext_1 = tslib_1.__importDefault(require("./useNestedMenuContext"));
const react_1 = tslib_1.__importDefault(require("react"));
function NestedMenuItem(prop) {
    const state = useNestedMenuContext_1.default();
    return react_1.default.createElement(material_ui_nested_menu_item_1.default, Object.assign({ onClick: state.closeMenu }, prop, { parentMenuOpen: !!state.menuPosition }));
}
exports.NestedMenuItem = NestedMenuItem;
exports.default = NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map