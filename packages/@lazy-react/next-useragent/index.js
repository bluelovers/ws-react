"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextUserAgent = void 0;
const get_next_ctx_1 = __importDefault(require("@lazy-react/get-next-ctx"));
const get_user_agent_1 = __importDefault(require("@lazy-http/get-user-agent"));
function getNextUserAgent(ctx) {
    var _a, _b;
    return get_user_agent_1.default({
        headers: (_b = (_a = get_next_ctx_1.default(ctx)) === null || _a === void 0 ? void 0 : _a.req) === null || _b === void 0 ? void 0 : _b.headers,
    });
}
exports.getNextUserAgent = getNextUserAgent;
exports.default = getNextUserAgent;
//# sourceMappingURL=index.js.map