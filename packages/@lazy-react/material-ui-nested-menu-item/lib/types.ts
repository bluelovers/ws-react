import React, { ReactNode } from 'react';

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
