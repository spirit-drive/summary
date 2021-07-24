import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Head } from './Head';
import i18n from './i18n';
import { Layout } from './components/Layout';
import { Base } from './components/Base';
import { Main } from './main';

export const App: React.FC = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Head />
      <Layout>
        <Base>
          <Main />
        </Base>
      </Layout>
    </I18nextProvider>
  </BrowserRouter>
);
