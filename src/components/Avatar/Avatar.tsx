import React, { memo } from 'react';
import cn from 'clsx';
import avatar from '../../assets/avatar.jpg';
import avatar3x from '../../assets/avatar@3x.jpg';
import avatar2x from '../../assets/avatar@2x.jpg';
import s from './Avatar.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Avatar = memo<Props>(({ className }) => (
  <img src={avatar} alt="" srcSet={`${avatar3x} 3x, ${avatar2x} 2x`} loading="lazy" className={cn(s.root, className)} />
));
