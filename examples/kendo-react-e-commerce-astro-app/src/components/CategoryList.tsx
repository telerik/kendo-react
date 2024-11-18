import React from 'react';
import { CategoryListProps, CardDescriptor } from '../data/types';
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

export const CategoryList: React.FC<CategoryListProps> = ({
  data,
  title,
  subtitle,
  colSpan = 4,
}) => {
  const language = useStore(selectedLanguage);
  const t = messages[language] || messages['en'];

  const onNavigate = (card: CardDescriptor) => {
    if (card.collectionText === t.collectionAurelia) {
      // Handle navigation
    }
  };

  return (
    <LocalizationProvider language={language}>
      <>
        <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-text-center">
          {title}
        </div>
        <div
          className="k-font-size-xl k-p-5 k-col-span-12 k-text-center"
          style={{
            paddingBottom: '1rem',
          }}
        >
          {subtitle}
        </div>
        <div className="k-d-grid k-grid-cols-12 k-col-span-12 k-gap-5">
          {data.map((card, index) => {
            return (
              <div
                key={index}
                className={`k-col-span-${colSpan} k-text-center`}
              >
                <img
                  height={'319px'}
                  width={'100%'}
                  style={{
                    minWidth: '360px',
                    paddingBottom: '1rem',
                  }}
                  src={card.img}
                  alt={t[card.collectionTextKey] || card.collectionText}
                />
                <span className="k-pt-md">
                  {t[card.collectionTextKey] || card.collectionText}
                </span>
                <div
                  style={{
                    paddingTop: '1rem',
                  }}
                >
                  <Button
                    themeColor={'primary'}
                    size={'large'}
                    onClick={() => onNavigate(card)}
                  >
                    {t.buyNowButtonText || 'Buy Now'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </LocalizationProvider>
  );
};

export default CategoryList;
