import { IStorageLike } from './types';
export declare abstract class AbstractStorageProxy<S extends IStorageLike> {
    protected storage: S;
    constructor(storage: S);
    abstract getItem<T = unknown, K extends string = string>(key: K): T;
    abstract setItem<T = unknown, K extends string = string>(key: K, value: T): any;
    removeItem<K extends string = string>(key: K): void;
    equal(a: any, b: any): boolean;
    serializerValue<T = unknown>(value: T): string;
}
export declare class StorageProxy<S extends IStorageLike> extends AbstractStorageProxy<S> {
    getItem<T = unknown, K extends string = string>(key: K): T;
    setItem<T = unknown, K extends string = string>(key: K, value: T): void;
}
