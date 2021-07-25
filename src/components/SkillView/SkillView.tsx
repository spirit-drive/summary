import React, { memo } from 'react';
import cn from 'clsx';
import { Skill } from '../SkillsView/types';
import s from './SkillView.sass';

export type Props = Omit<Skill, 'id'> & {
  className?: string;
  children?: never;
};

export const SkillView = memo<Props>(({ className, name }) => <div className={cn(s.root, className)}>{name}</div>);
