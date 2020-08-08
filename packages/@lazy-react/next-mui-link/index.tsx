import React, { PropsWithChildren, ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';
import MuiLink from '@material-ui/core/Link';
import { OverridableComponent, DefaultComponentProps, OverrideProps } from '@material-ui/core/OverridableComponent';
import { LinkTypeMap } from '@material-ui/core/Link/Link';

export const NextMuiLink = ({
	children,

	href,
	as,
	passHref,
	prefetch,
	replace,
	scroll,
	shallow,

	...props
}: DefaultComponentProps<LinkTypeMap<LinkProps>>) =>
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
		<MuiLink {...props}>
			{children}
		</MuiLink>
	</NextLink>
}

export default NextMuiLink
