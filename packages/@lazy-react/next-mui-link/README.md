# README.md

    Using Next.js Link Component with Material UI

## install

```bash
yarn add @lazy-react/next-mui-link
yarn-tool add @lazy-react/next-mui-link
yt add @lazy-react/next-mui-link
```

```typescript jsx
const ListItem = ({ data }: Props) => (
	<NextMuiLink href="/users/[id]" as={`/users/${data.id}`}>
		<a>{data.id}: {data.name}</a>
	</NextMuiLink>
)
```

- https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/Link.js
- https://gist.github.com/herr-vogel/0b5d4f3c28f08dc6cc4a2fd4f7b4a4df
- 
