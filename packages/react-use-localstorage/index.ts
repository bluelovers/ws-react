import { IStateInitialValue, IDispatchSetStateAction } from './src/types';
import { createStorageHook } from './src/core';
import storage from './src/storage'

export { createStorageHook }

// @ts-ignore
export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>]
// @ts-ignore
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>]

// @ts-ignore
const useStorage = exports.useStorage = createStorageHook(storage);

export default useStorage
