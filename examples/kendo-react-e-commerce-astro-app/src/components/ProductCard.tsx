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
        className="product-card"
      >
        <div
          className="product-card__image"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
          role="img"
          aria-label={props.title}
        ></div>

        <div className="product-card__details">
          <Breadcrumb data={props.breadCrumbItem}></Breadcrumb>

          <div className="product-card__heading">
            <span className="product-card__title">
              {t[props.title] || props.title}
            </span>
            <div className="product-card__subtitle">
              {t[props.subtitle] || props.subtitle}
            </div>
            <span className="product-card__rating">
              <Rating value={props.rating}></Rating>
              <span className="product-card__reviews">
                {t.reviewsText.replace('{0}', props.reviews) || `${props.reviews} reviews`}
              </span>
            </span>

            <div
              className="product-card__price"
            >
              {`$${props.price}`}
            </div>
          </div>

          <div className="product-card__description">
            {t[props.description] || props.description}
          </div>
          <div className="product-card__actions">
            <NumericTextBox
              spinners={true}
              aria-label="Quantity"
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
