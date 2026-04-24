import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { TaskBoardConfirmDialogProps } from '@progress/kendo-react-taskboard';

export const ConfirmDialog = (props: TaskBoardConfirmDialogProps) => {
    const { onClose, onConfirm, dialogMessage, dialogTitle, dialogConfirmButton, dialogCancelButton } = props;

    return (
      <Dialog title={dialogTitle} closeIcon={false}>
        {dialogMessage}

        <DialogActionsBar layout='end'>
          <Button themeColor={'primary'} onClick={onConfirm}>
            {dialogConfirmButton}
          </Button>
          <Button onClick={onClose}>
            {dialogCancelButton}
          </Button>
        </DialogActionsBar>
      </Dialog>
    );
};
