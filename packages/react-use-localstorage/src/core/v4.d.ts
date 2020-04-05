import { Dispatch, SetStateAction } from 'react';
import type { IStorageLike, IDispatchSetStateAction, IStateInitialValue } from '../types';
import AbstractStorageProxy from '../proxy/abstract';
export declare function createStorageHook(localStorage: AbstractStorageProxy<IStorageLike>): <S extends unknown = unknown>(key: string, initialValue?: IStateInitialValue<S>) => [S, Dispatch<SetStateAction<S>>];
export default createStorageHook;
