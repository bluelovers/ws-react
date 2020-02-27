import { Dispatch, SetStateAction } from 'react';
import { ITSValueOrArray } from 'ts-type';
export interface IStorageLike extends Pick<WindowLocalStorage["localStorage"], 'getItem' | 'setItem' | 'removeItem'> {
}
export declare type IStateInitialValueFn<S> = () => S;
export declare type IStateInitialValue<S> = S | IStateInitialValueFn<S>;
export declare type IUnpackStateInitialValue<T> = T extends IStateInitialValue<infer S> ? S : never;
export declare type IDispatchSetStateAction<S> = Dispatch<SetStateAction<S>>;
export declare type ISetStateActionFn<S> = (prevState: S) => S;
export declare type IStringifyAble<T> = T extends Function | RegExp ? never : T extends ITSValueOrArray<boolean | number | null | undefined | Record<any, any>> ? T : never;
