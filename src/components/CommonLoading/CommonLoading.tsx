import React, { memo } from 'react';
import cn from 'clsx';
import s from './CommonLoading.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const CommonLoading = memo<Props>(({ className }) => <div className={cn(s.root, className)}>Loading...</div>);
