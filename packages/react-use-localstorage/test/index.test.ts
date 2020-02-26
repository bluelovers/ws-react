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

	describe('Setup check', () =>
	{

		it('Throw Error when createStorageHook(null)', () =>
		{
			expect(() => createStorageHook(null)).toThrowError();
		});

		it('Returns null without initial value', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY + '_NO_INITIAL_VALUE'));
			expect(result.current[0]).toStrictEqual(null);
		});

		it('Returns null with undefined', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY + '_NO_INITIAL_VALUE', undefined));
			expect(result.current[0]).toStrictEqual(null);
		});

		it('Returns null with null', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY + '_NO_INITIAL_VALUE', null));
			expect(result.current[0]).toStrictEqual(null);
		});

		it('Returns initial value', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));
			expect(result.current[0]).toStrictEqual(VALUE.INITIAL);
		});

		it('When no initial value is passed, returns null', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY));
			expect(result.current[0]).toStrictEqual(VALUE.NONE);
		});

		it('Returns setValue function', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));
			expect(result.current[1]).toBeInstanceOf(Function);
		});
	});

	describe('Value check', () => {
		it('When `setValue()` is called, the `value` updates', () =>
		{
			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

			act(() =>
			{
				result.current[1](VALUE.CHANGED);
			});

			expect(result.current[0]).toStrictEqual(VALUE.CHANGED);
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
	});

	describe('Null check', () =>
	{
		it('null', () =>
		{
			let KEY = 'KEY_null';

			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

			act(() =>
			{
				result.current[1](null);
			});

			expect(localStorage.getItem(KEY)).toStrictEqual(null);
		});

		it('undefined', () =>
		{
			let KEY = 'KEY_undefined';

			const { result } = renderHook(() => useLocalStorage(KEY, VALUE.INITIAL));

			act(() =>
			{
				result.current[1](undefined);
			});

			expect(localStorage.getItem(KEY)).toStrictEqual(null);
		});
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

	afterAll(async () => {
		console.dir(localStorage);
	})
});
