import createLinkBreak from './index';
import PReact, { createElement, Fragment, ClassAttributes } from 'preact';

export const LinkBreak = createLinkBreak(createElement, Fragment);

export default LinkBreak
