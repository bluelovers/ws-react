import type { IStorageLike, IDispatchSetStateAction, IStateInitialValue } from '../types';
export declare function createStorageHook<S extends string = string>(localStorage: IStorageLike): (key: string, initialValue?: IStateInitialValue<S>) => [S, IDispatchSetStateAction<S>];
export default createStorageHook;
