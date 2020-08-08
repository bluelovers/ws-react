import { ButtonTypeMap } from '@material-ui/core/Button/Button';
import React, { ReactNode } from 'react';
import { useTheme, createTheme, IThemeExtra } from 'material-ui-theme-state/lib/global';
import Button from '@material-ui/core/Button';

export function ButtonTheme(props: ButtonTypeMap["props"] & {
	children: ReactNode,
})
{
	const { setTheme } = useTheme();

	let click = () =>
	{
		setTheme(theme => {

			theme.palette.type = (theme.palette.type !== 'light') ? 'light' : 'dark';

			return theme;
		}, true)

	};

	return (<Button variant="contained" color="secondary" {...props} onClick={click}/>)
}

export default ButtonTheme
