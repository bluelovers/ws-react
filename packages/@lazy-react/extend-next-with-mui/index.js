"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendNextDocumentWithMui = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const document_1 = tslib_1.__importDefault(require("next/document"));
const styles_1 = require("@material-ui/core/styles");
const createMuiTheme_1 = tslib_1.__importDefault(require("@material-ui/core/styles/createMuiTheme"));
function extendNextDocumentWithMui(options) {
    var _a, _b;
    const oldDocument = (_a = options === null || options === void 0 ? void 0 : options.Document) !== null && _a !== void 0 ? _a : document_1.default;
    const newDocument = (_b = options === null || options === void 0 ? void 0 : options.newDocument) !== null && _b !== void 0 ? _b : (() => class newDocumentClass extends oldDocument {
    })();
    const getInitialPropsOld = oldDocument.getInitialProps;
    async function getInitialProps(ctx) {
        var _a, _b;
        const sheet = (_a = options === null || options === void 0 ? void 0 : options.sheet) !== null && _a !== void 0 ? _a : new styles_1.ServerStyleSheets();
        const muiTheme = (_b = options === null || options === void 0 ? void 0 : options.muiTheme) !== null && _b !== void 0 ? _b : createMuiTheme_1.default();
        const initialProps = await getInitialPropsOld.call(oldDocument, {
            ...ctx,
            renderPage() {
                const fn = (App) => {
                    return async (props) => {
                        var _a, _b;
                        const root = (_b = await ((_a = options === null || options === void 0 ? void 0 : options.renderPage) === null || _a === void 0 ? void 0 : _a.call(options, App, props, {
                            muiTheme,
                            sheet,
                        }))) !== null && _b !== void 0 ? _b : (react_1.default.createElement(styles_1.MuiThemeProvider, { theme: muiTheme },
                            react_1.default.createElement(App, Object.assign({}, props))));
                        return sheet.collect(root);
                    };
                };
                return ctx.renderPage(fn);
            },
        });
        return {
            ...initialProps,
            styles: (react_1.default.createElement(react_1.default.Fragment, null,
                sheet.getStyleElement(),
                initialProps.styles)),
        };
    }
    newDocument.getInitialProps = getInitialProps;
    return newDocument;
}
exports.extendNextDocumentWithMui = extendNextDocumentWithMui;
exports.default = extendNextDocumentWithMui;
//# sourceMappingURL=index.js.map