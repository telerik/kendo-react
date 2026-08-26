import React from 'react';
import { Layout } from "../components/Layout";
import CardNumber from "../components/CardNumber";
import ExpiryDate from "../components/ExpiryDate";
import PasswordInput from "../components/PasswordInput";
import CardHolder from "../components/CardHolder";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from 'react-router-dom';

import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import {
  RadioButton,
} from "@progress/kendo-react-inputs";
import {
  Label,
} from "@progress/kendo-react-labels";

import creditCards from '../assets/creditCards.png';
import { useLanguageContext } from "../helpers/LanguageContext";

const PaymentDetails: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguageContext();

  const onSubmitClick = () => {
    navigate("/thankyou")
  }

  return (
    <Layout>
      <div className="payment-details">
        <div className="payment-details__grid">
          <div className="payment-details__form">
            <h1>{t.paymentDetailsTitle}</h1>
            <p>{t.paymentDetailsSubtitle}</p>
            <div className="payment-details__methods">
              <div className="payment-details__method" style={{ width: '200px' }}>
                <RadioButton value="creditCard" label={t.paymentMethodCreditCard} />
              </div>
              <img src={creditCards} alt={t.cardNumberLabel} className="payment-details__cards" style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} />
              <div className="payment-details__method" style={{ width: '200px' }}>
                <RadioButton value="bankTransfer" label={t.paymentMethodBankTransfer} />
              </div>
              <div className="payment-details__method" style={{ width: '200px' }}>
                <RadioButton value="applePay" label={t.paymentMethodApplePay} />
              </div>
            </div>
            <Form
              render={() => (
                <FormElement>
                  <div className="payment-details__fields">
                    <FieldWrapper>
                      <Label> {t.cardNumberLabel} </Label>
                      <Field name="cardNumber" component={CardNumber} />
                    </FieldWrapper>
                    <div className="payment-details__field-row">
                      <FieldWrapper>
                        <Label> {t.expiryDateLabel} </Label>
                        <Field name="expiryDate" component={ExpiryDate} />
                      </FieldWrapper>
                      <FieldWrapper>
                        <Label> {t.cvvLabel} </Label>
                        <Field name="cvv" component={PasswordInput} />
                      </FieldWrapper>
                    </div>
                    <FieldWrapper>
                      <Label> {t.cardHolderLabel} </Label>
                      <Field name="cardHolder" component={CardHolder} />
                    </FieldWrapper>
                  </div>
                </FormElement>
              )}
            />
            <Button className="payment-details__submit" onClick={onSubmitClick} themeColor={"primary"}>{t.submitOrderButton}</Button>
          </div>
          <div className="payment-details__summary">
            <h2 className="payment-details__heading">{t.subTotalLabel}</h2>
            <p>{t.usDollarsLabel}</p>
            <h3 className="payment-details__subheading">{t.vatLabel}</h3>
            <p>{t.usDollarsLabel}</p>
            <h3 className="payment-details__subheading payment-details__subheading--spaced">{t.shippingMethodLabel}</h3>
            <p>{t.standardFreeDeliveryLabel}</p>
            <h3 className="payment-details__subheading payment-details__subheading--spaced">{t.giftWrappingLabel}</h3>
            <p>{t.includedGiftWrappingLabel}</p>
            <h3 className="payment-details__subheading payment-details__subheading--spaced">{t.totalLabel}</h3>
            <p>{t.usDollarsLabel}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDetails;
