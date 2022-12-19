import { IStateInitialValue, IDispatchSetStateAction } from './src/types';
import { createStorageHook } from './src/core';
export { createStorageHook };
export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>];
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>];
declare const useStorage: <S extends unknown = unknown>(key: string, initialValue?: IStateInitialValue<S>) => [S, IDispatchSetStateAction<S>];
export default useStorage;
