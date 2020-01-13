# README.md

    a way for change material-ui theme

## install

```
yarn add material-ui-theme-state
```

```typescript jsx
import React, { useState, Dispatch, SetStateAction, useEffect, ReactNode } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Button } from '@material-ui/core';
import { ButtonTypeMap } from '@material-ui/core/Button/Button';
import createMuiThemeState, { IThemeExtra } from 'material-ui-theme-state';

export function prefersLightMode()
{
	try
	{
		return useMediaQuery('(prefers-color-scheme: light)');
	}
	catch (e)
	{

	}
}

const { useTheme, createTheme } = createMuiThemeState();

export function ButtonTheme(props: ButtonTypeMap["props"] & {
	children: string | ReactNode,
})
{
	const { theme, setTheme } = useTheme();

	let click = () =>
	{
		setTheme(theme => {

				theme.palette.type = (theme.palette.type !== 'light') ? 'light' : 'dark';

			return theme;
		}, true)
	};

	return (<Button variant="contained" color="secondary" {...props} onClick={click}/>)
}

export default function (props)
{
	let bool = prefersLightMode();
	let theme: ThemeOptions | Theme;
	let setTheme: IThemeExtra["setTheme"];

	([theme, setTheme] = useState({
		palette: {
			type: bool ? 'light': 'dark',
		},
		//direction: 'rtl'
	}));
	
	const muiTheme = createTheme(theme, {
		setTheme,
	}).theme;

	return (<MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>)
}
```
