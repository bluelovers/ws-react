"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextMuiLink = exports.NextMuiLinkWithoutRef = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const Link_1 = tslib_1.__importDefault(require("@mui/material/Link"));
const NextMuiLinkWithoutRef = ({ href, as, passHref, prefetch, replace, scroll, shallow, ...props }) => {
    passHref = passHref !== null && passHref !== void 0 ? passHref : true;
    return react_1.default.createElement(link_1.default, { ...{
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
        } },
        react_1.default.createElement(Link_1.default, { ...props }));
};
exports.NextMuiLinkWithoutRef = NextMuiLinkWithoutRef;
// @ts-ignore
exports.NextMuiLink = (0, react_1.forwardRef)((props, ref) => react_1.default.createElement(exports.NextMuiLinkWithoutRef, { ...props, ref: ref }));
exports.default = exports.NextMuiLink;
//# sourceMappingURL=index.js.map