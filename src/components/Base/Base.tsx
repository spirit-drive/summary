import React, { memo } from 'react';
import cn from 'clsx';
import s from './Base.sass';

export type Props = {
  className?: string;
  children?: React.ReactChildren | React.ReactNode;
};

export const Base = memo<Props>(({ className, children }) => (
  <div className={cn(s.root, className)}>
    <div className={s.base}>{children}</div>
  </div>
));
