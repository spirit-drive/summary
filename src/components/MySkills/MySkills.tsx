import React, { memo } from 'react';
import cn from 'clsx';
import { Title } from './Title';
import s from './MySkills.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const MySkills = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <Title />
  </div>
));

export default MySkills;
