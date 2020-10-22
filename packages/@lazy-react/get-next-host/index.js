"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextHost = void 0;
const tslib_1 = require("tslib");
const get_next_ctx_1 = tslib_1.__importDefault(require("@lazy-react/get-next-ctx"));
const is_req_https2_1 = tslib_1.__importDefault(require("is-req-https2"));
const original_url2_1 = tslib_1.__importDefault(require("original-url2"));
function getNextHost(_ctx) {
    const ctx = get_next_ctx_1.default(_ctx);
    if (!ctx.req) {
        return null;
    }
    const secure = is_req_https2_1.default(ctx.req);
    let hostname;
    let data = original_url2_1.default(ctx.req);
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