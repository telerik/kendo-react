import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const usernameValidator = (value: string) =>
    value && /^[A-Za-z]+$/.test(value) && value.length >= 2 ? '' : 'Your username should contain only letters!';

const passwordValidator = (value: string) =>
    value && value.length >= 6 && value.length <= 18 ? '' : 'Please enter password between 6 and 16 characters!';

const emailValidator = (value: string) =>
    value && /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email address';

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return <Input {...others} validityStyles={false} />;
};

const App = () => {
    const [success, setSuccess] = React.useState<boolean>(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps) => (
                        <FormElement>
                            <FormFieldSet legend="Create new account:">
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="username"
                                            component={InputField}
                                            label="First Name"
                                            validator={usernameValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="password"
                                            component={InputField}
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
                                            component={InputField}
                                            type="password"
                                            label="Confirm Password"
                                            validator={(value) => {
                                                const password = formRenderProps.valueGetter('password');
                                                return value && value === password ? '' : 'Passwords does not match!';
                                            }}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="email"
                                            component={InputField}
                                            type="email"
                                            label="Email address"
                                            validator={emailValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                            </FormFieldSet>
                            <Button type="button" themeColor="primary">
                                Search
                            </Button>
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
