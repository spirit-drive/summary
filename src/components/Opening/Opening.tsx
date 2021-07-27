import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { GithubOutlined } from '@ant-design/icons';
import s from './Opening.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Opening = memo<Props>(({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.root, className)}>
      <div>{t('opening.main')}</div>
      <a className={s.link} href="https://github.com/spirit-drive/summary">
        <GithubOutlined className={s.icon} />
        {t('opening.github')}
      </a>
      <a
        className={s.link}
        href="https://pyatigorsk.hh.ru/applicant/resumes/view?resume=867c2d3cff05f23c9f0039ed1f693554614d36"
      >
        {t('opening.hh')}
      </a>
    </div>
  );
});
