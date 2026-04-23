import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { NumericTextBox, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
const nameValidationMessage = 'Please enter your full name!';
const monthsValidationMessage = 'Membership duration must be between 1 and 50 months!';
const contactValidationMessage = 'Please enter a valid 10-digit phone number!';
const dateValidationMessage = 'Please select an appointment date!';

const requiredValidator = (message) => (value) => value ? '' : message;
const monthsValidator = (value) => (value >= 1 && value <= 50 ? '' : monthsValidationMessage);
const contactValidator = (value) => (/^\d{10}$/.test(value) ? '' : contactValidationMessage);

const CustomInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input {...others} />
            {visited && validationMessage && <span className="k-form-error">{validationMessage}</span>}
        </div>
    );
};

const CustomNumericInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, value, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <NumericTextBox {...others} min={1} max={50} valid={value >= 1 && value <= 50} />
            {visited && validationMessage && <span className="k-form-error">{validationMessage}</span>}
        </div>
    );
};

const CustomDateInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <DateInput {...others} />
            {visited && validationMessage && <span className="k-form-error">{validationMessage}</span>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) =>
        alert(`Appointment Booked:\n${JSON.stringify(dataItem, null, 2)}`);

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={'k-form-fieldset'}>
                        <Label className={'k-form-legend'}>Gym Membership Booking</Label>
                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'fullName'}
                                    component={CustomInput}
                                    label={'Full Name'}
                                    validator={requiredValidator(nameValidationMessage)}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'months'}
                                    component={CustomNumericInput}
                                    label={'Membership duration'}
                                    validator={monthsValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'contactNumber'}
                                    component={CustomInput}
                                    label={'Contact Number'}
                                    validator={contactValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'appointmentDate'}
                                    component={CustomDateInput}
                                    label={'Appointment Date'}
                                    validator={requiredValidator(dateValidationMessage)}
                                />
                            </div>
                        </FieldWrapper>
                    </fieldset>

                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Book Appointment</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
