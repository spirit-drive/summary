import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import s from './Title.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Title = memo<Props>(({ className }) => {
  const { t } = useTranslation();
  return (
    <h2 className={cn(s.root, className)}>
      <h2>{t('mySkills.title')}</h2>
    </h2>
  );
});
