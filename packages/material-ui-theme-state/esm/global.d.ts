/// <reference types="react" />
import { IThemeExtra } from './index';
declare const globalThemeState: {
    store: WeakMap<any, (theme: import("react").SetStateAction<Required<any> | Required<unknown>>, autoSpread?: boolean) => any>;
    useTheme(): Required<IThemeExtra<any, unknown>>;
    createTheme(options?: unknown, optsExtra?: {
        setTheme?: import("react").Dispatch<any>;
    }, ...args: object[]): IThemeExtra<any, unknown>;
};
export declare const useTheme: () => Required<IThemeExtra<any, unknown>>, store: WeakMap<any, (theme: import("react").SetStateAction<Required<any> | Required<unknown>>, autoSpread?: boolean) => any>, createTheme: (options?: unknown, optsExtra?: {
    setTheme?: import("react").Dispatch<any>;
}, ...args: object[]) => IThemeExtra<any, unknown>;
export { IThemeExtra };
export default globalThemeState;
