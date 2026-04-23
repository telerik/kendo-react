import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { Input, TextArea } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const firstNameValidator = (value) => !value ?
    "First Name is required" :
    value.length < 7 ? "First Name should be at least 7 characters long." : "";

const lastNameValidator = (value) => !value ?
    "Last Name is required" :
    value.length < 7 ? "Last Name should be at least 7 characters long." : "";

const textAreaValidator = (value) => !value ?
    "Address is required" : "";

const FormInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hindId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
      <FieldWrapper>
        <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
        <div className={'k-form-field-wrap'}>
          <Input
            valid={valid}
            type={type}
            id={id}
            disabled={disabled}
            ariaDescribedBy={`${hindId} ${errorId}`}
            {...others}
          />
          {
            showHint &&
            <Hint id={hindId}>{hint}</Hint>
          }
          {
            showValidationMessage &&
            <Error id={errorId}>{validationMessage}</Error>
          }
        </div>
      </FieldWrapper>
    );
};

const FormTextArea = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hindId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
      <FieldWrapper>
        <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
        <div className={'k-form-field-wrap'}>
          <TextArea
            valid={valid}
            type={type}
            id={id}
            disabled={disabled}
            rows={4}
            ariaDescribedBy={`${hindId} ${errorId}`}
            {...others}
          />
          {
            showHint &&
            <Hint id={hindId}>{hint}</Hint>
          }
          {
            showValidationMessage &&
            <Error id={errorId}>{validationMessage}</Error>
          }
        </div>
      </FieldWrapper>
    );
};

const App = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement style={{ width: 290, margin: '0 auto' }}>
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
              <Field
                id={'address'}
                name={'address'}
                label={'Address'}
                hint={'Hint: Enter your personal address'}
                component={FormTextArea}
                validator={textAreaValidator}
                        />
              <div className="k-form-buttons">
                <Button
                  themeColor={'primary'}
                  type={'submit'}
                  disabled={!formRenderProps.allowSubmit}
                            >
                  Submit
                </Button>
                <Button onClick={formRenderProps.onFormReset}>
                  Clear
                </Button>
              </div>
            </fieldset>
          </FormElement>
            )}
        />
    );
}

export default App;

