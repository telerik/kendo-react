import * as React from 'react';
import { Dialog as DialogComponent, DialogActionsBar, DialogCloseEvent } from '@progress/kendo-react-dialogs';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { getName } from '../helpers/helperMethods';
import { Button } from "@progress/kendo-react-buttons";

export const EditDialog = (props) => {
  const [inputValue, setInputValue] = React.useState(props.editValue);

  const handleDialogClick = (event) => {
    props.onDialogClick({
      event,
      path: props.editValue.path,
      value: typeof (inputValue) === 'string' ? inputValue : inputValue.path,
      type: event.target.value
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
        value={getName(inputValue.path)}
        style={{ width: '350px', margin: '25px', textAlign: 'center' }}
        className={'k-textbox'}
        onChange={handleInputChange}
      />
      <DialogActionsBar>
        <Button value={'rename'} themeColor='primary' onClick={handleDialogClick}>Rename</Button>
        <Button value={'cancel'} themeColor='base' onClick={handleDialogClick}>Cancel</Button>
      </DialogActionsBar>
    </DialogComponent>
  );
}

export const DeleteDialog = (props) => {
  const handleDialogClick = (event) => {
    props.onDialogClick({
      event,
      type: event.target.value
    });
  };

  const handleDialogClose = (event) => {
    props.onDialogClose(event);
  };

  return (
    <DialogComponent title={'Please confirm'} onClose={handleDialogClose}>
      <p style={{ width: '350px', margin: '25px', textAlign: 'center' }}>Are you sure you want to delete the selected file? You cannot undo this action.</p>
      <DialogActionsBar>
        <Button value={'delete'} themeColor='primary' onClick={handleDialogClick}>Delete</Button>
        <Button value={'cancel'} themeColor='base' onClick={handleDialogClick}>Cancel</Button>
      </DialogActionsBar>
    </DialogComponent>
  );
}
