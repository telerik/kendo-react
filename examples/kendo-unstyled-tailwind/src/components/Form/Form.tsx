import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon, UnstyledContext } from '@progress/kendo-react-common';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import {
  Field,
  FieldWrapper,
  Form,
  FormElement,
  type FieldRenderProps,
  type FormRenderProps,
} from '@progress/kendo-react-form';
import {
  Input,
  InputClearValue,
  RadioGroup,
  TextBox,
} from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { xIcon } from '@progress/kendo-svg-icons';
import { tailwindForm } from './tailwind-preset.ts';
const radioData = [
  { label: 'New', value: 'new' },
  { label: 'Existing', value: 'existing' },
  { label: 'Just curious', value: 'justcurious' },
];

const FormTextBox = (fieldRenderProps: FieldRenderProps) => {
  const { name, label, placeholder } = fieldRenderProps;
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.value);
  };
  const clearClick = () => {
    setValue('');
  };
  return (
    <div className="block" style={{ width: '100%' }}>
      <Label>{label}</Label>
      <TextBox
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        suffix={() => (
          <InputClearValue onClick={clearClick}>
            <SvgIcon icon={xIcon} />
          </InputClearValue>
        )}
      />
    </div>
  );
};

const FormRadioGroup = (fieldRenderProps: FieldRenderProps) => {
  const { label, data } = fieldRenderProps;

  return (
    <div className="block" style={{ width: '100%' }}>
      <Label>{label}</Label>
      <RadioGroup
        data={data}
        layout="horizontal"
        defaultValue={data[0].value}
      />
    </div>
  );
};

const FormComboBox = (fieldRenderProps: FieldRenderProps) => {
  const { placeholder, data, unstyled } = fieldRenderProps;

  return (
    <div className="block" style={{ width: '100%' }}>
      <ComboBox data={data} label={placeholder} unstyled={unstyled} />
    </div>
  );
};
const FormDatePicker = (fieldRenderProps: FieldRenderProps) => {
  const { label } = fieldRenderProps;

  return (
    <div className="block" style={{ width: '100%' }}>
      <Label>{label}</Label>
      <DateTimePicker defaultValue={new Date('2023')} />
    </div>
  );
};



const App = (_props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
      <section className="grid px-5 py-10 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl mb-0">Get in touch</h2>
            <p className="text-sm mb-0 text-subtitle">
              Still have questions? Contact us.
            </p>
          </div>

          <div>
            <UnstyledContext.Provider value={tailwindForm}>
              <br />
              <Form
                render={(_formRenderProps: FormRenderProps) => {
                  return (
                    <FormElement>
                      <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 grid-cols-1">
                        <FieldWrapper className="col-span-1">
                          <Field
                            placeholder="Glen"
                            name="firstName"
                            label="First Name"
                            component={FormTextBox}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="col-span-1">
                          <Field
                            name="lastname"
                            label="Last name"
                            component={Input}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="col-span-1">
                          <Field
                            placeholder="glen_stracke@email.com"
                            name="email"
                            label="Email"
                            component={FormTextBox}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="col-span-1">
                          <Field
                            placeholder="433-382-1951"
                            name="phonenumber"
                            label="Phone number"
                            component={FormTextBox}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="sm:col-span-2 col-span-1">
                          <Field
                            name="types"
                            label="Type of Customer"
                            data={radioData}
                            placeholder=" "
                            component={FormRadioGroup}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="col-span-1">
                          <Field
                            placeholder="City"
                            name="city"
                            component={FormComboBox}
                            data={['Sofia', 'Boston']}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="col-span-1">
                          <Field
                            placeholder="Type of appointment"
                            name="appointment"
                            component={FormComboBox}
                            data={['One Bedroom', 'Two bedrooms']}
                          />
                        </FieldWrapper>
                        <FieldWrapper className="col-span-1">
                          <Field
                            placeholder="Type of appointment"
                            name="appointment"
                            label="Date"
                            component={FormDatePicker}
                          />
                        </FieldWrapper>
                      </div>
                      <div className="p-0 overflow-visible border-t mt-5 border-base">
                        <Button themeColor={'primary'} className="form-button">
                          Book a slot
                        </Button>
                      </div>
                    </FormElement>
                  );
                }}
              />
            </UnstyledContext.Provider>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(https://www.telerik.com/kendo-react-ui-develop/components/images/cf.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: '100%',
          }}
        />
      </section>
  );
};

export default App;
