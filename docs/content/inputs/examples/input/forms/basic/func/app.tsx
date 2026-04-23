import * as React from 'react';

import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FormFieldSet, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';

const App = () => {
    const [success, setSuccess] = React.useState<Boolean>(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const requiredValidator = (value: any) => (value ? '' : 'This field is required.');
    const passwordValidator = (value: any) =>
        value && value.length >= 6 && value.length <= 18 ? '' : 'Password must be between 6 and 18 characters.';

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{ username: 'Robert' }}
                    render={(formRenderProps: FormRenderProps) => (
                        <FormElement>
                            <FormFieldSet legend="Volunteer Sign-Up">
                                <FieldWrapper>
                                    <div className="k-form-field-wrap">
                                        <Field
                                            name="username"
                                            component={Input}
                                            label={'First Name'}
                                            validator={requiredValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <div className="k-form-field-wrap">
                                        <Field
                                            name={'password'}
                                            type={'password'}
                                            component={Input}
                                            label={'Password'}
                                            validator={passwordValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <div className="k-form-field-wrap">
                                        <Field
                                            name={'confirmPassword'}
                                            type={'password'}
                                            component={Input}
                                            label={'Confirm Password'}
                                        />
                                    </div>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <div className="k-form-field-wrap">
                                        <Field
                                            name={'email'}
                                            type={'email'}
                                            component={Input}
                                            label={'Email address'}
                                            validator={requiredValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                            </FormFieldSet>
                            <Button themeColor={'primary'}>Search </Button>
                        </FormElement>
                    )}
                />
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Form submitted!
                </div>
            )}
        </div>
    );
};

export default App;
