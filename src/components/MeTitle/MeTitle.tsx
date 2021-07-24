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
      <div className={s.name}>
        <div className={s.firstName}>{t('me.firstName')}</div>
        <div>{t('me.lastName')}</div>
      </div>
      <div className={s.profession}>{t('me.profession')}</div>
    </div>
  );
});
