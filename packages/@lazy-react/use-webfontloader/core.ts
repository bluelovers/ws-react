import WebFontLoader, { Config } from 'webfontloader';

export function useWebFontLoaderCore(config: Config | ((wf: typeof WebFontLoader) => Config))
{
	if (typeof window !== 'undefined')
	{
		const WebFontLoader = require('webfontloader');

		if (typeof config === 'function')
		{
			WebFontLoader.load(config(WebFontLoader));
		}
		else
		{
			WebFontLoader.load(config);
		}
	}
}

export default useWebFontLoaderCore
