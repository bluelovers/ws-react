/**
 * Created by user on 2020/1/13.
 */
import _createMuiTheme, { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import { ITSResolvable } from 'ts-type';
import { Dispatch, SetStateAction } from 'react';
export interface IThemeExtra<T extends Theme = Theme, O extends ThemeOptions = ThemeOptions> {
    theme: T;
    setTheme?(theme: SetStateAction<T | O>, autoSpread?: boolean): ITSResolvable<void | T | O>;
}
export declare function create<T extends Theme = ReturnType<typeof _createMuiTheme>, O extends ThemeOptions = Parameters<typeof _createMuiTheme>[0]>(options: {
    store: WeakMap<T, IThemeExtra<T, O>["setTheme"]>;
}): {
    store: WeakMap<T, IThemeExtra<T, O>["setTheme"]>;
    useTheme(): IThemeExtra<T, O>;
    createTheme(options?: O, optsExtra?: {
        setTheme?: Dispatch<SetStateAction<T | O>>;
    }, ...args: object[]): IThemeExtra<T, O>;
};
export default create;
