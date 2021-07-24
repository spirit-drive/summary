import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Head } from './Head';
import { Navigation } from './navigation/Navigation';
import i18n from './i18n';

export const App: React.FC = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Head />
      <Navigation />
    </I18nextProvider>
  </BrowserRouter>
);
