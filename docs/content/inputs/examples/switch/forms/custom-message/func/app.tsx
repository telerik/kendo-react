import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet } from '@progress/kendo-react-form';
import { Input, Switch } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error } from '@progress/kendo-react-labels';

const nameValidator = (value) => {
    return value && /^[A-Za-z ]+$/.test(value) ? '' : 'Your name should contain only letters';
};

const emailValidator = (value) => {
    return value && /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email address';
};

const passwordValidator = (value) => {
    return value && value.length >= 6 && value.length <= 18
        ? ''
        : 'Please enter a password between 6 and 18 characters';
};

const confirmPasswordValidator = (value, formValues) => {
    return value && value === formValues.password ? '' : 'Passwords do not match';
};

const subscriptionValidator = (value) => {
    return value ? '' : 'Please turn on subscription for updates';
};

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem) => {
        console.log('Submitted Data:', dataItem);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            render={(formRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Sign Up:</legend>
                                        <Field
                                            name="fullName"
                                            component={Input}
                                            label="Full Name"
                                            validator={nameValidator}
                                        />
                                        {formRenderProps.errors.fullName && (
                                            <Error>{formRenderProps.errors.fullName}</Error>
                                        )}
                                        <Field
                                            name="email"
                                            component={Input}
                                            type="email"
                                            label="Email Address"
                                            validator={emailValidator}
                                        />
                                        {formRenderProps.errors.email && <Error>{formRenderProps.errors.email}</Error>}
                                        <Field
                                            name="password"
                                            component={Input}
                                            type="password"
                                            label="Create Password"
                                            validator={passwordValidator}
                                        />
                                        {formRenderProps.errors.password && (
                                            <Error>{formRenderProps.errors.password}</Error>
                                        )}
                                        <Field
                                            name="confirmPassword"
                                            component={Input}
                                            type="password"
                                            label="Confirm Password"
                                            validator={(value) =>
                                                confirmPasswordValidator(value, {
                                                    password: formRenderProps.valueGetter('password')
                                                })
                                            }
                                        />
                                        {formRenderProps.errors.confirmPassword && (
                                            <Error>{formRenderProps.errors.confirmPassword}</Error>
                                        )}
                                        <br />
                                        <br />
                                        <div className="mb-3">
                                            <Field
                                                name="subscribe"
                                                component={Switch}
                                                validator={subscriptionValidator}
                                            />
                                            <br />
                                            <br />
                                            <span style={{ marginLeft: 10, fontSize: 12 }}>Turn notifications off</span>
                                            {formRenderProps.errors.subscribe && (
                                                <Error>{formRenderProps.errors.subscribe}</Error>
                                            )}
                                        </div>
                                    </FormFieldSet>
                                    <Button type="submit" disabled={!formRenderProps.allowSubmit}>
                                        Register
                                    </Button>
                                </FormElement>
                            )}
                        />
                    </div>
                </div>
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Registration submitted!
                </div>
            )}
        </div>
    );
};

export default App;
