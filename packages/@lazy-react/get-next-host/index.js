"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextHost = void 0;
const get_next_ctx_1 = require("@lazy-react/get-next-ctx");
const is_req_https2_1 = require("is-req-https2");
const original_url2_1 = require("original-url2");
function getNextHost(_ctx) {
    const ctx = (0, get_next_ctx_1.getNextPageContext)(_ctx);
    if (!(ctx === null || ctx === void 0 ? void 0 : ctx.req)) {
        return null;
    }
    const secure = (0, is_req_https2_1.checkResHttp)(ctx.req);
    let hostname;
    let data = (0, original_url2_1.originalUrl)(ctx.req);
    if (!hostname) {
        if (data.hostname) {
            hostname = data.hostname;
        }
    }
    let url = new URL(data.full ? data.full : data.host);
    if (secure) {
        url.protocol = 'https:';
    }
    url.hostname = hostname ? hostname : data.hostname;
    return {
        secure,
        origin: url.origin,
        hostname: url.hostname,
        host: url.host,
    };
}
exports.getNextHost = getNextHost;
exports.default = getNextHost;
//# sourceMappingURL=index.js.map