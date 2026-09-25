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
      <div className="contacts">
        <div className="contacts__grid">
          <div className="contacts__form">
            <h1>{t.getInTouchTitle}</h1>
            <p>{t.getInTouchSubtitle}</p>
            <Form
              render={() => (
                <FormElement>
                  <div className="contacts__fields">
                    <FieldWrapper>
                      <Label>{t.fullNameLabel}</Label>
                      <Field name="fullName" component={CardHolder} />
                    </FieldWrapper>
                    <FieldWrapper>
                      <Label>{t.emailLabel}</Label>
                      <Field name="email" component={EmailInput} />
                    </FieldWrapper>
                    <FieldWrapper>
                      <Label>{t.phoneNumberLabel}</Label>
                      <Field name="phoneNumber" component={PhoneInput} />
                    </FieldWrapper>
                    <div className="contacts__customer-type">
                      <p>{t.typeOfCustomerLabel}</p>
                      <ContactsRadioButtons />
                    </div>
                    <FieldWrapper>
                      <Field name="city" component={CityInput} />
                    </FieldWrapper>
                    <FieldWrapper>
                      <Field name="appointment" component={AppointmentInput} />
                    </FieldWrapper>
                    <FieldWrapper>
                      <Label>{t.dateLabel}</Label>
                      <Field name="date" component={DateChooserInput} />
                    </FieldWrapper>
                  </div>
                </FormElement>
              )}
            />
            <Button
              className="contacts__submit"
              onClick={onSubmitClick}
              themeColor={'primary'}
            >
              {t.bookSlotButton}
            </Button>
          </div>
          <div className="contacts__image">
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
