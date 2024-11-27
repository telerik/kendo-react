import React from 'react';
import { Layout } from '../components/Layout';
import EmailInput from '../components/EmailInput';
import CardHolder from '../components/CardHolder';
import CityInput from '../components/CityInput';
import PhoneInput from '../components/PhoneInput';
import AppointmentInput from '../components/AppointmentInput';
import DateChooserInput from '../components/DateChooserInput';
import ContactsRadioButtons from '../components/ContactsRadioButtons';
import contactsImage from '@/assets/contactsImage.png';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';

import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { useLanguageContext } from '../helpers/LanguageContext';

const Contacts: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguageContext();

  const onSubmitClick = () => {
    navigate('/thankyou');
  };

  return (
    <Layout>
      <div className="k-d-flex k-flex-col k-align-items-center k-py-12 k-px-4 k-gap-10">
        <div className="k-d-grid k-grid-cols-12 k-gap-8 k-w-full">
          <div className="k-col-span-6 k-col-start-1">
            <h1>{t.getInTouchTitle}</h1>
            <p>{t.getInTouchSubtitle}</p>
            <Form
              render={() => (
                <FormElement>
                  <div className="k-form-layout k-d-grid k-gap-y-6 k-gap-x-4">
                    <FieldWrapper className="k-col-span-1">
                      <Label>{t.fullNameLabel}</Label>
                      <Field name="fullName" component={CardHolder} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Label>{t.emailLabel}</Label>
                      <Field name="email" component={EmailInput} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Label>{t.phoneNumberLabel}</Label>
                      <Field name="phoneNumber" component={PhoneInput} />
                    </FieldWrapper>
                    <div className="k-d-flex k-flex-col k-align-items-start k-gap-4">
                      <p>{t.typeOfCustomerLabel}</p>
                      <ContactsRadioButtons />
                    </div>
                    <FieldWrapper className="k-col-span-1">
                      <Field name="city" component={CityInput} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Field name="appointment" component={AppointmentInput} />
                    </FieldWrapper>
                    <FieldWrapper className="k-col-span-1">
                      <Label>{t.dateLabel}</Label>
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
              {t.bookSlotButton}
            </Button>
          </div>
          <div className="k-col-span-5 k-col-start-8 k-d-flex k-flex-col k-align-items-start">
            <img
              src={contactsImage}
              alt={t.contactsImageAlt}
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
