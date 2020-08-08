import { Theme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ReactNode, PropsWithChildren } from "react";
export declare function PrefersLightMode({ config, value, defaultValue, ...props }: PropsWithChildren<{
    children: ReactNode;
    config?: ThemeOptions | Theme;
    value?: boolean;
    defaultValue?: boolean;
}>): JSX.Element;
export default PrefersLightMode;
