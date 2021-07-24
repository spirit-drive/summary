import React, { memo } from 'react';
import cn from 'clsx';
import s from './MySkills.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const MySkillsSkeleton = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>MySkillsSkeleton...</div>
));
