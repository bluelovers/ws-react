import { IRandomContextTypes, IRandomProviderProps } from './types';
import React, { useMemo, useState } from 'react';
import seedrandom, { State } from 'seedrandom';
import { nanoid } from 'nanoid';
import RandomContext from './RandomContext';

export const RandomProvider = ({
	children,

	initState,
	key,
	seed,
}: IRandomProviderProps) =>
{

	const [randomState, setRandomState] = useState<State>(initState || true);

	const defaults = useMemo<IRandomContextTypes>(
		() =>
		{
			seed ||= nanoid();
			key ||= nanoid();

			let initState: State = randomState;

			if (initState === true)
			{
				initState = seedrandom(seed, {
					state: initState,
				}).state()
			}
			else
			{
				initState = seedrandom(seed, {
					state: initState,
				}).state()
			}

			setRandomState(initState);

			/*
			console.log(`RandomProvider`, {
				initState,
				key,
				seed,
				setRandomState,
			})
			 */

			return {
				initState,
				key,
				seed,
				setRandomState,
			}
		},
		[],
	)

	return <RandomContext.Provider
		value={defaults}
		children={children}
	/>
}

export default RandomProvider
