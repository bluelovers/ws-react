/**
 * Created by user on 2020/1/13.
 */

import _createMuiTheme, { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import { ITSResolvable } from 'ts-type';
import _useTheme from '@material-ui/core/styles/useTheme';
import { Dispatch, SetStateAction } from 'react';

export interface IThemeExtra<T extends Theme = Theme, O extends ThemeOptions = ThemeOptions>
{
	theme: T;
	setTheme?(theme: SetStateAction<T | O>, autoSpread?: boolean): ITSResolvable<void | T | O>;
}

export function create<T extends Theme = ReturnType<typeof _createMuiTheme>, O extends ThemeOptions = Parameters<typeof _createMuiTheme>[0]>(options: {
	store?: WeakMap<T, IThemeExtra<T, O>["setTheme"]>;
} = {}): {
	store: WeakMap<T, IThemeExtra<T, O>["setTheme"]>;
	useTheme(): Required<IThemeExtra<T, O>>;
	createTheme(options?: O, optsExtra?: {
		setTheme?: Dispatch<SetStateAction<T | O>>;
	}, ...args: object[]): IThemeExtra<T, O>;
}
{
	let { store } = options;

	store = store || new WeakMap<T, IThemeExtra<T, O>["setTheme"]>();

	const useTheme = function useTheme(): Required<IThemeExtra<T, O>>
	{
		const theme = _useTheme<T>();

		let setTheme = store.get(theme);

		return {
			theme,
			setTheme,
		}
	};

	const createTheme = function createTheme(options?: O, optsExtra?: {
		setTheme?: Dispatch<SetStateAction<T | O>>
	}, ...args: object[]): IThemeExtra<T, O>
	{
		const theme = _createMuiTheme(options, optsExtra, ...args) as T;

		if (optsExtra && optsExtra.setTheme)
		{
			let { setTheme: _setTheme } = optsExtra;

			const setTheme: IThemeExtra<T, O>["setTheme"] = async function (value, autoSpread?: boolean)
			{
				if (autoSpread && typeof value === 'function')
				{
					return _setTheme(old => {

						let n = value(old);

						if (n && typeof n === 'object')
						{
							return {
								...n
							}
						}

						return n;
					})
				}

				return _setTheme(value)
			};

			store.set(theme, setTheme);

			return {
				theme,
				setTheme
			};
		}

		return {
			theme,
		}
	};

	return {
		store,
		useTheme,
		createTheme,
	}
}

export default create
