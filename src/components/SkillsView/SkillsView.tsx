import React, { memo } from 'react';
import cn from 'clsx';
import { useMySkills } from './useMySkills';
import { SkillView } from '../SkillView';
import s from './SkillsView.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const SkillsView = memo<Props>(({ className }) => {
  const skills = useMySkills();
  return (
    <div className={cn(s.root, className)}>
      {skills.map((skill) => (
        <SkillView name={skill.name} key={skill.id} />
      ))}
    </div>
  );
});
