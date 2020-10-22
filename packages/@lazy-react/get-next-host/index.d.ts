import { AppContext } from 'next/dist/pages/_app';
import { DocumentContext, NextPageContext } from 'next/dist/next-server/lib/utils';
export declare function getNextHost<T extends AppContext | DocumentContext | NextPageContext>(_ctx: T): {
    secure: boolean;
    origin: string;
    hostname: string;
    host: string;
};
export default getNextHost;
