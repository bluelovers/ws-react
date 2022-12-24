"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStorageHook = void 0;
const react_1 = require("react");
const util_1 = require("../util");
function createStorageHook(localStorage) {
    (0, util_1.assertStorageLike)(localStorage);
    return function useStorage(key, initialValue) {
        const [value, setValue] = (0, react_1.useState)(() => {
            let value = localStorage.getItem(key);
            if ((0, util_1.isNullItem)(value)) {
                value = (0, util_1.getStateInitialValue)(initialValue);
                if ((0, util_1.isNullItem)(value)) {
                    value = (0, util_1.iifNullItem)(value);
                }
            }
            return value;
        });
        const setItem = (newValue) => {
            setValue((prevState => {
                let value = (0, util_1.isSetStateAction)(newValue) ? newValue(prevState) : newValue;
                if ((0, util_1.isNullItem)(value)) {
                    localStorage.removeItem(key);
                }
                else {
                    localStorage.setItem(key, value);
                }
                return (0, util_1.iifNullItem)(value);
            }));
        };
        (0, react_1.useEffect)(() => {
            let oldValue = localStorage.getItem(key);
            if (!localStorage.equal(value, oldValue)) {
                if (!(0, util_1.isNullItem)(oldValue)) {
                    setValue((0, util_1.iifNullItem)(oldValue));
                }
            }
        });
        if (typeof window !== "undefined") {
            const handleStorage = (0, react_1.useCallback)((event) => {
                let { newValue } = event;
                if (event.key === key && !localStorage.equal(newValue, value)) {
                    setValue(localStorage.deserializesValue(newValue));
                }
            }, [value]);
            (0, react_1.useEffect)(() => {
                return localStorage.mount(handleStorage);
            }, [handleStorage]);
        }
        return [value, setItem];
    };
}
exports.createStorageHook = createStorageHook;
exports.default = createStorageHook;
//# sourceMappingURL=v4.js.map