import * as React from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement, FieldRenderProps } from '@progress/kendo-react-form';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Error } from '@progress/kendo-react-labels';
import { Product } from './gd-interfaces';
import categories from './gd-categories';

interface EditFormProps {
    cancelEdit: () => void;
    onSubmit: (event) => void;
    item: Partial<Product>;
}

const minValueValidator = (value: number) => (value >= 0 ? '' : 'The value must be 0 or higher');
const NonNegativeNumericInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <NumericTextBox {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const EditForm = (props: EditFormProps) => {
    return (
        <Dialog title={`Edit ${props.item.ProductName}`} onClose={props.cancelEdit}>
            <Form
                onSubmit={props.onSubmit}
                initialValues={props.item}
                render={(formRenderProps) => (
                    <FormElement style={{ maxWidth: 650 }}>
                        <fieldset className={'k-form-fieldset'}>
                            <div className="mb-3">
                                <Field name={'ProductName'} component={Input} label={'Product Name'} />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name={'Category'}
                                    component={DropDownList}
                                    data={categories}
                                    textField={'CategoryName'}
                                    label={'Category'}
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name={'UnitPrice'}
                                    component={NonNegativeNumericInput}
                                    label={'Price'}
                                    validator={minValueValidator}
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name={'UnitsInStock'}
                                    component={NonNegativeNumericInput}
                                    label={'In stock'}
                                    validator={minValueValidator}
                                />
                            </div>
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button disabled={!formRenderProps.allowSubmit} themeColor={'primary'}>
                                Update
                            </Button>
                            <Button type={'submit'} onClick={props.cancelEdit}>
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
