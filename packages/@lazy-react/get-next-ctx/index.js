"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextPageContext = void 0;
function getNextPageContext(_ctx) {
    let ctx = _ctx;
    // @ts-ignore
    if (ctx === null || ctx === void 0 ? void 0 : ctx.ctx) {
        // @ts-ignore
        ctx = ctx.ctx;
    }
    return ctx;
}
exports.getNextPageContext = getNextPageContext;
exports.default = getNextPageContext;
//# sourceMappingURL=index.js.map