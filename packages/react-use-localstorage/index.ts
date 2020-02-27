import { IStateInitialValue, IDispatchSetStateAction } from './src/types';
import { createStorageHook } from './src/core';
import storage from './src/storage'

export { createStorageHook }

export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>]
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>]

exports.useStorage = createStorageHook(storage);

export default useStorage
