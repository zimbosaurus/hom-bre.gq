import React, { PropsWithChildren } from 'react';
import { classNames, coreProps, ICoreProps as CoreProps } from './Common';
import './PaperStack.scss';

export default function PaperStack(props: PropsWithChildren<CoreProps>) {
  return (
    <div {...coreProps(props, 'paper-stack')}>{props.children}</div>
  )
}