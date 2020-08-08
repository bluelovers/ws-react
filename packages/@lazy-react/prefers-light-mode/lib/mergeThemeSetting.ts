import merge from 'lodash/merge';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

export function mergeThemeSetting<T extends ThemeOptions | Theme>(bool?: boolean, theme: T = {} as any)
{
	theme ??= {} as T;

	theme = merge(theme, {
		palette: {
			primary: blue,
			secondary: purple,
		},
		typography: {
			fontFamily: 'JetBrains Mono, Consolas',
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'@font-face': [
						{
							'-webkit-font-feature-settings': '"liga" on, "calt" on',
							'-webkit-font-smoothing': 'antialiased',
							textRendering: 'optimizeLegibility',
							fontFamily: ['JetBrains Mono', "Roboto", "Helvetica", "Arial", 'sans-serif'].join(','),
						},
					],
				},
			},
		},
	})

	theme.palette.type = bool ? 'light' : 'dark'

	return theme
}

export default mergeThemeSetting
