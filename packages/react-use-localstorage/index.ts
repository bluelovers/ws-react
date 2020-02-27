/**
 * Created by user on 2020/2/27.
 */
import _useStorage from './src/web/local';
import { IStateInitialValue, IDispatchSetStateAction } from './src/types';
export { createStorageHook } from './src/core';

export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>]
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>]

exports.useStorage = _useStorage;

export default useStorage
