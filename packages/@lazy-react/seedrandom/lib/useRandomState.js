"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRandomState = void 0;
const tslib_1 = require("tslib");
const useRandomContext_1 = require("./useRandomContext");
const react_1 = require("react");
const seedrandom_1 = tslib_1.__importDefault(require("seedrandom"));
function useRandomState() {
    const contextValue = useRandomContext_1.useRandomContext();
    return react_1.useMemo(() => {
        //console.log(`useRandomState`, contextValue)
        const rnd = seedrandom_1.default(contextValue.seed, {
            state: contextValue.initState,
        });
        return rnd;
    }, [contextValue]);
}
exports.useRandomState = useRandomState;
exports.default = useRandomState;
//# sourceMappingURL=useRandomState.js.map