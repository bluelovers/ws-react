/// <reference types="node" />
/// <reference path="lib/env/now/index.d.ts"/>

import { IProviderEntry } from './lib/types';

export type IProviderIsWhoParams = {
	targetProcess?: NodeJS.Process;
	skipProvider?: string[];
}

export function providerIsWhoMaybe({
	targetProcess = process,
	doAll,
	skipProvider,
}: IProviderIsWhoParams & {
	doAll?: boolean,
})
{
	if (!targetProcess?.env)
	{
		return null;
	}

	const fnList = [
		() =>
		{
			if (env.NOW_BUILDER?.length || env.NOW_GITHUB_ORG?.length || env.INIT_CWD?.startsWith?.('/zeit/') || env.PWD?.startsWith?.('/zeit/'))
			{
				return {
					provider: 'now',
					github: env.NOW_GITHUB_ORG?.length > 0,
					gitlab: !!(env.GITLAB_DEPLOYMENT?.length && env.GITLAB_PROJECT_ID?.length),
					bitbucket: !!(env.BITBUCKET_DEPLOYMENT?.length && env.BITBUCKET_REPO_NAME?.length),
				} as const
			}
		},
	] as const;

	<readonly (() => IProviderEntry)[]>fnList;

	const returnList: (ReturnType<Extract<(typeof fnList)[keyof typeof fnList], () => IProviderEntry>>)[] = [];
	const env = targetProcess.env;

	const stop = () =>
	{
		return (doAll !== true && returnList.length)
	};

	for (const fn of fnList)
	{
		let entry = fn();

		if (entry !== void 0 && entry !== null && !skipProvider?.includes(entry.provider))
		{
			returnList.push(entry)
		}

		if (stop()) return returnList[0];
	}

	return doAll !== true ? returnList[0] : returnList;
}

export function providerIsWho(options: IProviderIsWhoParams)
{
	const entry = providerIsWhoMaybe({
		...options,
		doAll: false,
	})

	return entry as Exclude<ReturnType<typeof providerIsWhoMaybe>, any[]>
}

export default providerIsWho
