import { PropsWithChildren } from 'react';
import Document from 'next/document';
import { NextComponentType, RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheet } from 'styled-components';
export declare function extendNextDocumentWithStyledComponents(options?: {
    newDocument?: typeof Document;
    Document?: typeof Document;
    sheet?: ServerStyleSheet;
    renderPage?(App: NextComponentType, props: PropsWithChildren<{}>, runtime: {
        sheet: ServerStyleSheet;
    }): RenderPageResult;
}): typeof Document;
export default extendNextDocumentWithStyledComponents;
