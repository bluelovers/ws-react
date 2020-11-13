import { Dispatch, ReactNode, SetStateAction } from 'react';
import seedrandom, { State, seedRandomOptions } from 'seedrandom';

export interface IRandomContextTypes
{
	initState?: State,
	seed?: string,
	key?: string,
	setRandomState?: Dispatch<SetStateAction<State>>,
}

export interface IRandomProviderProps extends IRandomContextTypes
{
	children: ReactNode,
}
