import React, { createContext, useContext, useMemo, useState } from 'react';
import { ReactNode } from 'react';
import NestedMenuItemOld, { NestedMenuItemProps } from "material-ui-nested-menu-item";
import Menu, { MenuProps } from '@material-ui/core/Menu/Menu';
import MenuItemOld, { MenuItemProps } from '@material-ui/core/MenuItem';

export interface INestedMenuType
{
	menuPosition?: {
		top: number;
		left: number;
	},

	setMenuPosition?: (menuPosition: INestedMenuType["menuPosition"]) => void,

	handleItemClick?: (event: React.MouseEvent) => void,
	closeMenu?: (event?: React.MouseEvent) => void,
	openMenu?: (event: React.MouseEvent) => void,
}

export interface INestedMenuProviderProps extends INestedMenuType
{
	children: ReactNode,
}

export const NestedMenuContext = createContext<INestedMenuType>({
	menuPosition: null,
})

export const NestedMenuProvider = (prop: INestedMenuProviderProps) =>
{

	const [menuPosition, setMenuPosition] = useState<INestedMenuType["menuPosition"]>(prop.menuPosition ?? null);

	const defaults = useMemo<INestedMenuType>(
		() =>
		{
			const handleItemClick = (event: React.MouseEvent) => {

				//console.log(`handleItemClick`, event, menuPosition)

				setMenuPosition({
					top: event.pageY,
					left: event.pageX
				})
			};

			return {
				menuPosition,
				setMenuPosition,
				handleItemClick,
				openMenu: (event: React.MouseEvent) => {

					//console.log(`openMenu`, menuPosition)

					event.preventDefault();

					if (menuPosition) {
						return;
					}

					handleItemClick(event);
				},
				closeMenu: () => setMenuPosition(null),
			}
		},
		[menuPosition],
	)

	return <NestedMenuContext.Provider
		value={defaults}
		children={prop.children}
	/>
}

export function useNestedMenuContext()
{
	return useContext(NestedMenuContext);
}

export function NestedMenuItem(prop: Omit<NestedMenuItemProps, "parentMenuOpen" | "onClick">)
{
	const state = useNestedMenuContext();

	return <NestedMenuItemOld
		onClick={state.closeMenu}
		{...prop}
		parentMenuOpen={!!state.menuPosition}
	/>
}

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

export function MenuItem(props: MenuItemProps)
{
	const state = useNestedMenuContext();

	// @ts-ignore
	return <MenuItemOld
		onClick={state.closeMenu}
		{...props}
	/>
}

export default NestedMenuItem
