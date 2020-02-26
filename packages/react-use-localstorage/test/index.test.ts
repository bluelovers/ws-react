import { renderHook, act } from '@testing-library/react-hooks';
import { createStorageHook } from '../src/core';
import localStorage from './setup';
import { iifNullItem } from '../src/util';

describe('useLocalStorage', (): void =>
{
	const useLocalStorage = createStorageHook(localStorage);

	const KEY = 'key';
	const VALUE = {
		INITIAL: 'initial value',
		CHANGED: 'changed value',
		NONE: null,
	};

	describe('Setup', () =>
	{

		it('Throw Error when createStorageHook(null)', () =>
		{
			expect(() => createStorageHook(null)).toThrowError();
		});

		it('Returns initial value', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));
			expect(result.current[0]).toMatch(VALUE.INITIAL);
		});

		it('When no initial value is passed, returns an empty string', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY));
			expect(result.current[0]).toStrictEqual(VALUE.NONE);
		});

		it('Returns setValue function', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));
			expect(typeof result.current[1]).toMatch('function');
		});
	});

	it('When `setValue()` is called, the `value` updates', () =>
	{
		const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

		act(() =>
		{
			result.current[1](VALUE.CHANGED);
		});

		expect(result.current[0]).toMatch(VALUE.CHANGED);
	});

	it('When `value` changes, `localStorage` is updated', () =>
	{
		const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

		act(() =>
		{
			result.current[1](VALUE.CHANGED);
		});

		expect(localStorage.getItem(KEY)).toBe(VALUE.CHANGED);
	});

	describe('Util', () =>
	{

		it('iifNullItem', () =>
		{
			expect(iifNullItem(void 0)).toStrictEqual(null);
		});

		it('iifNullItem: null', () =>
		{
			expect(iifNullItem(void 0, null)).toStrictEqual(null);
		});

		it('iifNullItem: undefined', () =>
		{
			expect(iifNullItem(null, undefined)).toBeUndefined();
		});

	});
});
