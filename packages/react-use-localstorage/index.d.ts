import { IStateInitialValue, IDispatchSetStateAction } from './src/types';
export { createStorageHook } from './src/core/v3';
export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>];
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>];
export default useStorage;
