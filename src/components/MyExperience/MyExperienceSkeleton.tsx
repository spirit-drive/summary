import React, { memo } from 'react';
import cn from 'clsx';
import s from './MyExperience.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const MyExperienceSkeleton = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>MyExperienceSkeleton...</div>
));
