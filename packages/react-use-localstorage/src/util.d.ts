import { IStorageLike, IStateInitialValue, IStateInitialValueFn, ISetStateActionFn } from './types';
import { SetStateAction } from 'react';
export declare function isNullItem(value: unknown): value is null;
export declare function iifNullItem<T>(value: T, ...argv: [(null | undefined)?]): NonNullable<T>;
export declare function notStorageLike<T extends IStorageLike>(localStorage: T): localStorage is null;
export declare function isStateInitialValue<S>(initialValue: IStateInitialValue<S>): initialValue is IStateInitialValueFn<S>;
export declare function isSetStateAction<S>(initialValue: SetStateAction<S>): initialValue is ISetStateActionFn<S>;
export declare function getStateInitialValue<S>(initialValue: IStateInitialValue<S>): S;
