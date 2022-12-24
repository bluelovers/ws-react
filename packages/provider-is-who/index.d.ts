/// <reference path="lib/env/now/index.d.ts" />
/// <reference types="./types/global" />
/// <reference types="node" />
export type IProviderIsWhoParams = {
    targetProcess?: NodeJS.Process;
    skipProvider?: string[];
};
export declare function providerIsWhoMaybe({ targetProcess, doAll, skipProvider, }: IProviderIsWhoParams & {
    doAll?: boolean;
}): {
    readonly provider: "now";
    readonly github: boolean;
    readonly gitlab: boolean;
    readonly bitbucket: boolean;
} | {
    readonly provider: "now";
    readonly github: boolean;
    readonly gitlab: boolean;
    readonly bitbucket: boolean;
}[];
export declare function providerIsWho(options: IProviderIsWhoParams): {
    readonly provider: "now";
    readonly github: boolean;
    readonly gitlab: boolean;
    readonly bitbucket: boolean;
};
export default providerIsWho;
