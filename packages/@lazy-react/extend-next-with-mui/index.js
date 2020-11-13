"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendNextDocumentWithMui = void 0;
const tslib_1 = require("tslib");
const ServerStyleSheets_1 = tslib_1.__importDefault(require("@material-ui/styles/ServerStyleSheets"));
const react_1 = tslib_1.__importDefault(require("react"));
function extendNextDocumentWithMui(oldDocument, overwrite) {
    let newDocument;
    if (overwrite) {
        newDocument = oldDocument;
    }
    else {
        // @ts-ignore
        newDocument = (() => class newDocumentClass extends oldDocument {
        })();
    }
    const originalGetInitialProps = oldDocument.getInitialProps;
    newDocument.getInitialProps = async function getInitialProps(ctx) {
        const sheets = new ServerStyleSheets_1.default();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(react_1.default.createElement(App, Object.assign({}, props))),
        });
        const initialProps = await originalGetInitialProps.call(this, ctx);
        initialProps.styles = [
            ...react_1.default.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ];
        return initialProps;
    };
    return newDocument;
}
exports.extendNextDocumentWithMui = extendNextDocumentWithMui;
exports.default = extendNextDocumentWithMui;
//# sourceMappingURL=index.js.map