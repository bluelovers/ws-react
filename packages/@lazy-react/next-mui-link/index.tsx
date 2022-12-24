import React, {
	PropsWithChildren,
	ReactNode,
	forwardRef,
	RefAttributes,
	ForwardRefExoticComponent,
	PropsWithoutRef,
} from 'react';
import NextLink, { LinkProps } from 'next/link';
import MuiLink, { LinkTypeMap } from '@mui/material/Link';
import { OverridableComponent, DefaultComponentProps, OverrideProps } from '@mui/types';

export type INextMuiLinkProps = DefaultComponentProps<LinkTypeMap<LinkProps>>;

export const NextMuiLinkWithoutRef = ({

	href,
	as,
	passHref,
	prefetch,
	replace,
	scroll,
	shallow,

	...props
}: INextMuiLinkProps) =>
{
	passHref = passHref ?? true;

	return <NextLink {...{
		href,
		as,
		passHref,
		prefetch,
		replace,
		scroll,
		shallow,
	}}>
		<MuiLink {...props}/>
	</NextLink>
}

// @ts-ignore
export const NextMuiLink: ForwardRefExoticComponent<PropsWithoutRef<INextMuiLinkProps> & RefAttributes<OverridableComponent<LinkTypeMap>>> = forwardRef<OverridableComponent<LinkTypeMap>, INextMuiLinkProps>((props: INextMuiLinkProps, ref) => <NextMuiLinkWithoutRef {...props} ref={ref}/>);

export default NextMuiLink
