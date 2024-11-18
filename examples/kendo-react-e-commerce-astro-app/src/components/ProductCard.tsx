import React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { ProductCardProps } from '../data/types';
import { NumericTextBox, Rating } from '@progress/kendo-react-inputs';
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

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const language = useStore(selectedLanguage);
  const t = messages[language] || messages['en'];

  return (
    <LocalizationProvider language={language}>
      <section
        className="k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center k-col-span-12 k-gap-2"
        style={{
          paddingTop: '60px',
        }}
      >
        <div
          className="k-rounded-lg k-col-span-5"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            height: '385px',
            width: '476px',
          }}
        ></div>

        <div className="k-col-span-7 k-h-full">
          <Breadcrumb data={props.breadCrumbItem}></Breadcrumb>

          <div className="k-d-grid k-gap-6">
            <span className="k-h2 k-text-black k-font-bold">
              {t[props.title] || props.title}
            </span>
            <div className="k-font-size-xl">
              {t[props.subtitle] || props.subtitle}
            </div>
            <span className="k-d-flex k-align-items-center">
              <Rating value={props.rating}></Rating>
              <span
                style={{
                  color: 'red',
                }}
              >
                {t.reviewsText.replace('{0}', props.reviews) || `${props.reviews} reviews`}
              </span>
            </span>

            <div
              className="k-font-size-xl"
              style={{
                color: 'red',
              }}
            >
              {`$${props.price}`}
            </div>
          </div>

          <div className="k-font-size-sm k-pt-6">
            {t[props.description] || props.description}
          </div>
          <div className="k-d-flex k-gap-3 k-pt-6">
            <NumericTextBox
              spinners={true}
              style={{
                width: '84px',
              }}
              value={1}
            ></NumericTextBox>
            <Button themeColor={'primary'} onClick={props.addToCart}>
              {t.addToCartButtonText || 'Add to Cart'}
            </Button>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default ProductCard;
