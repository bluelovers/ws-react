/**
 * Created by user on 2020/1/13.
 */
// @ts-ignore
import _createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import _useTheme from '@material-ui/core/styles/useTheme';
export function create(options = {}) {
    let { store } = options;
    store = store || new WeakMap();
    const useTheme = function useTheme() {
        const theme = _useTheme();
        let setTheme = store.get(theme);
        return {
            theme,
            setTheme,
        };
    };
    const createTheme = function createTheme(options, optsExtra, ...args) {
        const theme = _createMuiTheme(options, optsExtra, ...args);
        if (optsExtra === null || optsExtra === void 0 ? void 0 : optsExtra.setTheme) {
            let { setTheme: _setTheme } = optsExtra;
            const setTheme = async function (value, autoSpread) {
                if (autoSpread && typeof value === 'function') {
                    return _setTheme(old => {
                        // @ts-ignore
                        let n = value(old);
                        if (n && typeof n === 'object') {
                            return {
                                ...n
                            };
                        }
                        return n;
                    });
                }
                // @ts-ignore
                return _setTheme(value);
            };
            store.set(theme, setTheme);
            return {
                theme,
                setTheme
            };
        }
        return {
            theme,
        };
    };
    return {
        store,
        useTheme,
        createTheme,
    };
}
export default create;
//# sourceMappingURL=index.js.map