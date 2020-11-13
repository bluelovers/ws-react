import NestedMenuItemOld, { NestedMenuItemProps } from 'material-ui-nested-menu-item';
import useNestedMenuContext from './useNestedMenuContext';
import React from 'react';

export function NestedMenuItem(prop: Omit<NestedMenuItemProps, "parentMenuOpen" | "onClick">)
{
	const state = useNestedMenuContext();

	return <NestedMenuItemOld
		onClick={state.closeMenu}
		{...prop}
		parentMenuOpen={!!state.menuPosition}
	/>
}

export default NestedMenuItem;
