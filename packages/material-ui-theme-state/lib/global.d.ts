/// <reference types="react" />
import { IThemeExtra } from './index';
declare const globalThemeState: {
    store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<import("@material-ui/core/styles/createMuiTheme").ThemeOptions | import("@material-ui/core").Theme>, autoSpread?: boolean) => import("ts-type").ITSResolvable<void | import("@material-ui/core/styles/createMuiTheme").ThemeOptions | import("@material-ui/core").Theme>>;
    useTheme(): IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>;
    createTheme(options?: import("@material-ui/core/styles/createMuiTheme").ThemeOptions, optsExtra?: {
        setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core/styles/createMuiTheme").ThemeOptions | import("@material-ui/core").Theme>>;
    }, ...args: object[]): IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>;
};
export declare const useTheme: () => IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>, store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<import("@material-ui/core/styles/createMuiTheme").ThemeOptions | import("@material-ui/core").Theme>, autoSpread?: boolean) => import("ts-type").ITSResolvable<void | import("@material-ui/core/styles/createMuiTheme").ThemeOptions | import("@material-ui/core").Theme>>, createTheme: (options?: import("@material-ui/core/styles/createMuiTheme").ThemeOptions, optsExtra?: {
    setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core/styles/createMuiTheme").ThemeOptions | import("@material-ui/core").Theme>>;
}, ...args: object[]) => IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>;
export { IThemeExtra };
export default globalThemeState;
