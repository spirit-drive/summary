import * as React from 'react';
import { Helmet } from 'react-helmet';

export const defaultSetting = {
  titleTemplate: '%s - Игорь Звягин - Frontend Developer',
  defaultTitle: 'Игорь Звягин - Frontend Developer',
};

export const Head: React.FC = () => (
  <Helmet {...defaultSetting}>
    <html lang="ru" />
  </Helmet>
);
