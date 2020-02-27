"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const util_1 = require("../util");
function createStorageHook(localStorage) {
    util_1.assertStorageLike(localStorage);
    return function useStorage(key, initialValue) {
        const [value, setValue] = react_1.useState(() => {
            let value = localStorage.getItem(key);
            if (util_1.isNullItem(value)) {
                value = util_1.getStateInitialValue(initialValue);
                if (util_1.isNullItem(value)) {
                    value = util_1.iifNullItem(value);
                }
            }
            return value;
        });
        const setItem = (newValue) => {
            setValue((prevState => {
                let value = util_1.isSetStateAction(newValue) ? newValue(prevState) : newValue;
                //value = iifNullItem(value);
                if (util_1.isNullItem(value)) {
                    localStorage.removeItem(key);
                }
                else {
                    localStorage.setItem(key, value);
                }
                return value;
            }));
        };
        react_1.useEffect(() => {
            let oldValue = localStorage.getItem(key);
            if (value !== oldValue) {
                if (!util_1.isNullItem(oldValue)) {
                    setValue(util_1.iifNullItem(oldValue));
                }
            }
        });
        if (typeof window !== "undefined") {
            const handleStorage = react_1.useCallback((event) => {
                let { newValue } = event;
                if (event.key === key && newValue !== value) {
                    newValue = util_1.iifNullItem(newValue);
                    setValue(newValue);
                }
            }, [value]);
            react_1.useEffect(() => {
                if (typeof window !== "undefined") {
                    window.addEventListener('storage', handleStorage);
                    return () => window.removeEventListener('storage', handleStorage);
                }
                return void 0;
            }, [handleStorage]);
        }
        return [value, setItem];
    };
}
exports.createStorageHook = createStorageHook;
exports.default = createStorageHook;
//# sourceMappingURL=v3.js.map