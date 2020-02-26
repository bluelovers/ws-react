import createStorageHook from '../core';
import { IStateInitialValue, IDispatchSetStateAction } from '../types';

export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>]
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>]

exports.useStorage = createStorageHook(window.sessionStorage);

export default useStorage