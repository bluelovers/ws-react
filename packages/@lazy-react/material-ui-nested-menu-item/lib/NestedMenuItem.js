"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedMenuItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const material_ui_nested_menu_item_1 = tslib_1.__importDefault(require("material-ui-nested-menu-item"));
const useNestedMenuContext_1 = tslib_1.__importDefault(require("./useNestedMenuContext"));
function NestedMenuItem(prop) {
    const state = (0, useNestedMenuContext_1.default)();
    return react_1.default.createElement(material_ui_nested_menu_item_1.default, { onClick: state.closeMenu, ...prop, parentMenuOpen: !!state.menuPosition });
}
exports.NestedMenuItem = NestedMenuItem;
exports.default = NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map