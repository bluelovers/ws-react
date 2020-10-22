"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BR = exports.LinkBreak = void 0;
const tslib_1 = require("tslib");
const index_1 = tslib_1.__importStar(require("./index"));
const preact_1 = require("preact");
exports.LinkBreak = index_1.default(preact_1.createElement, preact_1.Fragment);
exports.BR = index_1.createBR(preact_1.createElement, preact_1.Fragment);
exports.default = exports.LinkBreak;
//# sourceMappingURL=preact.js.map