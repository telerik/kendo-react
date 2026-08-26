import React from 'react';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';
import { cartIcon } from '@progress/kendo-svg-icons';
import { CardListProps } from '../data/types';

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

export const CardsList: React.FC<CardListProps> = (props) => {
  const language = useStore(selectedLanguage);
  const t = messages[language] || messages['en'];

  const onButtonClick = (index: number) => {
    window.location.href = `/kendo-react/kendo-react-e-commerce-astro-app/product/${
      index + 1
    }`;
  };

  return (
    <LocalizationProvider language={language}>
      <section className="cards-list">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`cards-list__item cards-list__item--${props.layout}`}
            >
              {item.status ? (
                <BadgeContainer>
                  <div
                    className="cards-list__image"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      width: '278px',
                      height: '236px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {item.status && (
                    <Badge
                      themeColor="primary"
                      className="cards-list__status"
                      position={'inside'}
                      align={{
                        horizontal: 'start',
                        vertical: 'top',
                      }}
                      style={{zIndex: 1}}
                    >
                      {t.statuses[item.status] || item.status}
                    </Badge>
                  )}
                </BadgeContainer>
              ) : (
                <div
                  className="cards-list__image"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    width: '278px',
                    height: '236px',
                  }}
                ></div>
              )}
              <div>
                <div className="cards-list__title">{t[item.title] || item.title}</div>
                <div className="cards-list__actions">
                  <span>
                    {item.oldPrice && (
                      <span
                        className="cards-list__old-price"
                      >{`$${item.oldPrice}`}</span>
                    )}
                    <span
                      className="cards-list__price"
                    >{`$${item.newPrice}`}</span>
                  </span>
                  <span>
                    <Button
                      fillMode={'outline'}
                      svgIcon={cartIcon}
                      onClick={() => onButtonClick(index)}
                    >
                      {t.buyButtonText || 'Buy'}
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </LocalizationProvider>
  );
};

export default CardsList;
