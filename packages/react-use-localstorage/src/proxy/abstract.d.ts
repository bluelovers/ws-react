import { IStorageLike } from '../types';
export declare abstract class AbstractStorageProxy<S extends IStorageLike> {
    #private;
    protected storage: S;
    constructor(storage: S);
    abstract getItem<T = unknown, K extends string = string>(key: K): T;
    abstract setItem<T = unknown, K extends string = string>(key: K, value: T): any;
    hashKey(key: any): string;
    removeItem<K extends string = string>(key: K): void;
    equal(a: any, b: any): boolean;
    serializesValue<T = unknown>(value: T): string;
    deserializesValue<T = unknown>(value: string): T;
    mount(handleStorage: (event: StorageEvent) => void): () => void;
}
export default AbstractStorageProxy;
