/**
 * Created by user on 2020/1/16.
 */

import { crlf, R_CRLF, LF } from 'crlf-normalize';
import { createElement, Fragment } from 'preact';

export type IPropLike<T = any> = {
	children: T
} | {
	children?: T
}

export type IWarpPropLike<T> = (T | {
	children?: string
}) & {
	/**
	 * not convert linebreak to <br/>
	 */
	noBR?: boolean,
	onlyBR?: boolean,
}

export function createLinkBreak<P extends IPropLike, N>(createElement: (...argv) => N, Fragment)
{
	return <T extends IWarpPropLike<P> = IWarpPropLike<P>, V extends N = N>({
		children,
		noBR,
		onlyBR,
		...props
	}: T) =>
	{
		if (typeof children !== 'string')
		{
			throw new TypeError(`current only support string`)
		}

		if (noBR)
		{
			children = crlf(children);
		}
		else
		{
			let i = 0;

			let lines = children.split(R_CRLF);

			let end = lines.pop();

			children = lines.reduce((a, v) => {

				a.push(createElement(Fragment, {
					key: i++
				}, v));
				a.push(createElement('br', {
					key: i++
				}));
				!onlyBR && a.push(createElement(Fragment, {
					key: i++
				}, LF));

				return a
			}, []).concat([createElement(Fragment, null, end)]) as any
		}

		return createElement(Fragment, props, children)
	}
}

export function createBR<N>(createElement: (...argv) => N, Fragment)
{
	return ({
		key,
		ref,
		...props
	} : {
		key?,
		ref?,
	}) => createElement(Fragment, {
		key,
		ref,
	}, [
		createElement('br', props, null),
		createElement(Fragment, null, LF),
	]);
}

export default createLinkBreak
