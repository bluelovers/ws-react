import React, { PropsWithChildren, ReactNode } from 'react';
import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document'
import { ServerStyleSheets, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Enhancer, NextComponentType, RenderPageResult } from 'next/dist/next-server/lib/utils';

export function extendNextDocumentWithMui(options?: {
	newDocument?: typeof Document,
	Document?: typeof Document,
	muiTheme?: Theme,
	sheet?: ServerStyleSheets,

	renderPage?(App: NextComponentType, props: PropsWithChildren<{}>, runtime: {
		muiTheme: Theme,
		sheet: ServerStyleSheets,
	}): RenderPageResult
})
{
	const oldDocument = options?.Document ?? Document;
	const newDocument = options?.newDocument ?? (() => class newDocumentClass extends oldDocument {})();

	const getInitialPropsOld = oldDocument.getInitialProps;

	async function getInitialProps(ctx: DocumentContext)
	{
		const sheet = options?.sheet ?? new ServerStyleSheets();
		const muiTheme = options?.muiTheme ?? createMuiTheme();

		const initialProps = await getInitialPropsOld.call(oldDocument, {
			...ctx,
			renderPage()
			{
				const fn = (App) =>
				{
					return async (props) =>
					{
						const root = await options?.renderPage?.(App, props, {
							muiTheme,
							sheet,
						}) ?? (<MuiThemeProvider theme={muiTheme}>
							<App {...props} />
						</MuiThemeProvider>);

						return sheet.collect(root)
					}
				};

				return ctx.renderPage(fn as any)
			},
		});

		return {
			...initialProps,
			styles: (<>
				{sheet.getStyleElement()}
				{initialProps.styles}
			</>),
		}
	}

	newDocument.getInitialProps = getInitialProps;

	return newDocument
}

export default extendNextDocumentWithMui
