import { Dispatch, useCallback, useEffect, useState, SetStateAction } from 'react';
import type { IStorageLike, IDispatchSetStateAction, IStateInitialValue, IUnpackStateInitialValue } from './types';
import { notStorageLike, isNullItem, getStateInitialValue, isSetStateAction, iifNullItem } from './util';

export function createStorageHook<S extends string = string>(localStorage: IStorageLike)
{
	if (notStorageLike(localStorage))
	{
		throw new TypeError(`${localStorage} not a localStorage like object`)
	}

	return function useStorage(
		key: string,
		initialValue?: IStateInitialValue<S>,
	): [S, IDispatchSetStateAction<S>]
	{

		const [value, setValue] = useState<S>(
			() =>
			{
				let value = localStorage.getItem(key);
				if (isNullItem(value))
				{
					value = getStateInitialValue(initialValue);

					if (isNullItem(value))
					{
						value = iifNullItem(value)
					}
				}
				return value as any as S
			},
		);

		const setItem = (newValue: SetStateAction<S>) =>
		{
			setValue((prevState => {
				let value = isSetStateAction(newValue) ? newValue(prevState) : newValue;

				//value = iifNullItem(value);

				if (isNullItem(value))
				{
					localStorage.removeItem(key)
				}
				else
				{
					localStorage.setItem(key, value);
				}

				return value
			}));
		};

		useEffect(() =>
		{
			let oldValue = localStorage.getItem(key);
			if (value !== oldValue)
			{
				if (!isNullItem(oldValue))
				{
					setValue(iifNullItem(oldValue as S));
				}
			}
		});

		if (typeof window !== "undefined")
		{
			const handleStorage = useCallback(
				(event: StorageEvent) =>
				{
					let { newValue } = event;
					if (event.key === key && newValue !== value)
					{
						newValue = iifNullItem(newValue);
						setValue(newValue as S)
					}
				},
				[value],
			);

			useEffect(() =>
			{

				if (typeof window !== "undefined")
				{
					window.addEventListener('storage', handleStorage);
					return () => window.removeEventListener('storage', handleStorage);
				}

				return void 0
			}, [handleStorage]);
		}

		return [value, setItem];
	}
}

export default createStorageHook
