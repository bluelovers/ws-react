"use strict";
/// <reference types="node" />
/// <reference path="lib/env/now/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerIsWho = exports.providerIsWhoMaybe = void 0;
function providerIsWhoMaybe({ targetProcess = process, doAll, skipProvider, }) {
    if (!(targetProcess === null || targetProcess === void 0 ? void 0 : targetProcess.env)) {
        return null;
    }
    const fnList = [
        () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (((_a = env.NOW_BUILDER) === null || _a === void 0 ? void 0 : _a.length) || ((_b = env.NOW_GITHUB_ORG) === null || _b === void 0 ? void 0 : _b.length) || ((_d = (_c = env.INIT_CWD) === null || _c === void 0 ? void 0 : _c.startsWith) === null || _d === void 0 ? void 0 : _d.call(_c, '/zeit/')) || ((_f = (_e = env.PWD) === null || _e === void 0 ? void 0 : _e.startsWith) === null || _f === void 0 ? void 0 : _f.call(_e, '/zeit/'))) {
                return {
                    provider: 'now',
                    github: ((_g = env.NOW_GITHUB_ORG) === null || _g === void 0 ? void 0 : _g.length) > 0,
                    gitlab: !!(((_h = env.GITLAB_DEPLOYMENT) === null || _h === void 0 ? void 0 : _h.length) && ((_j = env.GITLAB_PROJECT_ID) === null || _j === void 0 ? void 0 : _j.length)),
                    bitbucket: !!(((_k = env.BITBUCKET_DEPLOYMENT) === null || _k === void 0 ? void 0 : _k.length) && ((_l = env.BITBUCKET_REPO_NAME) === null || _l === void 0 ? void 0 : _l.length)),
                };
            }
        },
    ];
    fnList;
    const returnList = [];
    const env = targetProcess.env;
    const stop = () => {
        return (doAll !== true && returnList.length);
    };
    for (const fn of fnList) {
        let entry = fn();
        if (entry !== void 0 && entry !== null && !(skipProvider === null || skipProvider === void 0 ? void 0 : skipProvider.includes(entry.provider))) {
            returnList.push(entry);
        }
        if (stop())
            return returnList[0];
    }
    return doAll !== true ? returnList[0] : returnList;
}
exports.providerIsWhoMaybe = providerIsWhoMaybe;
function providerIsWho(options) {
    const entry = providerIsWhoMaybe({
        ...options,
        doAll: false,
    });
    return entry;
}
exports.providerIsWho = providerIsWho;
exports.default = providerIsWho;
//# sourceMappingURL=index.js.map