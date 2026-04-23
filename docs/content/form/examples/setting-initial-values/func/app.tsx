import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper, FormFieldSet } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <Form
            initialValues={{
                firstName: 'John',
                lastName: 'Peterson',
                email: 'johnpeterson@company.com'
            }}
            render={() => (
                <FormElement
                    style={{
                        maxWidth: 650
                    }}
                >
                    <FormFieldSet>
                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'firstName'}
                                    component={Input}
                                    label={'First name'}
                                    labelClassName="k-form-label"
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'lastName'}
                                    component={Input}
                                    label={'Last name'}
                                    labelClassName="k-form-label"
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    component={Input}
                                    label={'Email'}
                                    labelClassName="k-form-label"
                                />
                            </div>
                        </FieldWrapper>
                    </FormFieldSet>
                    <div className="k-form-buttons">
                        <Button>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
