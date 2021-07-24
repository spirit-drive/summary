import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import s from './MeTitle.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const MeTitle = memo<Props>(({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.root, className)}>
      <h1 className={s.name}>
        <div className={s.firstName}>{t('me.firstName')}</div>
        <div>{t('me.lastName')}</div>
      </h1>
      <div className={s.profession}>{t('me.profession')}</div>
    </div>
  );
});
