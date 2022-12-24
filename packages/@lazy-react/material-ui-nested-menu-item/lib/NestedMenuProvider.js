"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedMenuProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const NestedMenuContext_1 = tslib_1.__importDefault(require("./NestedMenuContext"));
const NestedMenuProvider = (prop) => {
    var _a;
    const [menuPosition, setMenuPosition] = (0, react_1.useState)((_a = prop.menuPosition) !== null && _a !== void 0 ? _a : null);
    const defaults = (0, react_1.useMemo)(() => {
        const handleItemClick = (event) => {
            //console.log(`handleItemClick`, event, menuPosition)
            setMenuPosition({
                top: event.pageY,
                left: event.pageX,
            });
        };
        return {
            menuPosition,
            setMenuPosition,
            handleItemClick,
            openMenu: (event) => {
                console.log(`openMenu`, menuPosition);
                event.preventDefault();
                if (menuPosition) {
                    return;
                }
                handleItemClick(event);
            },
            closeMenu: () => setMenuPosition(null),
        };
    }, [menuPosition]);
    return react_1.default.createElement(NestedMenuContext_1.default.Provider, { value: defaults, children: prop.children });
};
exports.NestedMenuProvider = NestedMenuProvider;
exports.default = exports.NestedMenuProvider;
//# sourceMappingURL=NestedMenuProvider.js.map