import * as React from 'react';
import { Dialog, DialogActionsBar, DialogProps } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

export const CustomDialog = (props: DialogProps) => {
    if (!props.children) {
        return <Dialog {...props} />;
    }
    const editorProps = props.children[0].props;
    const saveButtonProps = props.children[1].props.children[0].props;
    const cancelButtonProps = props.children[1].props.children[1].props;
    return (
        <Dialog {...props} title={'Appointment'}>
            {props.children[0]}
            <DialogActionsBar>
                <Button {...saveButtonProps} disabled={editorProps.errors?.description !== ''}>
                    Save
                </Button>
                <Button {...cancelButtonProps}>Close</Button>
            </DialogActionsBar>
        </Dialog>
    );
};
