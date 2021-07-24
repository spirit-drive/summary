import React, { memo, useMemo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { RuIcon } from './RuIcon';
import { UsaIcon } from './UsaIcon';
import s from './ChangeLanguageOriginButton.sass';

export type Props = React.HTMLAttributes<HTMLButtonElement>;

export const ChangeLanguageOriginButton = memo<Props>(({ className, ...props }) => {
  const { i18n, t } = useTranslation();

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
    <button type="button" {...props} className={cn(s.root, className)}>
      {content}
    </button>
  );
});
