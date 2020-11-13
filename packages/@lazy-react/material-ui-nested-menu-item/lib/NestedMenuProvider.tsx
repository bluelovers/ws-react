import { INestedMenuProviderProps, INestedMenuType } from './types';
import React, { useMemo, useState } from 'react';
import NestedMenuContext from './NestedMenuContext';

export const NestedMenuProvider = (prop: INestedMenuProviderProps) =>
{

	const [menuPosition, setMenuPosition] = useState<INestedMenuType["menuPosition"]>(prop.menuPosition ?? null);

	const defaults = useMemo<INestedMenuType>(
		() =>
		{
			const handleItemClick = (event: React.MouseEvent) =>
			{

				//console.log(`handleItemClick`, event, menuPosition)

				setMenuPosition({
					top: event.pageY,
					left: event.pageX,
				})
			};

			return {
				menuPosition,
				setMenuPosition,
				handleItemClick,
				openMenu: (event: React.MouseEvent) =>
				{

					console.log(`openMenu`, menuPosition)

					event.preventDefault();

					if (menuPosition)
					{
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

export default NestedMenuProvider;
