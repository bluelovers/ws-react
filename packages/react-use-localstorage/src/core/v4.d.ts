import type { IStorageLike, IDispatchSetStateAction, IStateInitialValue } from '../types';
import { AbstractStorageProxy } from '../proxy/abstract';
export declare function createStorageHook(localStorage: AbstractStorageProxy<IStorageLike>): <S extends unknown = unknown>(key: string, initialValue?: IStateInitialValue<S>) => [S, IDispatchSetStateAction<S>];
export default createStorageHook;
