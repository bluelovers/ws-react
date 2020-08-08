"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextMuiLink = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const Link_1 = __importDefault(require("@material-ui/core/Link"));
exports.NextMuiLink = ({ children, href, as, passHref, prefetch, replace, scroll, shallow, ...props }) => {
    passHref = passHref !== null && passHref !== void 0 ? passHref : true;
    return react_1.default.createElement(link_1.default, Object.assign({}, {
        href,
        as,
        passHref,
        prefetch,
        replace,
        scroll,
        shallow,
    }),
        react_1.default.createElement(Link_1.default, Object.assign({}, props), children));
};
exports.default = exports.NextMuiLink;
//# sourceMappingURL=index.js.map