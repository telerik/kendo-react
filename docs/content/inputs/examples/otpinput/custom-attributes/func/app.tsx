import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label, Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Form, FormElement, FieldRenderProps, Field } from '@progress/kendo-react-form';
import './styles.css';

const FormOTPInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, value, ...otherProps } = fieldRenderProps;
    const showError = touched && validationMessage;

    return (
        <div className="k-form-field-wrap">
            <Label editorValid={valid}>
                {label}
                <OTPInput inputAttributes={{ autoComplete: 'one-time-code' }} {...otherProps} />
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
        <>
            <div className="example-info">
                Inspect the OTPInput in the DOM to see the custom HTML attributes applied.
            </div>
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                    <FormElement>
                        <Field
                            id="verificationCode"
                            name="verificationCode"
                            label="Verification code"
                            component={FormOTPInput}
                        />
                        <div className="k-form-buttons">
                            <Button themeColor="primary" type="submit" disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                        </div>
                    </FormElement>
                )}
            />
        </>
    );
};

export default App;
