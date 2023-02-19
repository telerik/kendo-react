

import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Upload } from '@progress/kendo-react-upload';

const UploadInput = (fieldRenderProps) => {
  const onChangeHandler = (event) => {
    fieldRenderProps.onChange({value: event.newState}); 
  };
  const onRemoveHandler = (event) => {
    fieldRenderProps.onChange({value: event.newState}); 
  };
  return (
    <Upload
      autoUpload={false}
      showActionButtons={false}
      files={fieldRenderProps.value}
      onAdd={onChangeHandler}
      onRemove={onRemoveHandler}
    />
  );
};
const App = () => {
    const handleSubmit = (dataItem) => {
      const {files, ...otherFields} = dataItem;

      const formData = new FormData();

      formData.append('files', files.map(file => file.getRawFile()));

      Object.keys(otherFields).forEach(prop => {
          formData.append(prop, otherFields[prop]);
      });

      // submit your formData
    };
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <form onSubmit={formRenderProps.onSubmit} className={'k-form'}>
                    <fieldset>
                        <legend>Please fill in the fields:</legend>
                        <div className="mb-3">
                            <Field name={'firstName'} component={Input} label={'User Name'} />
                        </div>
                        <div className="mb-3">
                            User Photos:
                            <Field name={"files"} component={UploadInput} />
                        </div>
                    </fieldset>
                    <button
                        type={'submit'}
                        className="k-button"
                        disabled={!formRenderProps.allowSubmit}
                    >
                        Submit
                    </button>
                </form>
            )}
        />
    );
};
ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

