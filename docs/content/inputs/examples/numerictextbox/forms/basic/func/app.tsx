import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const requiredValidator = (value: string) => (value ? '' : 'This field is required.');
const experienceValidator = (value: number | null) => {
    if (value === null || value === undefined) return 'This field is required.';
    if (value < 0 || value > 50) return 'Experience must be between 0 and 50 years.';
    return '';
};

const CustomInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const CustomNumericInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <NumericTextBox {...others} min={0} max={50} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) =>
        alert(`Application submitted:\n${JSON.stringify(dataItem, null, 2)}`);

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Job Application Form</legend>
                        <p>Please fill out the form to apply for a position at our company.</p>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'firstName'}
                                    component={CustomInput}
                                    label={'First Name'}
                                    validator={requiredValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'lastName'}
                                    component={CustomInput}
                                    label={'Last Name'}
                                    validator={requiredValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field
                                name={'email'}
                                type={'email'}
                                component={CustomInput}
                                label={'Email'}
                                validator={emailValidator}
                            />
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'position'}
                                    component={CustomInput}
                                    label={'Position Applied For'}
                                    validator={requiredValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'experience'}
                                    component={CustomNumericInput}
                                    label={'Years of Experience'}
                                    validator={experienceValidator}
                                />
                            </div>
                        </FieldWrapper>
                    </fieldset>
                    <br />
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Apply Now</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
