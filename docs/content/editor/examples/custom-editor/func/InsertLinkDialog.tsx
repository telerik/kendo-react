import * as React from 'react';
import { createPortal } from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { EditorDialogs } from '@progress/kendo-react-editor';

const InsertLinkDialog = EditorDialogs.InsertLinkDialog;

export const LinkDialog = function (props: EditorDialogs.InsertLinkDialogProps) {
    return (
        <InsertLinkDialog
            {...props}
            render={(defaultDialogRendering, { content, actionButtons }) => {
                const cancelButton = actionButtons[0];
                const insertButton = actionButtons[1];
                const dialog = (
                    <Dialog {...defaultDialogRendering.props} title={'Custom ' + defaultDialogRendering.props.title}>
                        {content}
                        <DialogActionsBar>
                            {cancelButton} {insertButton}
                        </DialogActionsBar>
                    </Dialog>
                );
                return createPortal(dialog, document.body);
            }}
        />
    );
};
