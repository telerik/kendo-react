import * as React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Loader } from '@progress/kendo-react-indicators';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);

const emailValidator = (value) =>
  emailRegex.test(value) ? '' : 'Please enter a valid email.';

const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const App = () => {
  let [disabled, setDisabled] = React.useState(false);
  const handleSubmit = (dataItem) => {
    setIsSubmitting(true);
    setDisabled(true);
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [serverResponse, setServerResponse] = React.useState();

  return (
    <>
      {serverResponse && (
        <Dialog title={'Server message'} onClose={() => setServerResponse('')}>
          <p style={{ margin: '25px', textAlign: 'center' }}>
            {serverResponse}
          </p>
        </Dialog>
      )}

      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement
            style={{
              maxWidth: 650,
            }}
          >
            <fieldset className={'k-form-fieldset'}>
              <legend className={'k-form-legend'}>
                Please fill in the fields:
              </legend>
              <div className="mb-3">
                <Field
                  name={'firstName'}
                  component={Input}
                  label={'First name'}
                />
              </div>

              <div className="mb-3">
                <Field
                  name={'lastName'}
                  component={Input}
                  label={'Last name'}
                />
              </div>

              <div className="mb-3">
                <Field
                  name={'email'}
                  type={'email'}
                  component={EmailInput}
                  label={'Email'}
                  validator={emailValidator}
                />
              </div>
            </fieldset>
            <div className="k-form-buttons">
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <Button
                type={'submit'}
                className="k-button"
                disabled={disabled}
                iconClass={disabled ? 'fa fa-spinner fa-spin' : ''}
              >
                Submit
              </Button>
            </div>
          </FormElement>
        )}
      />
    </>
  );
};

export default App;