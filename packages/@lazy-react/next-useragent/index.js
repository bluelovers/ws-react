"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextUserAgent = void 0;
const get_next_ctx_1 = require("@lazy-react/get-next-ctx");
const get_user_agent_1 = require("@lazy-http/get-user-agent");
function getNextUserAgent(ctx) {
    var _a, _b;
    return (0, get_user_agent_1.getUserAgent)({
        headers: (_b = (_a = (0, get_next_ctx_1.getNextPageContext)(ctx)) === null || _a === void 0 ? void 0 : _a.req) === null || _b === void 0 ? void 0 : _b.headers,
    });
}
exports.getNextUserAgent = getNextUserAgent;
exports.default = getNextUserAgent;
//# sourceMappingURL=index.js.map