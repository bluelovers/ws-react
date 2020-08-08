import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Theme } from '@material-ui/core/styles';
export declare function mergeThemeSetting<T extends ThemeOptions | Theme>(bool?: boolean, theme?: T): T;
export default mergeThemeSetting;
