import React, { memo, Suspense, lazy } from 'react';
import cn from 'clsx';
import { MySkillsSkeleton } from '../../components/MySkills';
import s from './Home.sass';

const MySkills = lazy(() => import('../../components/MySkills'));

export type Props = {
  className?: string;
  children?: never;
};

const mySkillsFallback = <MySkillsSkeleton />;

const Home = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <Suspense fallback={mySkillsFallback}>
      <MySkills />
    </Suspense>
  </div>
));

export default Home;
