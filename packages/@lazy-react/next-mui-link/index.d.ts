import { RefAttributes, ForwardRefExoticComponent, PropsWithoutRef } from 'react';
import { LinkProps } from 'next/link';
import { LinkTypeMap } from '@mui/material/Link';
import { OverridableComponent, DefaultComponentProps } from '@mui/types';
export type INextMuiLinkProps = DefaultComponentProps<LinkTypeMap<LinkProps>>;
export declare const NextMuiLinkWithoutRef: ({ href, as, passHref, prefetch, replace, scroll, shallow, ...props }: INextMuiLinkProps) => JSX.Element;
export declare const NextMuiLink: ForwardRefExoticComponent<PropsWithoutRef<INextMuiLinkProps> & RefAttributes<OverridableComponent<LinkTypeMap>>>;
export default NextMuiLink;
