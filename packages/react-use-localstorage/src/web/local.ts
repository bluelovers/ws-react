import { createStorageHook } from '../core';
import { IStateInitialValue, IDispatchSetStateAction } from '../types';
import StorageProxy from '../proxy';

export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>]
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>]

exports.useStorage = createStorageHook(new StorageProxy(window.localStorage));

export default useStorage
