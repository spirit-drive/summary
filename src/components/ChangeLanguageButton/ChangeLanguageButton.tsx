import React, { memo, useCallback, useRef, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { ChangeLanguageOriginButton } from './ChangeLanguageOriginButton';
import { useMovement } from '../../hooks/useMovement';

export type Props = {
  className?: string;
  children?: never;
};

const MAX_CLICK_TIME = 100;

export const ChangeLanguageButton = memo<Props>(({ className }) => {
  const { i18n, t } = useTranslation();
  const { style, onMouseDown, onTouchStart } = useMovement();

  const toggle = useCallback((): void => {
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

  const startClick = useRef<number>(0);
  const onMouseDownHandler = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      onMouseDown(e);
      startClick.current = Date.now();
    },
    [onMouseDown]
  );

  const onClick = useCallback(() => {
    const clickDuration = Date.now() - startClick.current;
    startClick.current = null;
    if (clickDuration > MAX_CLICK_TIME) return;
    toggle();
  }, [toggle]);

  return (
    <ChangeLanguageOriginButton
      style={style}
      onTouchStart={onTouchStart}
      onMouseDown={onMouseDownHandler}
      onClick={onClick}
      className={className}
    />
  );
});
