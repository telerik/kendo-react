import React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const EmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input {...others} labelClassName={'custom-label'} />
            {visited && validationMessage && <span className="k-invalid">{validationMessage}</span>}
        </div>
    );
};

const App = () => {
    const usernameValidationMessage: string = 'Your username should contain only letters!';
    const passwordValidationMessage: string = 'Please enter password between 6 and 16 characters!';

    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div className="input-container">
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement>
                        <fieldset className={'k-form-fieldset'}>
                            <Label>Research Study Participant Enrollment</Label>

                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'username'}
                                        component={Input}
                                        labelClassName={'custom-label'}
                                        label={'First Name'}
                                        pattern={'[A-Za-z]+'}
                                        minLength={2}
                                        required
                                        validationMessage={usernameValidationMessage}
                                    />
                                </div>
                            </FieldWrapper>

                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'password'}
                                        component={Input}
                                        labelClassName={'custom-label'}
                                        label={'Password'}
                                        type="password"
                                        required
                                        minLength={6}
                                        maxLength={18}
                                        validationMessage={passwordValidationMessage}
                                    />
                                </div>
                            </FieldWrapper>

                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'confirmPassword'}
                                        component={Input}
                                        labelClassName={'custom-label'}
                                        label={'Confirm Password'}
                                        type="password"
                                        required
                                        minLength={6}
                                        maxLength={18}
                                        validationMessage={passwordValidationMessage}
                                    />
                                </div>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    component={EmailInput}
                                    label={'Email Address'}
                                    validator={emailValidator}
                                />
                            </FieldWrapper>
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button disabled={!formRenderProps.allowSubmit}>Enroll</Button>
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default App;
