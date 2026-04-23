import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { NumericTextBox, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { DateInput } from '@progress/kendo-react-dateinputs';

const nameValidationMessage = 'Please enter your full name!';
const previousVisitsValidationMessage = 'Number of previous visits must be between 0 and 50!';
const contactValidationMessage = 'Please enter a valid 10-digit phone number!';
const dateValidationMessage = 'Please select an appointment date!';

const requiredValidator = (message) => (value) => value ? '' : message;
const visitsValidation = (value) => (value >= 1 && value <= 50 ? '' : previousVisitsValidationMessage);
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
                        <legend className={'k-form-legend'}>Doctor Appointment Booking</legend>
                        <p>Please fill in the details to schedule an appointment.</p>

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
                                    name={'visits'}
                                    component={CustomNumericInput}
                                    label={'Number of previous visits '}
                                    validator={visitsValidation}
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
                                    a
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
                    <br />
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Book Appointment</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
