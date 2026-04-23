import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Field, FieldWrapper, Form, FormElement } from '@progress/kendo-react-form';
import { Input, Signature } from '@progress/kendo-react-inputs';
import { Error, Hint, Label } from '@progress/kendo-react-labels';


const firstNameValidator = (value: string) => !value ?
    'First Name is required' : '';

const lastNameValidator = (value: string) => !value ?
    'Last Name is required' : '';

const signatureValidator = (value: string) => !value ?
    'Signature is required' : '';

const FormInput = (fieldRenderProps: any) => {
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

const FormSignature = (fieldRenderProps: any) => {
    const { validationMessage, touched, id, label, layout, valid, disabled, hint, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hindId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
      <FieldWrapper>
        <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
        <Signature
          id={id}
          ariaDescribedBy={`${hindId} ${errorId}`}
          ariaLabelledBy={labelId}
          valid={valid}
          disabled={disabled}
          layout={layout}
          popupScale={2}
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
      </FieldWrapper>
    );
};

const App = () => {
    const handleSubmit = (dataItem: any) => {
        const shortData = {
            ...dataItem,
            signature: dataItem.signature.substring(0, 30) + '...'
        };

        alert(JSON.stringify(shortData, null, 2));
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                <Field
                  id={'signature'}
                  name={'signature'}
                  label={'Signature'}
                  hint={'Sign to agree with our Terms of Use'}
                  component={FormSignature}
                  layout={'horizontal'}
                  validator={signatureValidator}
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
      </div>
    );
};

export default App;
