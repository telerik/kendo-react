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
      <div className="k-d-flex k-flex-col k-align-items-center k-py-12 k-px-4 k-gap-10">
        <div className="k-d-grid k-grid-cols-12 k-gap-8 k-w-full">
          <div className="k-col-span-6 k-col-start-1">
            <h1>{t.paymentDetailsTitle}</h1>
            <p>{t.paymentDetailsSubtitle}</p>
            <div className="k-d-flex k-flex-col k-align-items-start k-gap-4">
              <div className="k-display-flex k-align-items-center k-mb-4" style={{ width: '200px' }}>
                <RadioButton value="creditCard" label={t.paymentMethodCreditCard} />
              </div>
              <img src={creditCards} alt={t.cardNumberLabel} className="k-mb-4" style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} />
              <div className="k-display-flex k-align-items-center k-mb-4" style={{ width: '200px' }}>
                <RadioButton value="bankTransfer" label={t.paymentMethodBankTransfer} />
              </div>
              <div className="k-display-flex k-align-items-center k-mb-4" style={{ width: '200px' }}>
                <RadioButton value="applePay" label={t.paymentMethodApplePay} />
              </div>
            </div>
            <Form
              render={() => (
                <FormElement>
                  <div className="k-form-layout k-d-grid k-gap-y-6 k-gap-x-4">
                    <FieldWrapper className="k-col-span-1">
                      <Label> {t.cardNumberLabel} </Label>
                      <Field name="cardNumber" component={CardNumber} />
                    </FieldWrapper>
                    <div className="k-d-flex k-gap-4 k-w-full">
                      <FieldWrapper className="k-col-span-1 k-w-1/2">
                        <Label> {t.expiryDateLabel} </Label>
                        <Field name="expiryDate" component={ExpiryDate} />
                      </FieldWrapper>
                      <FieldWrapper className="k-col-span-1 k-w-1/2">
                        <Label> {t.cvvLabel} </Label>
                        <Field name="cvv" component={PasswordInput} />
                      </FieldWrapper>
                    </div>
                    <FieldWrapper className="k-col-span-1">
                      <Label> {t.cardHolderLabel} </Label>
                      <Field name="cardHolder" component={CardHolder} />
                    </FieldWrapper>
                  </div>
                </FormElement>
              )}
            />
            <Button className="k-mt-6" onClick={onSubmitClick} themeColor={"primary"}>{t.submitOrderButton}</Button>
          </div>
          <div className="k-col-span-5 k-col-start-8 k-d-flex k-flex-col k-align-items-start">
            <h2 className="k-mb-4">{t.subTotalLabel}</h2>
            <p>{t.usDollarsLabel}</p>
            <h3 className="k-mb-2">{t.vatLabel}</h3>
            <p>{t.usDollarsLabel}</p>
            <h3 className="k-mb-2 k-mt-4">{t.shippingMethodLabel}</h3>
            <p>{t.standardFreeDeliveryLabel}</p>
            <h3 className="k-mb-2 k-mt-4">{t.giftWrappingLabel}</h3>
            <p>{t.includedGiftWrappingLabel}</p>
            <h3 className="k-mb-2 k-mt-4">{t.totalLabel}</h3>
            <p>{t.usDollarsLabel}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDetails;
