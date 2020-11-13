import { PropsWithChildren } from 'react';
import Document from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { NextComponentType, RenderPageResult } from 'next/dist/next-server/lib/utils';
export declare function extendNextDocumentWithMui(options?: {
    newDocument?: typeof Document;
    Document?: typeof Document;
    muiTheme?: Theme;
    sheet?: ServerStyleSheets;
    renderPage?(App: NextComponentType, props: PropsWithChildren<{}>, runtime: {
        muiTheme: Theme;
        sheet: ServerStyleSheets;
    }): RenderPageResult;
}): typeof Document;
export default extendNextDocumentWithMui;
