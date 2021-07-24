import React, { memo } from 'react';
import cn from 'clsx';
import { Header } from '../Header';
import s from './Layout.sass';

export type Props = {
  className?: string;
  children?: React.ReactNode | React.ReactChildren;
};

export const Layout = memo<Props>(({ className, children }) => (
  <div className={cn(s.root, className)}>
    <Header />
    {children}
  </div>
));
