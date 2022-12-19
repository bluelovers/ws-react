/// <reference types="react" />
/// <reference types="next" />

import { create, IThemeExtra } from './index';

const globalThemeState = create();

export const { useTheme, store, createTheme } = globalThemeState;
export { IThemeExtra }

export default globalThemeState;
