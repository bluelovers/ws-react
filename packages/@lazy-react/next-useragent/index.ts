import { NextComponentType, NextPageContext } from 'next'
import getNextPageContext from '@lazy-react/get-next-ctx'
import getUserAgent from '@lazy-http/get-user-agent';

export function getNextUserAgent(ctx: NextPageContext | {
	ctx: NextPageContext,
})
{
	return getUserAgent({
		headers: getNextPageContext(ctx)?.req?.headers,
	})
}

export default getNextUserAgent
