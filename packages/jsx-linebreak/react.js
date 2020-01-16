"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("./index"));
const react_1 = require("react");
exports.LinkBreak = index_1.default(react_1.createElement, react_1.Fragment);
exports.BR = index_1.createBR(react_1.createElement, react_1.Fragment);
exports.default = exports.LinkBreak;
//# sourceMappingURL=react.js.map