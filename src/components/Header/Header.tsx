import React, { memo } from 'react';
import cn from 'clsx';
import { Avatar } from '../Avatar';
import { MeTitle } from '../MeTitle';
import s from './Header.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Header = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <Avatar />
    <MeTitle className={s.title} />
  </div>
));
