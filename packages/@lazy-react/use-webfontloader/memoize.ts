import { memoize } from 'lodash';
import _useWebFontLoader from './index';

export const useWebFontLoader = memoize(_useWebFontLoader)

export default useWebFontLoader
