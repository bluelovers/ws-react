/// <reference types="lodash" />
import { Config } from 'webfontloader';
import WebFontLoader from 'webfontloader';
export declare const useWebFontLoader: ((config: Config | ((wf: typeof WebFontLoader) => Config)) => void) & import("lodash").MemoizedFunction;
export default useWebFontLoader;
