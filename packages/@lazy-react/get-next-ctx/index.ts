import { NextPageContext } from 'next';

export function getNextPageContext<T extends NextPageContext>(_ctx: T | {
	ctx: T
})
{
	let ctx = (_ctx as any as T);

	// @ts-ignore
	if (ctx?.ctx)
	{
		// @ts-ignore
		ctx = ctx.ctx;
	}

	return ctx
}

export default getNextPageContext
