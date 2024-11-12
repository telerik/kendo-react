import React from 'react';
import { Layout } from "@/components/Layout";
import CardNumber from "@/components/CardNumber";
import ExpiryDate from "@/components/ExpiryDate";
import PasswordInput from "@/components/PasswordInput";
import CardHolder from "@/components/CardHolder";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from 'react-router-dom';

import {
  Form,
  Field,
  FormElement,
  FormRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";
import {
  RadioButton,
} from "@progress/kendo-react-inputs";
import {
  Label,
} from "@progress/kendo-react-labels";

import creditCards from '../assets/creditCards.png';

const PaymentDetails: React.FC = () => {
  const navigate = useNavigate();

  const onSubmitClick = () => {
    navigate("/thankyou")
  }

  return (
    <Layout>
      <div className="k-d-flex k-flex-col k-align-items-center k-py-12 k-px-4 k-gap-10">
        <div className="k-d-grid k-grid-cols-12 k-gap-8 k-w-full">
          <div className="k-col-span-6 k-col-start-1">
            <h1>Payment Details</h1>
            <p>Please, submit your payment details</p>
            <div className="k-d-flex k-flex-col k-align-items-start k-gap-4">
              <div className="k-display-flex k-align-items-center k-mb-4" style={{ width: '200px' }}>
                <RadioButton value="creditCard" label="Credit Card" />
              </div>
              <img src={creditCards} alt="Credit card options" className="k-mb-4" style={{ width: 'auto', height: 'auto', maxWidth: '100%' }} />
              <div className="k-display-flex k-align-items-center k-mb-4" style={{ width: '200px' }}>
                <RadioButton value="bankTransfer" label="Bank Transfer" />
              </div>
              <div className="k-display-flex k-align-items-center k-mb-4" style={{ width: '200px' }}>
                <RadioButton value="applePay" label="Apple Pay" />
              </div>
            </div>
            <Form
              render={(formRenderProps: FormRenderProps) => (
                <FormElement>
                  <div className="k-form-layout k-d-grid k-gap-y-6 k-gap-x-4">
                    <FieldWrapper className="k-col-span-1">
                      <Label> Card Number </Label>
                      <Field name="cardNumber" component={CardNumber} />
                    </FieldWrapper>
                    <div className="k-d-flex k-gap-4 k-w-full">
                      <FieldWrapper className="k-col-span-1 k-w-1/2">
                        <Label> Expiry Date </Label>
                        <Field name="expiryDate" component={ExpiryDate} />
                      </FieldWrapper>
                      <FieldWrapper className="k-col-span-1 k-w-1/2">
                        <Label> CVV* </Label>
                        <Field name="cvv" component={PasswordInput} />
                      </FieldWrapper>
                    </div>
                    <FieldWrapper className="k-col-span-1">
                      <Label> Cardholder </Label>
                      <Field name="cardHolder" component={CardHolder} />
                    </FieldWrapper>
                  </div>
                </FormElement>
              )}
            />
            <Button className="k-mt-6" onClick={onSubmitClick}>Submit Order</Button>
          </div>
          <div className="k-col-span-5 k-col-start-8 k-d-flex k-flex-col k-align-items-start">
            <h2 className="k-mb-4">Sub total</h2>
            <p>US Dollars</p>
            <h3 className="k-mb-2">VAT</h3>
            <p>US Dollars</p>
            <h3 className="k-mb-2 k-mt-4">Shipping Method</h3>
            <p>Standard Free Delivery</p>
            <h3 className="k-mb-2 k-mt-4">Gift Wrapping</h3>
            <p>Included Gift Wrapping</p>
            <h3 className="k-mb-2 k-mt-4">Total</h3>
            <p>US Dollars</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDetails;
