import { createContext } from 'react';
import { INestedMenuType } from './types';

export const NestedMenuContext = createContext<INestedMenuType>({
	menuPosition: null,
})

export default NestedMenuContext
