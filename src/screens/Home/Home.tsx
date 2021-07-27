import React, { memo, Suspense, lazy } from 'react';
import cn from 'clsx';
import { MySkillsSkeleton } from '../../components/MySkills';
import { Opening } from '../../components/Opening';
import s from './Home.sass';

const MySkills = lazy(() => import('../../components/MySkills'));

export type Props = {
  className?: string;
  children?: never;
};

const mySkillsFallback = <MySkillsSkeleton />;

const Home = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <Opening />
    <Suspense fallback={mySkillsFallback}>
      <MySkills className={s.block} />
    </Suspense>
  </div>
));

export default Home;
