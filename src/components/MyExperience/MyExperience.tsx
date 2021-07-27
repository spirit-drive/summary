import React, { memo } from 'react';
import cn from 'clsx';
import { Title } from './Title';
import s from './MyExperience.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const MyExperience = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <Title className={s.title} />
    MyExperience
  </div>
));

export default MyExperience;
