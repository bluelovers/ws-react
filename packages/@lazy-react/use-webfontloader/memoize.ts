import { memoize } from 'lodash';
import { useWebFontLoaderCore } from './core';

const fn = memoize(useWebFontLoaderCore)

export function useWebFontLoader()
{
	return fn
}

export default useWebFontLoader
