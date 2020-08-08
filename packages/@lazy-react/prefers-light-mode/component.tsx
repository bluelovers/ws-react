import { prefersLightMode } from './prefersLightMode';
import { MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme, IThemeExtra } from 'material-ui-theme-state/lib/global';
import React, { useState, useEffect, ReactNode, PropsWithChildren } from "react";
import { mergeThemeSetting } from './lib/mergeThemeSetting';

export function PrefersLightMode({
	config,
	value,
	defaultValue,
	...props
}: PropsWithChildren<{
	children: ReactNode,
	config?: ThemeOptions | Theme,
	value?: boolean,
	defaultValue?: boolean,
}>)
{
	let bool = value ?? prefersLightMode() ?? defaultValue;
	let theme: ThemeOptions | Theme;
	let setTheme: IThemeExtra["setTheme"];

	([theme, setTheme] = useState(mergeThemeSetting(bool, config)));

	if (typeof window !== "undefined")
	{
		useEffect(() =>
		{
			const lazy = () =>
			{
				setTheme(theme => {

					theme.palette.type = bool ? 'light' : 'dark';

					return theme;
				})
			}

			lazy();
		}, []);
	}

	const muiTheme = createTheme(theme, {
		setTheme,
	}).theme;

	return (<MuiThemeProvider {...props} theme={muiTheme}/>)
}

export default PrefersLightMode
