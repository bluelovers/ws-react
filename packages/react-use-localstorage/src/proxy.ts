import { IStorageLike } from './types';
import { notStorageLike, assertStorageLike, isNullItem, iifNullItem } from './util';

export abstract class AbstractStorageProxy<S extends IStorageLike>
{
	constructor(protected storage: S) {
		assertStorageLike(this.storage);
	}

	abstract getItem<T = unknown, K extends string = string>(key: K): T
	abstract setItem<T = unknown, K extends string = string>(key: K, value: T)

	removeItem<K extends string = string>(key: K)
	{
		this.storage.removeItem(key);
	}

	equal(a, b): boolean
	{
		a = iifNullItem(a);
		b = iifNullItem(b);

		return a === b || this.serializerValue(a) === this.serializerValue(b)
	}

	serializerValue<T = unknown>(value: T): string
	{
		return JSON.stringify(value)
	}
}

export class StorageProxy<S extends IStorageLike> extends AbstractStorageProxy<S>
{

	getItem<T = unknown, K extends string = string>(key: K): T
	{
		let value = this.storage.getItem(key);

		return isNullItem(value) ? null : JSON.parse(value)
	}

	setItem<T = unknown, K extends string = string>(key: K, value: T)
	{
		if (isNullItem(value))
		{
			this.storage.removeItem(key);
		}
		else
		{
			this.storage.setItem(key, this.serializerValue(value))
		}
	}

}
