import { createContext } from 'react';
import { IRandomContextTypes } from './types';

export const RandomContext = createContext<IRandomContextTypes>({
	initState: true,
})

export default RandomContext
