"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const seedrandom_1 = tslib_1.__importDefault(require("seedrandom"));
const nanoid_1 = require("nanoid");
const RandomContext_1 = tslib_1.__importDefault(require("./RandomContext"));
const RandomProvider = ({ children, initState, key, seed, }) => {
    const [randomState, setRandomState] = react_1.useState(initState || true);
    const defaults = react_1.useMemo(() => {
        seed || (seed = nanoid_1.nanoid());
        key || (key = nanoid_1.nanoid());
        let initState = randomState;
        if (initState === true) {
            initState = seedrandom_1.default(seed, {
                state: initState,
            }).state();
        }
        else {
            initState = seedrandom_1.default(seed, {
                state: initState,
            }).state();
        }
        setRandomState(initState);
        /*
        console.log(`RandomProvider`, {
            initState,
            key,
            seed,
            setRandomState,
        })
         */
        return {
            initState,
            key,
            seed,
            setRandomState,
        };
    }, []);
    return react_1.default.createElement(RandomContext_1.default.Provider, { value: defaults, children: children });
};
exports.RandomProvider = RandomProvider;
exports.default = exports.RandomProvider;
//# sourceMappingURL=RandomProvider.js.map