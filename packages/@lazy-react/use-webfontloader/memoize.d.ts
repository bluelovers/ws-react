/// <reference types="webfontloader" />
/// <reference types="lodash" />
export declare const useWebFontLoader: ((config: import("webfontloader").Config | ((wf: typeof import("webfontloader")) => import("webfontloader").Config)) => void) & import("lodash").MemoizedFunction;
export default useWebFontLoader;
