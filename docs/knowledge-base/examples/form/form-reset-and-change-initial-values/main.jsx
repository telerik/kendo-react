import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
  const [formKey, setFormKey] = React.useState(1);
  const [user, setUser] = React.useState({
    firstName: 'No name',
    lastName: 'No name',
  });

  //Reseting the form to the initial values
  const resetForm = () => {
    setFormKey(formKey + 1);
  };

  //Changing the initial values and reseting the form by changing the key
  const resetFormWithChangedValues = () => {
    setUser({
      firstName: 'Changed name',
      lastName: 'Changed name',
    });
    setFormKey(formKey + 1);
  };

  const handleSubmit = (dataItem) => {
    alert(JSON.stringify(dataItem, null, 2));
    //use the line below if you want to reset the form after submit
    //setFormKey(formKey + 1);
  };

  return (
    <React.Fragment>
      <Button onClick={resetForm}>Reset form</Button>
      <Button onClick={resetFormWithChangedValues}>
        Reset form with different initial values
      </Button>
      <hr className="k-hr" />
      <Form
        onSubmit={handleSubmit}
        initialValues={user}
        key={formKey}
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
            </fieldset>
            <div className="k-form-buttons">
              <button
                type={'submit'}
                className="k-button"
                disabled={!formRenderProps.allowSubmit}
              >
                Submit
              </button>
            </div>
          </FormElement>
        )}
      />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
