import { IStorageLike } from '../types';
import { AbstractStorageProxy } from './abstract';
export declare class StorageProxy<S extends IStorageLike> extends AbstractStorageProxy<S> {
    getItem<T = unknown, K extends string = string>(key: K): T;
    setItem<T = unknown, K extends string = string>(key: K, value: T): void;
}
export default StorageProxy;
