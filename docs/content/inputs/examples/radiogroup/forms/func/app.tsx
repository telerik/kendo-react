import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { Input, RadioGroup } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const confirmationData = [
    { label: 'Phone Call', value: 'phone' },
    { label: 'Via Email', value: 'email' }
];

const firstNameValidator = (value) =>
    !value ? 'First Name is required' : value.length < 7 ? 'First Name should be at least 7 characters long.' : '';

const lastNameValidator = (value) =>
    !value ? 'Last Name is required' : value.length < 7 ? 'Last Name should be at least 7 characters long.' : '';

const radioGroupValidator = (value) => (!value ? 'Type of Confirmation is required' : '');

const FormInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } =
        fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hindId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>
                {label}
            </Label>
            <br />
            <div className={'k-form-field-wrap'}>
                <Input
                    valid={valid}
                    type={type}
                    id={id}
                    disabled={disabled}
                    ariaDescribedBy={`${hindId} ${errorId}`}
                    {...others}
                />
                <br />

                {showHint && <Hint id={hindId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormRadioGroup = (fieldRenderProps) => {
    const { validationMessage, touched, id, label, layout, valid, disabled, hint, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hindId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper>
            <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <RadioGroup
                id={id}
                ariaDescribedBy={`${hindId} ${errorId}`}
                ariaLabelledBy={labelId}
                valid={valid}
                disabled={disabled}
                layout={layout}
                {...others}
            />
            {showHint && <Hint id={hindId}>{hint}</Hint>}
            {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </FieldWrapper>
    );
};

const App = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>User Details</legend>
                        <Field
                            id={'firstName'}
                            name={'firstName'}
                            label={'First Name'}
                            component={FormInput}
                            validator={firstNameValidator}
                        />
                        <Field
                            id={'lastName'}
                            name={'lastName'}
                            label={'Last Name'}
                            component={FormInput}
                            validator={lastNameValidator}
                        />
                        <br />
                        <Field
                            id={'confirmationType'}
                            name={'confirmationType'}
                            label={'Type of Confirmation'}
                            hint={'Hint: Choose a way to receive a confirmation'}
                            component={FormRadioGroup}
                            data={confirmationData}
                            layout={'horizontal'}
                            validator={radioGroupValidator}
                        />
                        <br />
                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                        </div>
                    </fieldset>
                </FormElement>
            )}
        />
    );
};

export default App;
