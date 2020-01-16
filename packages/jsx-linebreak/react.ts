import createLinkBreak, { createBR } from './index';
import React, { createElement, Fragment, Props, ReactElement, ClassAttributes } from 'react';

export const LinkBreak = createLinkBreak<Props<any>, ReactElement>(createElement, Fragment);

export const BR = createBR(createElement, Fragment);

export default LinkBreak
