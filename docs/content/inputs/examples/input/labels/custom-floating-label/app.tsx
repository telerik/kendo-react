import React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const EmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input {...others} labelClassName={'custom-label'} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const EventRegistrationForm = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <div className="input-container">
            <h2 className="form-header">Event Registration</h2>
            <p className="form-description">Please fill out the fields below:</p>
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement>
                        <fieldset className={'k-form-fieldset'}>
                            <legend className={'k-form-legend'}>Please fill in the fields:</legend>
                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'firstName'}
                                        component={Input}
                                        labelClassName={'custom-label'}
                                        label={'First name'}
                                    />
                                </div>
                            </FieldWrapper>

                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'lastName'}
                                        component={Input}
                                        labelClassName={'custom-label'}
                                        label={'Last name'}
                                    />
                                </div>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    component={EmailInput}
                                    label={'Email'}
                                    validator={emailValidator}
                                />
                            </FieldWrapper>
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default EventRegistrationForm;
