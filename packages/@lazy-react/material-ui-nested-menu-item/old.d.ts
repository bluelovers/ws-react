import React from 'react';
import { ReactNode } from 'react';
import { NestedMenuItemProps } from "material-ui-nested-menu-item";
import { MenuProps } from '@material-ui/core/Menu/Menu';
import { MenuItemProps } from '@material-ui/core/MenuItem';
export interface INestedMenuType {
    menuPosition?: {
        top: number;
        left: number;
    };
    setMenuPosition?: (menuPosition: INestedMenuType["menuPosition"]) => void;
    handleItemClick?: (event: React.MouseEvent) => void;
    closeMenu?: (event?: React.MouseEvent) => void;
    openMenu?: (event: React.MouseEvent) => void;
}
export interface INestedMenuProviderProps extends INestedMenuType {
    children: ReactNode;
}
export declare const NestedMenuContext: React.Context<INestedMenuType>;
export declare const NestedMenuProvider: (prop: INestedMenuProviderProps) => JSX.Element;
export declare function useNestedMenuContext(): INestedMenuType;
export declare function NestedMenuItem(prop: Omit<NestedMenuItemProps, "parentMenuOpen" | "onClick">): JSX.Element;
export declare function NestedMenuRoot(props: Omit<MenuProps, "open">): JSX.Element;
export declare function MenuItem(props: MenuItemProps): JSX.Element;
export default NestedMenuItem;
