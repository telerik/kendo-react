import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { TextBox, NumericTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Error, Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import categories from './gd-categories';
import { Product } from './gd-interfaces';
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

interface EditFormProps {
    cancelEdit: () => void;
    onSubmit: (event) => void;
    item: Partial<Product>;
}

const minValueValidator = (value: number) => (value >= 0 ? '' : 'The value must be 0 or higher');
const NonNegativeNumericInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, id, valid, label, ...others } = fieldRenderProps;
    return (
        <>
            <Label editorId={id} editorValid={valid} className={'k-form-label'}>
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <NumericTextBox {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        </>
    );
};

const TextBoxField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, ...others } = fieldRenderProps;
    return (
        <>
            <Label editorId={id} className={'k-form-label'}>
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <TextBox {...others} />
            </div>
        </>
    );
};

const EditForm = (props: EditFormProps) => {
    const { cancelEdit, onSubmit, item, ...other } = props;

    return (
        <Form
            initialValues={item}
            onSubmit={onSubmit}
            render={(renderProps) => (
                <Dialog title={`Edit ${item.ProductName}`} onClose={cancelEdit} style={{ maxWidth: '650px' }}>
                    <FormElement>
                        <FieldWrapper>
                            <Field name={'ProductName'} component={TextBoxField} label={'Product Name'} />
                        </FieldWrapper>
                        <FieldWrapper>
                            <Label editorId={'Category'} className={'k-form-label'}>
                                {'Category'}
                            </Label>
                            <div className={'k-form-field-wrap'}>
                                <Field
                                    id={'Category'}
                                    name={'Category'}
                                    component={DropDownList}
                                    data={categories}
                                    textField={'CategoryName'}
                                />
                            </div>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field
                                name={'UnitPrice'}
                                component={NonNegativeNumericInput}
                                label={'Price'}
                                validator={minValueValidator}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field
                                name={'UnitsInStock'}
                                component={NonNegativeNumericInput}
                                label={'In stock'}
                                validator={minValueValidator}
                            />
                        </FieldWrapper>
                    </FormElement>
                    <DialogActionsBar layout="start">
                        <Button
                            type={'submit'}
                            themeColor={'primary'}
                            disabled={!renderProps.allowSubmit}
                            onClick={renderProps.onSubmit}
                            icon="save"
                            svgIcon={saveIcon}
                        >
                            Update
                        </Button>
                        <Button onClick={cancelEdit} icon="cancel" svgIcon={cancelIcon}>
                            Cancel
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
            {...other}
        />
    );
};
export default EditForm;
