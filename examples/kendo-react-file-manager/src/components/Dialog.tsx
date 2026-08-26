import * as React from 'react';
import { Dialog as DialogComponent, DialogActionsBar, DialogCloseEvent } from '@progress/kendo-react-dialogs';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { getName } from '../helpers/helperMethods';
import { Button } from "@progress/kendo-react-buttons";

export const EditDialog = (props) => {
  const [inputValue, setInputValue] = React.useState(() => getName(props.editValue.path) || '');

  const handleDialogClick = (type: 'rename' | 'cancel') => {
    props.onDialogClick({
      path: props.editValue.path,
      value: inputValue,
      type
    });
  };

  const handleDialogClose = (event: DialogCloseEvent) => {
    props.onDialogClose(event);
  };

  const handleInputChange = (event: InputChangeEvent) => {
    setInputValue(event.value);
  };

  return (
    <DialogComponent title={'Please confirm'} onClose={handleDialogClose}>
      <p style={{ width: '350px', margin: '25px', textAlign: 'center' }}>Enter new name for the file.</p>
      <Input
        maxLength={40}
        value={inputValue}
        style={{ width: '350px', margin: '25px', textAlign: 'center' }}
        className={'k-textbox'}
        onChange={handleInputChange}
      />
      <DialogActionsBar>
        <Button themeColor='primary' onClick={() => handleDialogClick('rename')}>Rename</Button>
        <Button themeColor='base' onClick={() => handleDialogClick('cancel')}>Cancel</Button>
      </DialogActionsBar>
    </DialogComponent>
  );
}

export const DeleteDialog = (props) => {
  const handleDialogClick = (type: 'delete' | 'cancel') => {
    props.onDialogClick({
      type
    });
  };

  const handleDialogClose = (event) => {
    props.onDialogClose(event);
  };

  return (
    <DialogComponent title={'Please confirm'} onClose={handleDialogClose}>
      <p style={{ width: '350px', margin: '25px', textAlign: 'center' }}>Are you sure you want to delete the selected file? You cannot undo this action.</p>
      <DialogActionsBar>
        <Button themeColor='error' fillMode='outline' onClick={() => handleDialogClick('delete')}>Delete</Button>
        <Button themeColor='base' onClick={() => handleDialogClick('cancel')}>Cancel</Button>
      </DialogActionsBar>
    </DialogComponent>
  );
}
