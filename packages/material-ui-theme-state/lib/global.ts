import create from './index';

const globalThemeState = create();

export const { useTheme, store, createTheme } = globalThemeState;

export default globalThemeState;
