import React, { memo } from 'react';
import cn from 'clsx';
import { Title } from './Title';
import { SkillsView } from '../SkillsView';
import s from './MySkills.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const MySkills = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <Title className={s.title} />
    <SkillsView />
  </div>
));

export default MySkills;
