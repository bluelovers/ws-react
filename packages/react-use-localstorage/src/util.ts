import { IStorageLike, IStateInitialValue, IStateInitialValueFn, ISetStateActionFn } from './types';
import { SetStateAction } from 'react';

export function isNullItem(value: unknown): value is null
{
	return typeof value === 'undefined' || value === null
}

export function iifNullItem<T>(value: T, ...argv: [(null | undefined)?])
{
	let fallbackValue: null | undefined = null;
	if (argv.length)
	{
		fallbackValue = argv[0];
	}
	return isNullItem(value) ? fallbackValue : value as NonNullable<T>
}

export function notStorageLike<T extends IStorageLike>(localStorage: T): localStorage is null
{
	return (isNullItem(localStorage) || typeof localStorage.setItem !== 'function' || typeof localStorage.getItem !== 'function' || typeof localStorage.removeItem !== 'function')
}

export function isStateInitialValue<S>(initialValue: IStateInitialValue<S>): initialValue is IStateInitialValueFn<S>
{
	return typeof initialValue === 'function'
}

export function isSetStateAction<S>(initialValue: SetStateAction<S>): initialValue is ISetStateActionFn<S>
{
	return typeof initialValue === 'function'
}

export function getStateInitialValue<S>(initialValue: IStateInitialValue<S>)
{
	return isStateInitialValue(initialValue) ? initialValue() : initialValue
}
