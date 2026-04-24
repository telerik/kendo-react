import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Form, FormElement, FieldWrapper, Field } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Checkbox, TextBox } from '@progress/kendo-react-inputs';
import { Employee } from './shared-tl-interfaces';
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

interface EditingDialogProps {
    itemInEdit: Employee;
    cancel: () => void;
    save: (itemInEdit: Employee) => void;
}

const EditingDialog = (props: EditingDialogProps) => {
    const { itemInEdit } = props;

    return (
        <Form
            initialValues={itemInEdit}
            onSubmit={props.save}
            render={(renderProps) => (
                <Dialog title={`Edit ${itemInEdit.name}`} onClose={props.cancel}>
                    <FormElement>
                        <FieldWrapper>
                            <Label editorId={'Employee'} className={'k-form-label'}>
                                {'Employee'}
                            </Label>
                            <div className={'k-form-field-wrap'}>
                                <Field name={'name'} id={'Employee'} component={TextBox} />
                            </div>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Label editorId={'Position'} className={'k-form-label'}>
                                {'Position'}
                            </Label>
                            <div className={'k-form-field-wrap'}>
                                <Field name="position" id={'Position'} component={TextBox} />
                            </div>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Label editorId={'fullTime'} className={'k-checkbox-label'}>
                                <div className={'k-form-field-wrap'}>
                                    <Field name="fullTime" id={'fullTime'} component={Checkbox} />
                                </div>
                                {'Full Time'}
                            </Label>
                        </FieldWrapper>
                    </FormElement>
                    <DialogActionsBar layout={'start'}>
                        <Button
                            themeColor={'primary'}
                            type={'submit'}
                            onClick={renderProps.onSubmit}
                            icon="save"
                            svgIcon={saveIcon}
                        >
                            Save
                        </Button>
                        <Button onClick={props.cancel} icon="cancel" svgIcon={cancelIcon}>
                            Cancel
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        />
    );
};

export default EditingDialog;
