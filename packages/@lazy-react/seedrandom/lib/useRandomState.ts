import { useRandomContext } from './useRandomContext';
import { useMemo } from 'react';
import seedrandom from 'seedrandom';

export function useRandomState()
{
	const contextValue = useRandomContext();

	return useMemo(() =>
	{
		//console.log(`useRandomState`, contextValue)

		const rnd = seedrandom(contextValue.seed, {
			state: contextValue.initState,
		});

		return rnd
	}, [contextValue])
}

export default useRandomState;
