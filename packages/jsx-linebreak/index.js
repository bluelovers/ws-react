"use strict";
/**
 * Created by user on 2020/1/16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const crlf_normalize_1 = require("crlf-normalize");
function createLinkBreak(createElement, Fragment) {
    return ({ children, noBR, onlyBR, ...props }) => {
        if (typeof children !== 'string') {
            throw new TypeError(`current only support string`);
        }
        if (noBR) {
            children = crlf_normalize_1.crlf(children);
        }
        else {
            let i = 0;
            let lines = children.split(crlf_normalize_1.R_CRLF);
            let end = lines.pop();
            children = lines.reduce((a, v) => {
                a.push(createElement(Fragment, {
                    key: i++
                }, v));
                a.push(createElement('br', {
                    key: i++
                }));
                !onlyBR && a.push(createElement(Fragment, {
                    key: i++
                }, crlf_normalize_1.LF));
                return a;
            }, []).concat([createElement(Fragment, null, end)]);
        }
        return createElement(Fragment, props, children);
    };
}
exports.createLinkBreak = createLinkBreak;
function createBR(createElement, Fragment) {
    return ({ key, ref, ...props }) => createElement(Fragment, {
        key,
        ref,
    }, [
        createElement('br', props, null),
        createElement(Fragment, null, crlf_normalize_1.LF),
    ]);
}
exports.createBR = createBR;
exports.default = createLinkBreak;
//# sourceMappingURL=index.js.map