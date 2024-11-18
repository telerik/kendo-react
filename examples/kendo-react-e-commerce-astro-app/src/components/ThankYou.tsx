import React from 'react';
import { Layout } from '../components/Layout';
import { BackgroundImage } from '../components/BackgroundImage';
import { Button } from '@progress/kendo-react-buttons';

import { useStore } from '@nanostores/react';
import { selectedLanguage } from '../helpers/languageStore';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import enMessages from '../data/messages/en';
import frMessages from '../data/messages/fr';
import esMessages from '../data/messages/es';

loadMessages(enMessages, 'en');
loadMessages(frMessages, 'fr');
loadMessages(esMessages, 'es');

const messages = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const ThankYou: React.FC = () => {
  const language = useStore(selectedLanguage);
  const t = messages[language];

  const onBacktoShoppingClick = () => {
    window.location.href = '/kendo-react/kendo-react-e-commerce-astro-app/products';
  };

  return (
    <LocalizationProvider language={language}>
      <>
        <BackgroundImage
          img="/kendo-react/kendo-react-e-commerce-astro-app/present.png"
          title={t.thankYouTitle}
          subtitle={t.thankYouSubtitle}
        />
        <Layout>
          <div className="k-d-flex k-flex-col k-justify-content-center k-align-items-center k-h-100 k-text-center">
            <h1>{t.thankYouTitle}</h1>
            <p>{t.thankYouSubtitle}</p>
            <Button
              className="k-mt-6"
              onClick={onBacktoShoppingClick}
              themeColor="primary"
              size="large"
            >
              {t.backToShoppingButton}
            </Button>
          </div>
        </Layout>
      </>
    </LocalizationProvider>
  );
};

export default ThankYou;
