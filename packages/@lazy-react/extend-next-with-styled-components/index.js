"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendNextDocumentWithStyledComponents = void 0;
const react_1 = __importDefault(require("react"));
const document_1 = __importDefault(require("next/document"));
const styled_components_1 = require("styled-components");
function extendNextDocumentWithStyledComponents(options) {
    var _a, _b;
    const oldDocument = (_a = options === null || options === void 0 ? void 0 : options.Document) !== null && _a !== void 0 ? _a : document_1.default;
    const newDocument = (_b = options === null || options === void 0 ? void 0 : options.newDocument) !== null && _b !== void 0 ? _b : (() => class newDocumentClass extends oldDocument {
    })();
    const getInitialPropsOld = oldDocument.getInitialProps;
    async function getInitialProps(ctx) {
        var _a;
        const sheet = (_a = options === null || options === void 0 ? void 0 : options.sheet) !== null && _a !== void 0 ? _a : new styled_components_1.ServerStyleSheet();
        try {
            const initialProps = await getInitialPropsOld.call(oldDocument, {
                ...ctx,
                renderPage() {
                    const fn = (App) => {
                        return async (props) => {
                            var _a, _b;
                            const root = (_b = await ((_a = options === null || options === void 0 ? void 0 : options.renderPage) === null || _a === void 0 ? void 0 : _a.call(options, App, props, {
                                sheet,
                            }))) !== null && _b !== void 0 ? _b : (react_1.default.createElement(App, Object.assign({}, props)));
                            // @ts-ignore
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
        finally {
            sheet.seal();
        }
    }
    newDocument.getInitialProps = getInitialProps;
    return newDocument;
}
exports.extendNextDocumentWithStyledComponents = extendNextDocumentWithStyledComponents;
exports.default = extendNextDocumentWithStyledComponents;
//# sourceMappingURL=index.js.map