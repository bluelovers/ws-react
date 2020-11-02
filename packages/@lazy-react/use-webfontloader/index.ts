import { Config } from 'webfontloader'
import WebFontLoader from 'webfontloader'

export function useWebFontLoader(config: Config | ((wf: typeof WebFontLoader) => Config))
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

export default useWebFontLoader
