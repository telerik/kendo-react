import React from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error } from '@progress/kendo-react-labels';

const minValueValidator = (value: number) => (value >= 0 ? '' : 'The value must be 0 or higher');

const NonNegativeNumericInput = (fieldRenderProps: any) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <NumericTextBox {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const EditForm = (props: any) => {
    return (
        <Dialog title={`Edit ${props.item.ProductName}`} onClose={props.cancelEdit}>
            <Form
                onSubmit={props.onSubmit}
                initialValues={props.item}
                render={(formRenderProps) => (
                    <FormElement style={{ maxWidth: 650 }}>
                        <fieldset className="k-form-fieldset">
                            <div className="mb-3">
                                <Field name="ProductName" component={Input} label="Product Name" />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="UnitPrice"
                                    component={NonNegativeNumericInput}
                                    label="Price"
                                    validator={minValueValidator}
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="UnitsInStock"
                                    component={NonNegativeNumericInput}
                                    label="In stock"
                                    validator={minValueValidator}
                                />
                            </div>
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
                                Update
                            </Button>
                            <Button type="button" onClick={props.cancelEdit}>
                                Cancel
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </Dialog>
    );
};

export default EditForm;
