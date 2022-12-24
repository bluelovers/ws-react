"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoilPersist = void 0;
const tslib_1 = require("tslib");
const recoil_persist2_1 = tslib_1.__importDefault(require("recoil-persist2"));
function recoilPersist(...argv) {
    if (typeof window !== 'undefined') {
        return (0, recoil_persist2_1.default)(...argv);
    }
    return {
        RecoilPersist() {
            return null;
        },
        updateState() {
        },
    };
}
exports.recoilPersist = recoilPersist;
exports.default = recoilPersist;
//# sourceMappingURL=index.js.map