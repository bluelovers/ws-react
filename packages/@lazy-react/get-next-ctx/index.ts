import { NextPageContext } from 'next';

export function getNextPageContext<T extends NextPageContext>(_ctx: T | {
	ctx: T
})
{
	const ctx: T = (_ctx as any as {
		ctx: T
	})?.ctx ?? _ctx as T;

	return ctx
}

export default getNextPageContext
