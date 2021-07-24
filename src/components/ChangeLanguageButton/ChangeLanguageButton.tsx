import React, { memo, useCallback, useMemo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { RuIcon } from './RuIcon';
import { UsaIcon } from './UsaIcon';
import s from './ChangeLanguageButton.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const ChangeLanguageButton = memo<Props>(({ className }) => {
  const { i18n, t } = useTranslation();

  const onClick = useCallback((): void => {
    switch (i18n.language) {
      case 'ru':
        i18n.changeLanguage('en');
        break;

      case 'en':
        i18n.changeLanguage('ru');
        break;

      default:
        message.error(t('errors.unexpectedError'));
    }
  }, [i18n, t]);

  const content = useMemo(() => {
    switch (i18n.language) {
      case 'ru':
        return <UsaIcon className={s.icon} />;

      case 'en':
        return <RuIcon className={s.icon} />;

      default:
        message.error(t('errors.unexpectedError'));
        return null;
    }
  }, [i18n.language, t]);

  return (
    <button onClick={onClick} type="button" className={cn(s.root, className)}>
      {content}
    </button>
  );
});
