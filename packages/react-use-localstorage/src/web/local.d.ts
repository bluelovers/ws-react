import { IStateInitialValue, IDispatchSetStateAction } from '../types';
export declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>];
export declare function useStorage<S = unknown>(key: string): [S, IDispatchSetStateAction<S>];
export default useStorage;
