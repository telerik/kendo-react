import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from '@progress/kendo-react-buttons';

const ColumnForm = props => {
  return (
    <Dialog title="Add New Column" onClose={props.cancelEdit}>
      <Form
        onSubmit={props.onSubmit}
        render={formRenderProps => (
          <FormElement style={{ maxWidth: 650 }}>
            <fieldset className={"k-form-fieldset"}>
              <div className="mb-3">
                <Field
                  name={"ColumnName"}
                  component={Input}
                  label={"Column Name"}
                />
              </div>
            </fieldset>
            <div className="k-form-buttons">
              <Button
                type="submit"
                disabled={!formRenderProps.allowSubmit}
                style={{ width: '50%' }}
              >
                Update
              </Button>
              <Button
                type="submit"
                onClick={props.cancelEdit}
                style={{ width: '50%' }}
              >
                Cancel
              </Button>
            </div>
          </FormElement>
        )}
      />
    </Dialog>
  );
};

export default ColumnForm;
