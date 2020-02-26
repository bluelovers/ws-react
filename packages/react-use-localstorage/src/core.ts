import { Dispatch, useCallback, useEffect, useState } from 'react';

export interface LocalStorageLikeMini extends Pick<WindowLocalStorage["localStorage"], 'getItem' | 'setItem'> {}

export function createLocalStorageHook(localStorage: WindowLocalStorage["localStorage"])
{
	if (typeof localStorage.setItem !== 'function' || typeof localStorage.getItem !== 'function')
	{
		throw new TypeError(`${localStorage} not a localStorage like object`)
	}

	return function useLocalStorage(
		key: string,
		initialValue: string = '',
	): [string, Dispatch<string>]
	{
		const [value, setValue] = useState(
			() =>
			{
				let value = localStorage.getItem(key);
				if (typeof value === 'undefined' || value === null)
				{
					value = initialValue
				}
				return value
			},
		);

		const setItem = (newValue: string) =>
		{
			setValue(newValue);
			localStorage.setItem(key, newValue);
		};

		useEffect(() =>
		{
			const newValue = localStorage.getItem(key);
			if (value !== newValue)
			{
				if (typeof newValue === 'undefined' || newValue === null)
				{
					setValue(initialValue);
				}
				else
				{
					setValue(newValue);
				}
			}
		});

		if (typeof window !== "undefined")
		{
			const handleStorage = useCallback(
				(event: StorageEvent) =>
				{
					if (event.key === key && event.newValue !== value)
					{
						if (typeof event.newValue === 'undefined' || event.newValue === null)
						{
							setValue(initialValue);
						}
						else
						{
							setValue(event.newValue);
						}
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

export default createLocalStorageHook
