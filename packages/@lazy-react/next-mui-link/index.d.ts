/// <reference types="react" />
import { LinkProps } from 'next/link';
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent';
import { LinkTypeMap } from '@material-ui/core/Link/Link';
export declare const NextMuiLink: ({ children, href, as, passHref, prefetch, replace, scroll, shallow, ...props }: DefaultComponentProps<LinkTypeMap<LinkProps>>) => JSX.Element;
export default NextMuiLink;
