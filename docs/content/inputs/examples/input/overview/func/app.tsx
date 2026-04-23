import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const inputValidator = (value) => (!value ? 'Please enter some text.' : '');

const FormInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, max, value, ...others } =
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
            <div className={'k-form-field-wrap'} style={{ position: 'relative' }}>
                <Input
                    valid={valid}
                    type={type}
                    id={id}
                    disabled={disabled}
                    maxLength={max}
                    ariaDescribedBy={`${hindId} ${errorId}`}
                    {...others}
                />
                <Hint direction={'end'} style={{ position: 'absolute', right: 10, bottom: -20 }}>
                    {value.length} / {max}
                </Hint>
                {showHint && (
                    <Hint id={hindId} style={{ display: 'block', marginTop: 5 }}>
                        {hint}
                    </Hint>
                )}
                {showValidationMessage && (
                    <Error id={errorId} style={{ display: 'block', marginTop: 5 }}>
                        {validationMessage}
                    </Error>
                )}
            </div>
        </FieldWrapper>
    );
};

const App = () => {
    const max = 20;
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Form
                initialValues={{ username: '' }}
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                    <FormElement style={{ width: 250 }}>
                        <fieldset className={'k-form-fieldset'}>
                            <Field
                                id={'username'}
                                name={'username'}
                                label={'Username:'}
                                max={max}
                                value={formRenderProps.valueGetter('username')}
                                hint={'Hint: Enter your text here'}
                                component={FormInput}
                                validator={inputValidator}
                            />
                            <div className="k-form-buttons k-justify-content-end">
                                <br />
                                <br />
                                <br />
                                <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                    Send
                                </Button>
                            </div>
                        </fieldset>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default App;
