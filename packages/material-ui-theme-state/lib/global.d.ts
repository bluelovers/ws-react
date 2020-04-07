/// <reference types="react" />
/// <reference types="next" />
import { IThemeExtra } from './index';
declare const globalThemeState: {
    store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<import("@material-ui/core").ThemeOptions | import("@material-ui/core").Theme>, autoSpread?: boolean) => import("ts-type").ITSResolvable<void | import("@material-ui/core").ThemeOptions | import("@material-ui/core").Theme>>;
    useTheme(): IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>;
    createTheme(options?: import("@material-ui/core").ThemeOptions, optsExtra?: {
        setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core").ThemeOptions | import("@material-ui/core").Theme>>;
    }, ...args: object[]): IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>;
};
export declare const useTheme: () => IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>, store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<import("@material-ui/core").ThemeOptions | import("@material-ui/core").Theme>, autoSpread?: boolean) => import("ts-type").ITSResolvable<void | import("@material-ui/core").ThemeOptions | import("@material-ui/core").Theme>>, createTheme: (options?: import("@material-ui/core").ThemeOptions, optsExtra?: {
    setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core").ThemeOptions | import("@material-ui/core").Theme>>;
}, ...args: object[]) => IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>;
export { IThemeExtra };
export default globalThemeState;
