import React, { PropsWithChildren, ReactNode } from 'react';
import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document'
import { Enhancer, NextComponentType, RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheet } from 'styled-components'

export function extendNextDocumentWithStyledComponents(options?: {
	newDocument?: typeof Document,
	Document?: typeof Document,
	sheet?: ServerStyleSheet,

	renderPage?(App: NextComponentType, props: PropsWithChildren<{}>, runtime: {
		sheet: ServerStyleSheet,
	}): RenderPageResult
})
{
	const oldDocument = options?.Document ?? Document;
	const newDocument = options?.newDocument ?? (() => class newDocumentClass extends oldDocument {})();

	const getInitialPropsOld = oldDocument.getInitialProps;

	async function getInitialProps(ctx: DocumentContext)
	{
		const sheet = options?.sheet ?? new ServerStyleSheet();

		try
		{

			const initialProps = await getInitialPropsOld.call(oldDocument, {
				...ctx,
				renderPage()
				{
					const fn = (App) =>
					{
						return async (props) =>
						{
							const root = await options?.renderPage?.(App, props, {
								sheet,
							}) ?? (<App {...props} />);

							// @ts-ignore
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
		finally
		{
			sheet.seal();
		}
	}

	newDocument.getInitialProps = getInitialProps;

	return newDocument
}

export default extendNextDocumentWithStyledComponents
