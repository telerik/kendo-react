import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';

const DialogContainer = (props) => {
    const handleSubmit = (dataItem: { [name: string]: any }) => {
        props.save(dataItem);
    };

    const CheckboxField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, label, ...others } = fieldRenderProps;
        const handleChange = (event: any) => {
            onChange({ value: event.target.checked });
        };
        return <Checkbox checked={value} onChange={handleChange} label={label} {...others} />;
    };

    return (
        <Dialog onClose={props.cancel}>
            <Form
                initialValues={{ ...props.dataItem }}
                onSubmit={handleSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement>
                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field name="ProductName" component={Input} label="Product Name" />
                            </div>
                        </FieldWrapper>
                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field name="UnitsInStock" component={NumericTextBox} label="Units In Stock" />
                            </div>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field name="Discontinued" component={CheckboxField} label="Discontinued product" />
                        </FieldWrapper>
                        <DialogActionsBar>
                            <Button type="button" onClick={props.cancel}>
                                Cancel
                            </Button>
                            <Button themeColor={'primary'} type="submit">
                                Save
                            </Button>
                        </DialogActionsBar>
                    </FormElement>
                )}
            />
        </Dialog>
    );
};
export default DialogContainer;
