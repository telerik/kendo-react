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
      <section className="k-d-grid k-grid-cols-12 k-col-span-12 k-justify-content-center k-align-items-center k-gap-3">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`${props.layout === 'grid' ? 'k-col-span-4' : 'k-col-span-3'} k-text-center k-border k-border-primary k-gap-1 k-pb-5`}
            >
              {item.status ? (
                <BadgeContainer>
                  <div
                    className="k-d-flex k-justify-content-center k-align-items-center k-rounded-lg"
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
                      className="k-text-uppercase"
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
                  className="k-d-inline-block k-justify-content-center k-align-items-center k-rounded-lg"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    width: '278px',
                    height: '236px',
                  }}
                ></div>
              )}
              <div>
                <div className="k-pt-2">{t[item.title] || item.title}</div>
                <div className="k-d-flex k-justify-content-center k-gap-xl k-align-items-center k-pt-2">
                  <span>
                    {item.oldPrice && (
                      <span
                        className="k-text-line-through"
                        style={{
                          paddingRight: '8px',
                        }}
                      >{`$${item.oldPrice}`}</span>
                    )}
                    <span
                      style={{
                        color: 'red',
                      }}
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
