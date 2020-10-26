import React, { Suspense, ExoticComponent, SuspenseProps, ReactNode } from 'react';

export interface ISuspenseProps extends Omit<SuspenseProps, 'fallback'>
{
	/**
	 * A fallback react tree to show when a Suspense child (like React.lazy) suspends
	 */
	fallback?: SuspenseProps["fallback"];
	/**
	 * content for ssr render
	 */
	content?: NonNullable<ReactNode> | null;
}

// @ts-ignore
export const ReactSuspense: ExoticComponent<ISuspenseProps> = ({
	fallback,
	content,
	...prop
}) =>
{
	fallback ??= <>Loading</>

	if (typeof window === 'undefined')
	{
		return content ?? fallback
	}

	return <Suspense {...prop} fallback={fallback} />
}

export default ReactSuspense
