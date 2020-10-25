"use strict";
/**
 * Created by user on 2020/1/13.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const createMuiTheme_1 = __importDefault(require("@material-ui/core/styles/createMuiTheme"));
const useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
function create(options = {}) {
    let { store } = options;
    store = store || new WeakMap();
    const useTheme = function useTheme() {
        const theme = useTheme_1.default();
        let setTheme = store.get(theme);
        return {
            theme,
            setTheme,
        };
    };
    const createTheme = function createTheme(options, optsExtra, ...args) {
        const theme = createMuiTheme_1.default(options, optsExtra, ...args);
        if (optsExtra && optsExtra.setTheme) {
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
exports.create = create;
exports.default = create;
//# sourceMappingURL=index.js.map