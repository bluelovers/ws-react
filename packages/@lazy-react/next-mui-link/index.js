"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextMuiLink = exports.NextMuiLinkWithoutRef = void 0;
const react_1 = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const Link_1 = __importDefault(require("@material-ui/core/Link"));
exports.NextMuiLinkWithoutRef = ({ href, as, passHref, prefetch, replace, scroll, shallow, ...props }) => {
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
        react_1.default.createElement(Link_1.default, Object.assign({}, props)));
};
// @ts-ignore
exports.NextMuiLink = react_1.forwardRef((props, ref) => react_1.default.createElement(exports.NextMuiLinkWithoutRef, Object.assign({}, props, { ref: ref })));
exports.default = exports.NextMuiLink;
//# sourceMappingURL=index.js.map