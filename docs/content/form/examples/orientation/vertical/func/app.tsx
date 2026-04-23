import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Label, Error, Hint, FloatingLabel } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const LabelEmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, ...others } = fieldRenderProps;
    const showValidationMessage: string | false | null = visited && validationMessage;
    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid}>
                {label}
            </Label>
            <Input valid={valid} type={'email'} id={id} {...others} />
            {!showValidationMessage && <Hint>Enter your personal email address.</Hint>}
            {showValidationMessage && <Error>{validationMessage}</Error>}
        </FieldWrapper>
    );
};
const FloatingLabelEmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, value, ...others } = fieldRenderProps;
    const showValidationMessage: string | false | null = visited && validationMessage;
    return (
        <FieldWrapper>
            <FloatingLabel label={label} editorValue={value} editorValid={valid} editorId={id}>
                <Input value={value} valid={valid} type={'email'} id={id} {...others} />
            </FloatingLabel>
            {!showValidationMessage && <Hint>Enter your personal email address.</Hint>}
            {showValidationMessage && <Error>{validationMessage}</Error>}
        </FieldWrapper>
    );
};
const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <Field
                        id={'email'}
                        name={'email'}
                        label={'Email (Regular Label)'}
                        component={LabelEmailInput}
                        validator={emailValidator}
                    />
                    <Field
                        id={'secondEmail'}
                        name={'secondemail'}
                        label={'Email (Floating Label)'}
                        component={FloatingLabelEmailInput}
                        validator={emailValidator}
                    />
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
