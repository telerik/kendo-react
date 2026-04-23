import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const usernameValidator = (value: string) =>
    value && /^[A-Za-z]+$/.test(value) && value.length >= 2
        ? ''
        : 'First Name should contain only letters and be at least 2 characters';

const passwordValidator = (value: string) =>
    value && value.length >= 6 && value.length <= 18 ? '' : 'Password must be between 6 and 18 characters';

const checkboxValidator = (value: boolean) => (value ? '' : 'You must agree to the Terms and Conditions');

const CheckboxWithCustomLabel = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, value, id, valid, disabled, ...others } = fieldRenderProps;

    return (
        <div>
            <Checkbox id={id} value={value} valid={valid} disabled={disabled} {...others}>
                <Label className="k-checkbox-label" style={{ display: 'inline-block' }}>
                    By clicking <a href="#">Sign Up</a>, you agree to our <a href="#">Terms and Conditions</a>.
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
                        username: 'John',
                        name: 'samplePassword',
                        checkbox: false
                    }}
                    render={(formRenderProps) => (
                        <FormElement>
                            <FormFieldSet className="k-form-fieldset">
                                <legend className="k-form-legend">Sign Up:</legend>
                                <FieldWrapper>
                                    <div className="mb-3">
                                        <Field
                                            name="username"
                                            component={Input}
                                            label="First Name"
                                            validator={usernameValidator}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Field
                                            name="name"
                                            component={Input}
                                            type="password"
                                            label="Password"
                                            validator={passwordValidator}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Field
                                            id="ch"
                                            name="checkbox"
                                            component={CheckboxWithCustomLabel}
                                            validator={checkboxValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                            </FormFieldSet>
                            <Button type="submit" themeColor="primary">
                                Sign Up
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
