import React from 'react';
import { Layout } from '../components/Layout';
import CardNumber from '../components/CardNumber';
import ExpiryDate from '../components/ExpiryDate';
import PasswordInput from '../components/PasswordInput';
import CardHolder from '../components/CardHolder';
import { Button } from '@progress/kendo-react-buttons';

import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from '@progress/kendo-react-form';
import { RadioButton } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

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

const PaymentDetails: React.FC = () => {
  const language = useStore(selectedLanguage);
  const t = messages[language] || messages['en'];

  const onSubmitClick = () => {
    window.location.href =
      "/kendo-react/kendo-react-e-commerce-astro-app/thankyou";
  };

  return (
    <LocalizationProvider language={language}>
      <Layout>
        <div className="payment-details__content">
          <div className="payment-details__grid">
            <div className="payment-details__form">
              <h1>{t.paymentDetailsTitle}</h1>
              <p>{t.paymentDetailsSubtitle}</p>
              <div className="payment-details__options">
                <div
                  className="payment-details__method"
                >
                  <RadioButton value="creditCard" label={t.paymentMethodCreditCard} />
                </div>
                <img
                  src="/kendo-react/kendo-react-e-commerce-astro-app/creditCards.png"
                  alt={t.creditCardOptionsAlt}
                  className="payment-details__card-image"
                />
                <div
                  className="payment-details__method"
                >
                  <RadioButton value="bankTransfer" label={t.paymentMethodBankTransfer} />
                </div>
                <div
                  className="payment-details__method"
                >
                  <RadioButton value="applePay" label={t.paymentMethodApplePay} />
                </div>
              </div>
              <Form
                render={() => (
                  <FormElement>
                    <div className="k-form-layout payment-details__form-grid">
                      <FieldWrapper>
                        <Label>{t.cardNumberLabel}</Label>
                        <Field name="cardNumber" component={CardNumber} />
                      </FieldWrapper>
                      <div className="payment-details__row">
                        <FieldWrapper>
                          <Label>{t.expiryDateLabel}</Label>
                          <Field name="expiryDate" component={ExpiryDate} />
                        </FieldWrapper>
                        <FieldWrapper>
                          <Label>{t.cvvLabel}</Label>
                          <Field name="cvv" component={PasswordInput} />
                        </FieldWrapper>
                      </div>
                      <FieldWrapper>
                        <Label>{t.cardHolderLabel}</Label>
                        <Field name="cardHolder" component={CardHolder} />
                      </FieldWrapper>
                    </div>
                  </FormElement>
                )}
              />
              <Button
                className="payment-details__submit"
                onClick={onSubmitClick}
                themeColor="primary"
              >
                {t.submitOrderButton}
              </Button>
            </div>
            <div className="payment-details__summary">
              <h2>{t.subTotalLabel}</h2>
              <p>{t.usDollarsLabel}</p>
              <h3>{t.vatLabel}</h3>
              <p>{t.usDollarsLabel}</p>
              <h3>{t.shippingMethodLabel}</h3>
              <p>{t.standardFreeDeliveryLabel}</p>
              <h3>{t.giftWrappingLabel}</h3>
              <p>{t.includedGiftWrappingLabel}</p>
              <h3>{t.totalLabel}</h3>
              <p>{t.usDollarsLabel}</p>
            </div>
          </div>
        </div>
      </Layout>
    </LocalizationProvider>
  );
};

export default PaymentDetails;
