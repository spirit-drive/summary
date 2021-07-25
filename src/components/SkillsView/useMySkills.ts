import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Skill } from './types';

const skillKeys = [
  'js',
  'ts',
  'react',
  'stateManagers',
  'reactNative',
  'routing',
  'dnd',
  'webCommunication',
  'builders',
  'htmlCss',
  'testing',
  'git',
  'db',
  'node',
  'electron',
  'tensorflow',
  'design',
  'principles',
  'methods',
];

export const useMySkills = (): Skill[] => {
  const { t } = useTranslation();

  return useMemo(() => skillKeys.map((id) => ({ id, name: t(`mySkills.${id}.title`) })), [t]);
};
