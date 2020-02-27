import { renderHook, act } from '@testing-library/react-hooks';
import createStorageHook from '../src/core/v4';
import localStorage from './setup';
import { iifNullItem } from '../src/util';
import StorageProxy from '../src/proxy';

describe('useLocalStorage', (): void =>
{
	const storage = new StorageProxy(localStorage);

	const useStorage = createStorageHook(storage);

	const KEY = 'key';
	const VALUE = {
		INITIAL: {
			a: 0,
		},
		CHANGED: {
			a: 1,
		},
		NONE: null,
	};

	describe('Value check', () => {
		it('When `setValue()` is called, the `value` updates', () =>
		{
			const { result } = renderHook(() => useStorage(KEY, VALUE.INITIAL));

			act(() =>
			{
				result.current[1](VALUE.CHANGED);
			});

			expect(result.current[0]).toStrictEqual(VALUE.CHANGED);
		});

		it('When `value` changes, `localStorage` is updated', () =>
		{
			const { result } = renderHook(() => useStorage(KEY, VALUE.INITIAL));

			act(() =>
			{
				result.current[1](VALUE.CHANGED);
			});

			expect(storage.getItem(KEY)).toStrictEqual(VALUE.CHANGED);
		});
	});

});
