import React, { Suspense, ExoticComponent, SuspenseProps } from 'react';

// @ts-ignore
export const ReactSuspense: ExoticComponent<SuspenseProps> = ({
	fallback,
	...prop
}) => {
	if (typeof window === 'undefined')
	{
		return fallback
	}

	return <Suspense {...prop} fallback={fallback}/>
}

export default ReactSuspense
