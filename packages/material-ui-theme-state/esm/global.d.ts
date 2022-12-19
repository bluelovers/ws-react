/// <reference types="react" />
import { IThemeExtra } from './index';
declare const globalThemeState: {
    store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<Required<import("@material-ui/core").Theme> | Required<import("@material-ui/core").ThemeOptions>>, autoSpread?: boolean) => import("ts-type/lib/generic").ITSResolvable<void | import("@material-ui/core").Theme | import("@material-ui/core").ThemeOptions>>;
    useTheme(): Required<IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>>;
    createTheme(options?: import("@material-ui/core").ThemeOptions, optsExtra?: {
        setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core").Theme | import("@material-ui/core").ThemeOptions>>;
    }, ...args: object[]): IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>;
};
export declare const useTheme: () => Required<IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>>, store: WeakMap<import("@material-ui/core").Theme, (theme: import("react").SetStateAction<Required<import("@material-ui/core").Theme> | Required<import("@material-ui/core").ThemeOptions>>, autoSpread?: boolean) => import("ts-type/lib/generic").ITSResolvable<void | import("@material-ui/core").Theme | import("@material-ui/core").ThemeOptions>>, createTheme: (options?: import("@material-ui/core").ThemeOptions, optsExtra?: {
    setTheme?: import("react").Dispatch<import("react").SetStateAction<import("@material-ui/core").Theme | import("@material-ui/core").ThemeOptions>>;
}, ...args: object[]) => IThemeExtra<import("@material-ui/core").Theme, import("@material-ui/core").ThemeOptions>;
export { IThemeExtra };
export default globalThemeState;
