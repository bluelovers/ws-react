import Menu, { MenuProps } from '@material-ui/core/Menu/Menu';
import useNestedMenuContext from './useNestedMenuContext';
import React from 'react';

export function NestedMenuRoot(props: Omit<MenuProps, "open">)
{
	const state = useNestedMenuContext();

	return <Menu
		onClose={state.closeMenu}
		{...props}
		open={!!state.menuPosition}
		anchorReference="anchorPosition"
		anchorPosition={state.menuPosition}
	/>
}

export default NestedMenuRoot
