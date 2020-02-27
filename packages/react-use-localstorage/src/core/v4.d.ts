import { Dispatch, SetStateAction } from 'react';
import type { IStorageLike, IStateInitialValue } from '../types';
import AbstractStorageProxy from '../proxy/abstract';
export declare function createStorageHook(localStorage: AbstractStorageProxy<IStorageLike>): <S extends any = unknown>(key: string, initialValue?: IStateInitialValue<S>) => [S, Dispatch<SetStateAction<S>>];
export default createStorageHook;
