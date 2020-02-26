import { Dispatch, useCallback, useEffect, useState } from 'react';

export interface IStorageLikeMini extends Pick<WindowLocalStorage["localStorage"], 'getItem' | 'setItem' | 'removeItem'> {}

export function isNullItem(value: unknown): value is null
{
	return typeof value === 'undefined' || value === null
}

export function createStorageHook(localStorage: WindowLocalStorage["localStorage"])
{
	if (isNullItem(localStorage) || typeof localStorage.setItem !== 'function' || typeof localStorage.getItem !== 'function')
	{
		throw new TypeError(`${localStorage} not a localStorage like object`)
	}

	return function useStorage(
		key: string,
		initialValue?: string,
	): [string, Dispatch<string>]
	{
		const [value, setValue] = useState(
			() =>
			{
				let value = localStorage.getItem(key);
				if (isNullItem(value))
				{
					value = initialValue as any;

					if (isNullItem(value))
					{
						value = null
					}
				}
				return value as Exclude<typeof value, null | undefined>
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
				if (isNullItem(newValue))
				{
					setValue(initialValue as any);
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
					const { newValue } = event;
					if (event.key === key && newValue !== value)
					{
						if (isNullItem(newValue))
						{
							setValue(initialValue as any);
						}
						else
						{
							setValue(newValue);
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

export default createStorageHook
