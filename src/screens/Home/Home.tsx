import React, { memo } from 'react';
import cn from 'clsx';
import s from './Home.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Home = memo<Props>(({ className }) => <div className={cn(s.root, className)}>HOME1</div>);
