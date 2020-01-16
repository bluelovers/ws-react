# README.md

    Break a string to lines at newlines, and either wrap each line by a configurable wrapper or append a <br /> to each line.

## install

```bash
yarn-tool add jsx-linebreak preact
yarn-tool add jsx-linebreak react
```

for preact / react
========================

```typescript jsx
import LinkBreak from 'jsx-linebreak/preact'; // for preact
import LinkBreak from 'jsx-linebreak/react'; // for react
```

for any other u want use
========================

```typescript jsx
import createLinkBreak from 'jsx-linebreak';
import PReact, { createElement, Fragment, ClassAttributes } from 'preact';

export const LinkBreak = createLinkBreak(createElement, Fragment);

export default LinkBreak
```

demo
====

```typescript jsx
import React, { h, Fragment } from 'preact';
import render from 'preact-render-to-string';
import LinkBreak from 'jsx-linebreak/preact';
import { deepStrictEqual } from 'assert';

const A = (props) => <>{props.children}</>;

let i = 0;

let s = render(<>
	<A key={i++} />

	<LinkBreak>{`
1
2
3
4`}</LinkBreak>

	<LinkBreak onlyBR>{`
1
2
3
4`}</LinkBreak>

	<LinkBreak noBR>{`
1
2
3
4`}</LinkBreak>
</>);

console.dir(s);

deepStrictEqual(s, `<br />\n1<br />\n2<br />\n3<br />\n4<br />1<br />2<br />3<br />4\n1\n2\n3\n4`);
```
