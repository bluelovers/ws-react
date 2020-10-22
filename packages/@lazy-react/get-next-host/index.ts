import { AppContext } from 'next/dist/pages/_app';
import { DocumentContext, NextPageContext } from 'next/dist/next-server/lib/utils';
import getNextPageContext from '@lazy-react/get-next-ctx';
import isReqHttps from 'is-req-https2';
import originalUrl from 'original-url2';

export function getNextHost<T extends AppContext | DocumentContext | NextPageContext>(_ctx: T)
{
	const ctx = getNextPageContext(_ctx);

	const secure = isReqHttps(ctx.req);
	let hostname: string;

	let data = originalUrl(ctx.req);

	if (!hostname)
	{
		if (data.hostname)
		{
			hostname = data.hostname
		}
	}

	let url = new URL(data.full ? data.full : data.host);
	if (secure)
	{
		url.protocol = 'https:';
	}
	url.hostname = hostname ? hostname : data.hostname;

	return {
		secure,
		origin: url.origin,
		hostname: url.hostname,
		host: url.host,
	}
}

export default getNextHost
