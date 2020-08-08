# README.md

    detect if the user has requested the system use a light or dark color theme.

## install

```bash
yarn add @lazy-react/prefers-light-mode
yarn-tool add @lazy-react/prefers-light-mode
yt add @lazy-react/prefers-light-mode
```

```typescript jsx
import React, { useState } from 'react'
import App, { Container } from 'next/app';
import PrefersLightMode from '@lazy-react/prefers-light-mode/component';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class MyApp extends App
{
	render()
	{
		const { Component, pageProps } = this.props;
		return (
			<React.StrictMode>
				<PrefersLightMode key="PrefersLightMode">
					<CssBaseline />
					<Component {...pageProps} />
				</PrefersLightMode>
			</React.StrictMode>
		)
	}
}
```
