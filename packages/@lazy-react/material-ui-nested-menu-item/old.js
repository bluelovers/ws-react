"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = exports.NestedMenuRoot = exports.NestedMenuItem = exports.useNestedMenuContext = exports.NestedMenuProvider = exports.NestedMenuContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const material_ui_nested_menu_item_1 = tslib_1.__importDefault(require("material-ui-nested-menu-item"));
const Menu_1 = tslib_1.__importDefault(require("@material-ui/core/Menu/Menu"));
const MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
exports.NestedMenuContext = (0, react_1.createContext)({
    menuPosition: null,
});
const NestedMenuProvider = (prop) => {
    var _a;
    const [menuPosition, setMenuPosition] = (0, react_1.useState)((_a = prop.menuPosition) !== null && _a !== void 0 ? _a : null);
    const defaults = (0, react_1.useMemo)(() => {
        const handleItemClick = (event) => {
            //console.log(`handleItemClick`, event, menuPosition)
            setMenuPosition({
                top: event.pageY,
                left: event.pageX
            });
        };
        return {
            menuPosition,
            setMenuPosition,
            handleItemClick,
            openMenu: (event) => {
                //console.log(`openMenu`, menuPosition)
                event.preventDefault();
                if (menuPosition) {
                    return;
                }
                handleItemClick(event);
            },
            closeMenu: () => setMenuPosition(null),
        };
    }, [menuPosition]);
    return react_1.default.createElement(exports.NestedMenuContext.Provider, { value: defaults, children: prop.children });
};
exports.NestedMenuProvider = NestedMenuProvider;
function useNestedMenuContext() {
    return (0, react_1.useContext)(exports.NestedMenuContext);
}
exports.useNestedMenuContext = useNestedMenuContext;
function NestedMenuItem(prop) {
    const state = useNestedMenuContext();
    return react_1.default.createElement(material_ui_nested_menu_item_1.default, { onClick: state.closeMenu, ...prop, parentMenuOpen: !!state.menuPosition });
}
exports.NestedMenuItem = NestedMenuItem;
function NestedMenuRoot(props) {
    const state = useNestedMenuContext();
    return react_1.default.createElement(Menu_1.default, { onClose: state.closeMenu, ...props, open: !!state.menuPosition, anchorReference: "anchorPosition", anchorPosition: state.menuPosition });
}
exports.NestedMenuRoot = NestedMenuRoot;
function MenuItem(props) {
    const state = useNestedMenuContext();
    // @ts-ignore
    return react_1.default.createElement(MenuItem_1.default, { onClick: state.closeMenu, ...props });
}
exports.MenuItem = MenuItem;
exports.default = NestedMenuItem;
//# sourceMappingURL=old.js.map