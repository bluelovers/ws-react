import createLinkBreak from './index';
import React, { createElement, Fragment, Props, ReactElement, ClassAttributes } from 'react';

export const LinkBreak = createLinkBreak<Props<any>, ReactElement>(createElement, Fragment);

export default LinkBreak
