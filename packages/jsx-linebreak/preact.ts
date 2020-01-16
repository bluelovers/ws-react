import createLinkBreak, { createBR } from './index';
import PReact, { createElement, Fragment, ClassAttributes } from 'preact';

export const LinkBreak = createLinkBreak(createElement, Fragment);

export const BR = createBR(createElement, Fragment);

export default LinkBreak
