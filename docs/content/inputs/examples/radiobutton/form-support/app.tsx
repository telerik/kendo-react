import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Error, Label } from '@progress/kendo-react-labels';
import { Input, RadioButton } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const requiredValidator = (value: string | undefined) => {
    return value ? '' : 'This field is required.';
};

const AppointmentTypeRadio = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, validationMessage, visited } = fieldRenderProps;

    return (
        <div className={'k-form-field-wrap'}>
            <br />
            <Label>Appointment Type</Label>
            <br />
            <br />
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <RadioButton
                    name={'appointmentType'}
                    value={'new'}
                    label={'New Patient'}
                    checked={value === 'new'}
                    onChange={onChange}
                />
                <br />
                <RadioButton
                    name={'appointmentType'}
                    value={'followup'}
                    label={'Follow-up'}
                    checked={value === 'followup'}
                    onChange={onChange}
                />
                <RadioButton
                    name={'appointmentType'}
                    value={'emergency'}
                    label={'Emergency'}
                    checked={value === 'emergency'}
                    onChange={onChange}
                />
            </div>
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: '650px' }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Medical Appointment Booking</legend>

                        <FieldWrapper>
                            <div className={'k-form-field-wrap'}>
                                <Field
                                    name={'fullName'}
                                    component={Input}
                                    labelClassName={'k-form-label'}
                                    label={'Full Name'}
                                    required={'required'}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className={'k-form-field-wrap'}>
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    component={Input}
                                    label={'Email'}
                                    validator={emailValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field
                                name={'appointmentType'}
                                component={AppointmentTypeRadio}
                                validator={requiredValidator}
                            />
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className={'k-form-field-wrap'}>
                                <Field
                                    name={'notes'}
                                    component={Input}
                                    labelClassName={'k-form-label'}
                                    label={'Additional Notes'}
                                />
                            </div>
                        </FieldWrapper>
                    </fieldset>
                    <br />
                    <div className={'k-form-buttons'}>
                        <Button disabled={!formRenderProps.allowSubmit}>Book Appointment</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
