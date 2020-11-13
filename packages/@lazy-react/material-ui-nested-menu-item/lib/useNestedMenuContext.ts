/**
 * Created by user on 2020/11/14.
 */

import { useContext } from 'react';
import NestedMenuContext from './NestedMenuContext';

export function useNestedMenuContext()
{
	return useContext(NestedMenuContext);
}

export default useNestedMenuContext;
