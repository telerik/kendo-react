import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input, Rating } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const ratingValidator = (value) => (value ? '' : 'Please enter a valid email.');
const RatingInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Rating {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <FormFieldSet className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Please fill in the fields:</legend>
                        <div className="mb-3">
                            <FieldWrapper>
                                <Field name={'firstName'} component={Input} label={'First name'} />
                            </FieldWrapper>
                        </div>
                        <div className="mb-3">
                            <FieldWrapper>
                                <Field name={'lastName'} component={Input} label={'Last name'} />
                            </FieldWrapper>
                        </div>
                        <div className="mb-3">
                            <FieldWrapper>
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    component={EmailInput}
                                    label={'Email'}
                                    validator={emailValidator}
                                />
                            </FieldWrapper>
                        </div>
                        <legend className={'k-form-legend'}>Please rate your experience:</legend>
                        <div className="mb-3">
                            <FieldWrapper>
                                <Field
                                    name={'rating'}
                                    component={RatingInput}
                                    defaultValue={5}
                                    validation={ratingValidator}
                                />
                            </FieldWrapper>
                        </div>
                    </FormFieldSet>
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
