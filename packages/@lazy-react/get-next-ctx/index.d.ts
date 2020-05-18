import { NextPageContext } from 'next';
export declare function getNextPageContext<T extends NextPageContext>(_ctx: T | {
    ctx: T;
}): T;
export default getNextPageContext;
