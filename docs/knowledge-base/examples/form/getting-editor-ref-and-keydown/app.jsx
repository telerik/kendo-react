import * as React from 'react';
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const FormInput = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    type,
    optional,
    refp,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={'k-form-field-wrap'}>
        <Input
          ref={refp}
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          ariaDescribedBy={`${hintId} ${errorId}`}
          {...others}
        />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

const App = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

  //onKeyDown event of the "name" editor input
  const onInputDateKeyDown = (props) => {
    console.log('keydown');
  };
  const SupplierEditorRef = React.useRef();
  React.useEffect(() => {
    //reference to the "name" editor input
    console.log(SupplierEditorRef.current);
  }, []);
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: 400,
          }}
        >
          <fieldset className={'k-form-fieldset'}>
            <legend className={'k-form-legend'}>
              BOOK YOUR DREAM VACATION TODAY
            </legend>
            <Field
              name={'name'}
              refp={SupplierEditorRef}
              component={FormInput}
              onKeyDown={onInputDateKeyDown}
            />
            <Button type={'submit'} disabled={!formRenderProps.allowSubmit}>
              Send Reservation Request
            </Button>
            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
          </fieldset>
        </FormElement>
      )}
    />
  );
};

export default App;