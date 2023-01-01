import { AppContext } from 'next/app';
import { NextPageContext } from 'next';
import { DocumentContext } from 'next/document'
import { getNextPageContext } from '@lazy-react/get-next-ctx';
import { checkResHttp } from 'is-req-https2';
import { originalUrl } from 'original-url2';

export function getNextHost<T extends AppContext | DocumentContext | NextPageContext>(_ctx: T)
{
	const ctx = getNextPageContext(_ctx);

	if (!ctx?.req)
	{
		return null
	}

	const secure = checkResHttp(ctx.req);
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
