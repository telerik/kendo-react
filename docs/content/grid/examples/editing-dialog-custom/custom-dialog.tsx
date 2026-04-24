import { GridEditDialogProps } from '@progress/kendo-react-grid';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Field, FieldWrapper, Form, FormElement } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

export const CustomEditDialog = (props: GridEditDialogProps) => {
    const { dataItem, onSubmit, onCancel } = props;

    const customInput = (fieldProps: any) => {
        const { validationMessage, visited, id, valid, editor, value, label, ...others } = fieldProps;

        return <input id={id} style={{ width: '250px' }} value={value} onChange={others.onChange} />;
    };

    return (
        <Form
            initialValues={dataItem}
            onSubmit={onSubmit}
            render={(renderProps) => {
                return (
                    <Dialog title="Custom Edit Dialog" width={450}>
                        <FormElement>
                            <FieldWrapper>
                                <Label editorId="ProductName">Product Name</Label>
                                <Field
                                    name="ProductName"
                                    label="Product Name"
                                    id="ProductName"
                                    component={customInput}
                                />
                            </FieldWrapper>
                        </FormElement>

                        <DialogActionsBar layout="stretched">
                            <Button
                                type={'submit'}
                                themeColor={'primary'}
                                disabled={!renderProps.allowSubmit || !renderProps.valid}
                                onClick={renderProps.onSubmit}
                                icon="save"
                                svgIcon={saveIcon}
                            >
                                Update
                            </Button>
                            <Button onClick={onCancel} type="reset" icon="cancel" svgIcon={cancelIcon}>
                                Cancel
                            </Button>
                        </DialogActionsBar>
                    </Dialog>
                );
            }}
        />
    );
};
