import { Dispatch, SetStateAction } from 'react';
import type { IStorageLike, IStateInitialValue } from './types';
export declare function createStorageHook<S extends string = string>(localStorage: IStorageLike): (key: string, initialValue?: IStateInitialValue<S>) => [S, Dispatch<SetStateAction<S>>];
export default createStorageHook;
