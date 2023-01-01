import { AppContext } from 'next/app';
import { NextPageContext } from 'next';
import { DocumentContext } from 'next/document';
export declare function getNextHost<T extends AppContext | DocumentContext | NextPageContext>(_ctx: T): {
    secure: boolean;
    origin: string;
    hostname: string;
    host: string;
};
export default getNextHost;
