import { Dispatch, useCallback, useEffect, useState, SetStateAction } from 'react';
import type { IStorageLike, IDispatchSetStateAction, IStateInitialValue, IUnpackStateInitialValue } from '../types';
import {
	notStorageLike,
	isNullItem,
	getStateInitialValue,
	isSetStateAction,
	iifNullItem,
	assertStorageLike,
} from '../util';
import { AbstractStorageProxy } from '../proxy/abstract';

export function createStorageHook(localStorage: AbstractStorageProxy<IStorageLike>)
{
	assertStorageLike(localStorage);

	return function useStorage<S extends any = unknown>(
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

				if (isNullItem(value))
				{
					localStorage.removeItem(key)
				}
				else
				{
					localStorage.setItem(key, value);
				}

				return iifNullItem(value)
			}));
		};

		useEffect(() =>
		{
			let oldValue = localStorage.getItem(key);
			if (!localStorage.equal(value, oldValue))
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

					if (event.key === key && !localStorage.equal(newValue, value))
					{
						setValue(localStorage.deserializesValue(newValue))
					}
				},
				[value],
			);

			useEffect(() =>
			{
				return localStorage.mount(handleStorage)
			}, [handleStorage]);
		}

		return [value, setItem];
	}
}

export default createStorageHook
