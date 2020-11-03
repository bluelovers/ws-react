import { useCallback, useMemo } from 'react';
import { useWebFontLoaderCore } from './core';

export function useWebFontLoader()
{
	return useCallback(useWebFontLoaderCore, [])
}

export default useWebFontLoader
