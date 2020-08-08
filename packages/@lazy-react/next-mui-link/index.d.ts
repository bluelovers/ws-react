import { RefAttributes, ForwardRefExoticComponent, PropsWithoutRef } from 'react';
import { LinkProps } from 'next/link';
import { OverridableComponent, DefaultComponentProps } from '@material-ui/core/OverridableComponent';
import { LinkTypeMap } from '@material-ui/core/Link/Link';
export declare type INextMuiLinkProps = DefaultComponentProps<LinkTypeMap<LinkProps>>;
export declare const NextMuiLinkWithoutRef: ({ href, as, passHref, prefetch, replace, scroll, shallow, ...props }: INextMuiLinkProps) => JSX.Element;
export declare const NextMuiLink: ForwardRefExoticComponent<PropsWithoutRef<INextMuiLinkProps> & RefAttributes<OverridableComponent<LinkTypeMap>>>;
export default NextMuiLink;
