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
        <div className="category-list__title">
          {title}
        </div>
        <div
          className="category-list__subtitle"
        >
          {subtitle}
        </div>
        <div className="category-list__grid">
          {data.map((card, index) => {
            return (
              <div
                key={index}
                className="category-list__item"
                style={{ '--category-columns': colSpan } as React.CSSProperties}
              >
                <img
                  height={'319px'}
                  src={card.img}
                  alt={t[card.collectionTextKey] || card.collectionText}
                />
                <span className="category-list__label">
                  {t[card.collectionTextKey] || card.collectionText}
                </span>
                <div className="category-list__action">
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
