import { useContext } from 'react';
import RandomContext from './RandomContext';

export function useRandomContext()
{
	return useContext(RandomContext);
}

export default useRandomContext
