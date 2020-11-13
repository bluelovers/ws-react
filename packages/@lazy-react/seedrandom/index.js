"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomContext = exports.RandomProvider = exports.useRandomContext = exports.useRandomState = void 0;
const tslib_1 = require("tslib");
const useRandomState_1 = tslib_1.__importDefault(require("./lib/useRandomState"));
exports.useRandomState = useRandomState_1.default;
const useRandomContext_1 = tslib_1.__importDefault(require("./lib/useRandomContext"));
exports.useRandomContext = useRandomContext_1.default;
const RandomProvider_1 = tslib_1.__importDefault(require("./lib/RandomProvider"));
exports.RandomProvider = RandomProvider_1.default;
const RandomContext_1 = tslib_1.__importDefault(require("./lib/RandomContext"));
exports.RandomContext = RandomContext_1.default;
tslib_1.__exportStar(require("./lib/types"), exports);
exports.default = useRandomState_1.default;
//# sourceMappingURL=index.js.map