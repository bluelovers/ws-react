import Document, { DocumentContext } from 'next/document';
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets';
import React from 'react';

export function extendNextDocumentWithMui<D extends typeof Document>(oldDocument: D, overwrite?: boolean): D
{
	let newDocument: D;

	if (overwrite)
	{
		newDocument = oldDocument;
	}
	else
	{
		// @ts-ignore
		newDocument = (() => class newDocumentClass extends oldDocument {})();
	}

	const originalGetInitialProps = oldDocument.getInitialProps;

	newDocument.getInitialProps = async function getInitialProps(ctx: DocumentContext)
	{
		const sheets = new ServerStyleSheets();

		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
			});

		const initialProps = await originalGetInitialProps.call(this, ctx);

		initialProps.styles = [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		];

		return initialProps
	}

	return newDocument
}

export default extendNextDocumentWithMui
