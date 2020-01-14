/// <reference types="react" />
declare const globalThemeState: {
    store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<import("@material-ui/core").Theme | import("@material-ui/core/styles/createMuiTheme").ThemeOptions>, autoSpread?: boolean) => import("ts-type").ITSResolvable<void | import("@material-ui/core").Theme | import("@material-ui/core/styles/createMuiTheme").ThemeOptions>>;
    useTheme(): import(".").IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>;
    createTheme(options?: import("@material-ui/core/styles/createMuiTheme").ThemeOptions, optsExtra?: {
        setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core").Theme | import("@material-ui/core/styles/createMuiTheme").ThemeOptions>>;
    }, ...args: object[]): import(".").IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>;
};
export declare const useTheme: () => import(".").IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>, store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<import("@material-ui/core").Theme | import("@material-ui/core/styles/createMuiTheme").ThemeOptions>, autoSpread?: boolean) => import("ts-type").ITSResolvable<void | import("@material-ui/core").Theme | import("@material-ui/core/styles/createMuiTheme").ThemeOptions>>, createTheme: (options?: import("@material-ui/core/styles/createMuiTheme").ThemeOptions, optsExtra?: {
    setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core").Theme | import("@material-ui/core/styles/createMuiTheme").ThemeOptions>>;
}, ...args: object[]) => import(".").IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core/styles/createMuiTheme").ThemeOptions>;
export default globalThemeState;
