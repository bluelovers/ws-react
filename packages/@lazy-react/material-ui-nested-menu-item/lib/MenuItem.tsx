import MenuItemOld, { MenuItemProps } from '@material-ui/core/MenuItem';
import useNestedMenuContext from './useNestedMenuContext';
import React from 'react';

export function MenuItem(props: MenuItemProps)
{
	const state = useNestedMenuContext();

	return <MenuItemOld
		onClick={state.closeMenu}
		{...props}
	/>
}

export default MenuItem
