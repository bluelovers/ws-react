import React, {
	PropsWithChildren,
	ReactNode,
	forwardRef,
	RefAttributes,
	ForwardRefExoticComponent,
	PropsWithoutRef,
} from 'react';
import NextLink, { LinkProps } from 'next/link';
import MuiLink from '@material-ui/core/Link';
import { OverridableComponent, DefaultComponentProps, OverrideProps } from '@material-ui/core/OverridableComponent';
import { LinkTypeMap } from '@material-ui/core/Link/Link';

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
