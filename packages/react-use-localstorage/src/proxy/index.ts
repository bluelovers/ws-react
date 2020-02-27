import { IStorageLike } from '../types';
import { isNullItem } from '../util';
import AbstractStorageProxy from './abstract';

export class StorageProxy<S extends IStorageLike> extends AbstractStorageProxy<S>
{

	getItem<T = unknown, K extends string = string>(key: K): T
	{
		// @ts-ignore
		key = this.hashKey(key);

		let value = this.storage.getItem(key);

		return isNullItem(value) ? null : JSON.parse(value)
	}

	setItem<T = unknown, K extends string = string>(key: K, value: T)
	{
		// @ts-ignore
		key = this.hashKey(key);

		if (isNullItem(value))
		{
			this.storage.removeItem(key);
		}
		else
		{
			this.storage.setItem(key, this.serializesValue(value))
		}
	}

}

export default StorageProxy
