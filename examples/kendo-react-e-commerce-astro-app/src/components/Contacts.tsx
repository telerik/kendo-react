import React from 'react';
import { Layout } from '../components/Layout';
import EmailInput from '../components/EmailInput';
import CardHolder from '../components/CardHolder';
import CityInput from '../components/CityInput';
import PhoneInput from '../components/PhoneInput';
import AppointmentInput from '../components/AppointmentInput';
import DateChooserInput from '../components/DateChooserInput';
import ContactsRadioButtons from '../components/ContactsRadioButtons';
import { Button } from '@progress/kendo-react-buttons';

import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';

const Contacts: React.FC = () => {
  const onSubmitClick = () => {
    window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/thankyou";
  };

  return (
    <Layout>
      <div className="k-d-flex k-flex-col k-align-items-center k-py-12 k-px-4 k-gap-10">
        <div className="k-d-grid k-grid-cols-12 k-gap-8 k-w-full">
          <div className="k-col-span-6 k-col-start-1">
            <h1>Get in touch</h1>
            <p>If you have any questions, contact us</p>
            <Form
              render={() => (
                <FormElement>
                  <div className="k-form-layout k-d-grid k-gap-y-6 k-gap-x-4">
                    <FieldWrapper className="k-col-span-1">
                      <Label> Full Name </Label>
                      <Field name="fullName" component={CardHolder} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Label> Email </Label>
                      <Field name="email" component={EmailInput} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Label> Phone Number </Label>
                      <Field name="phoneNumber" component={PhoneInput} />
                    </FieldWrapper>
                    <div className="k-d-flex k-flex-col k-align-items-start k-gap-4">
                      <p>Type of customer</p>
                      <ContactsRadioButtons />
                    </div>
                    <FieldWrapper className="k-col-span-1">
                      <Field name="city" component={CityInput} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Field name="appointment" component={AppointmentInput} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Label> Date </Label>
                      <Field name="date" component={DateChooserInput} />
                    </FieldWrapper>
                  </div>
                </FormElement>
              )}
            />
            <Button
              className="k-mt-6"
              onClick={onSubmitClick}
              themeColor={'primary'}
            >
              Book a Slot
            </Button>
          </div>
          <div className="k-col-span-5 k-col-start-8 k-d-flex k-flex-col k-align-items-start">
            <img
              src="/kendo-react/kendo-react-e-commerce-astro-app/contactsImage.png"
              alt="Contacts"
              style={{
                maxWidth: '630px',
                maxHeight: '580px',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;