import { IStorageLike } from '../types';
import { assertStorageLike, iifNullItem, isNullItem } from '../util';

const handleMap = new WeakMap<(event: StorageEvent) => void, () => void>();

export abstract class AbstractStorageProxy<S extends IStorageLike>
{
	constructor(protected readonly storage: S)
	{
		assertStorageLike(this.storage);
	}

	abstract getItem<T = unknown, K extends string = string>(key: K): T

	abstract setItem<T = unknown, K extends string = string>(key: K, value: T)

	hashKey(key): string
	{
		return key
	}

	removeItem<K extends string = string>(key: K)
	{
		this.storage.removeItem(this.hashKey(key));
	}

	equal(a, b): boolean
	{
		a = iifNullItem(a);
		b = iifNullItem(b);

		return a === b || this.serializesValue(a) === this.serializesValue(b)
	}

	serializesValue<T = unknown>(value: T): string
	{
		return JSON.stringify(value)
	}

	deserializesValue<T = unknown>(value: string): T
	{
		if (!isNullItem(value))
		{
			// @ts-ignore
			value = JSON.parse(value)
		}
		return iifNullItem(value as any)
	}

	mount(handleStorage: (event: StorageEvent) => void)
	{
		if (typeof window !== "undefined")
		{
			if (handleMap.has(handleStorage))
			{
				return handleMap.get(handleStorage)
			}

			window.addEventListener('storage', handleStorage);

			const unmount = () =>
			{
				window.removeEventListener('storage', handleStorage);
				handleMap.delete(handleStorage);
			};

			handleMap.set(handleStorage, unmount);

			return unmount;
		}

		return () => void 0
	}
}

export default AbstractStorageProxy
