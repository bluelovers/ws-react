import { Config } from 'webfontloader';
import WebFontLoader from 'webfontloader';
export declare function useWebFontLoader(config: Config | ((wf: typeof WebFontLoader) => Config)): void;
export default useWebFontLoader;