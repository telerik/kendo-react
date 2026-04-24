import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const nameValidator = (value: string) =>
    value && /^[A-Za-z]+$/.test(value) && value.length >= 2
        ? ''
        : 'Name should contain only letters and be at least 2 characters';

const passwordValidator = (value: string) =>
    value && value.length >= 6 && value.length <= 18 ? '' : 'Password must be between 6 and 18 characters';

const emailValidator = (value: string) =>
    value && /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email address';

const privacyValidator = (value: boolean) => (value ? '' : 'You must agree to the Privacy Policy');

const CheckboxWithCustomLabel = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, value, id, valid, disabled, label, ...others } = fieldRenderProps;

    return (
        <div>
            <Checkbox id={id} value={value} valid={valid} disabled={disabled} {...others}>
                <Label className="k-checkbox-label" style={{ display: 'inline-block' }}>
                    By clicking <a href="#">Submit</a>, you agree to our <a href="#">Privacy Policy</a>.
                </Label>
            </Checkbox>
            {visited && validationMessage && <div className="k-required">{validationMessage}</div>}
        </div>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem: any) => {
        console.log('Form submitted with values:', dataItem);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-8 offset-sm-2 example-col">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{
                        firstName: 'John',
                        password: 'securePassword123',
                        confirmPassword: 'securePassword123',
                        email: 'john.doe@example.com',
                        agreeToPrivacy: false
                    }}
                    render={(formRenderProps) => (
                        <FormElement>
                            <FormFieldSet legend="Job Application Form:">
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="firstName"
                                            component={Input}
                                            label="Full Name"
                                            validator={nameValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="password"
                                            component={Input}
                                            type="password"
                                            label="Password"
                                            validator={passwordValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="confirmPassword"
                                            component={Input}
                                            type="password"
                                            label="Confirm Password"
                                            validator={(value) => {
                                                const password = formRenderProps.valueGetter('password');
                                                return value && value === password ? '' : 'Passwords do not match';
                                            }}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="email"
                                            component={Input}
                                            type="email"
                                            label="Email Address"
                                            validator={emailValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            id="agreeToPrivacy"
                                            name="agreeToPrivacy"
                                            component={CheckboxWithCustomLabel}
                                            validator={privacyValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                            </FormFieldSet>
                            <Button themeColor="primary">Submit Application</Button>
                        </FormElement>
                    )}
                />
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Application submitted successfully!
                </div>
            )}
        </div>
    );
};

export default App;
