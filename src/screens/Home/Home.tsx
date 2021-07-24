import React, { memo, useCallback } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import s from './Home.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Home = memo<Props>(({ className }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = useCallback(
    (language: string): void => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );
  return (
    <div className={cn(s.root, className)}>
      {t('test')}
      <button type="button" onClick={(): void => changeLanguage('en')}>
        en
      </button>
      <button type="button" onClick={(): void => changeLanguage('ru')}>
        ru
      </button>
    </div>
  );
});
