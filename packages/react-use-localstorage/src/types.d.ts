import { Dispatch, SetStateAction } from 'react';
export interface IStorageLike extends Pick<WindowLocalStorage["localStorage"], 'getItem' | 'setItem' | 'removeItem'> {
}
export declare type IStateInitialValueFn<S> = () => S;
export declare type IStateInitialValue<S> = S | IStateInitialValueFn<S>;
export declare type IUnpackStateInitialValue<T> = T extends IStateInitialValue<infer S> ? S : never;
export declare type IDispatchSetStateAction<S> = Dispatch<SetStateAction<S>>;
export declare type ISetStateActionFn<S> = (prevState: S) => S;
