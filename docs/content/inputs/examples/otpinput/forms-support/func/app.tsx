import * as React from 'react';
import { OTPInput, Input } from '@progress/kendo-react-inputs';
import { Form, Field, FormElement, FieldWrapper, FieldRenderProps, FormFieldSet } from '@progress/kendo-react-form';
import { Label, Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';

const firstNameValidator = (value) => {
    if (!value) {
        return 'First Name is required';
    }
    if (value.length < 7) {
        return 'First Name should be at least 7 characters long.';
    }
    return '';
};

const lastNameValidator = (value) => {
    if (!value) {
        return 'Last Name is required';
    }
    if (value.length < 7) {
        return 'Last Name should be at least 7 characters long.';
    }
    return '';
};

const codeValidator = (value: string) => {
    if (!/^\d{4}$/.test(value)) {
        return 'Please enter a 4-digit code.';
    }

    if (value !== '1234') {
        return 'Code should be 1234.';
    }

    return '';
};

const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, ...otherProps } = fieldRenderProps;
    const showError = touched && validationMessage;

    return (
        <div className="k-form-field-wrap">
            <Label editorValid={valid}>
                {label}
                <Input id={id} valid={valid} {...otherProps} />
                {showError && <Error>{validationMessage}</Error>}
            </Label>
        </div>
    );
};

const FormOTPInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, valid, ...otherProps } = fieldRenderProps;
    const showError = touched && validationMessage;

    return (
        <div className="k-form-field-wrap">
            <Label editorValid={valid}>
                {label}
                <OTPInput type="number" valid={valid} {...otherProps} />
                {showError && <Error>{validationMessage}</Error>}
            </Label>
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem) => {
        alert(`Submitted code: ${JSON.stringify(dataItem, null, 2)}`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center ">
            <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                    <Form
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Please fill in the fields:</legend>
                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                name={'firstName'}
                                                component={FormInput}
                                                label={'First name'}
                                                validator={firstNameValidator}
                                            />
                                        </FieldWrapper>
                                    </div>
                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                name={'lastName'}
                                                component={FormInput}
                                                label={'Last name'}
                                                validator={lastNameValidator}
                                            />
                                        </FieldWrapper>
                                    </div>
                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                id="verificationCode"
                                                name="verificationCode"
                                                label="Verification code"
                                                component={FormOTPInput}
                                                validator={codeValidator}
                                            />
                                        </FieldWrapper>
                                    </div>
                                </FormFieldSet>
                                <div className="k-form-buttons">
                                    <Button themeColor="primary" type="submit" disabled={!formRenderProps.allowSubmit}>
                                        Submit
                                    </Button>
                                    <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                                </div>
                            </FormElement>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
