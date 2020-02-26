import { Dispatch, SetStateAction } from 'react';

export interface IStorageLike extends Pick<WindowLocalStorage["localStorage"], 'getItem' | 'setItem' | 'removeItem'> {}

export type IStateInitialValueFn<S> = () => S;
export type IStateInitialValue<S> = S | IStateInitialValueFn<S>;
export type IUnpackStateInitialValue<T> = T extends IStateInitialValue<infer S> ? S : never;
export type IDispatchSetStateAction<S> = Dispatch<SetStateAction<S>>;

export type ISetStateActionFn<S> = (prevState: S) => S;

//export type useStorage<T> = <S extends T>(key: string, initialValue?: IStateInitialValue<S>) => [S, IDispatchSetStateAction<S>];

declare function useStorage<S>(key: string, initialValue?: IStateInitialValue<S>): [S, IDispatchSetStateAction<S>]
