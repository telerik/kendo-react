import * as React from 'react';

import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from "@progress/kendo-react-buttons";

export const MyDialog = (props) => {

  const toggleDialog = () => {
    props.changeVisible();
  };

  return (
    <div>
      <Dialog title={'Please confirm'} onClose={toggleDialog}>
        <p
          style={{
            margin: '25px',
            textAlign: 'center',
          }}
        >
          Are you sure you want to continue?
        </p>
        <DialogActionsBar>
          <Button
            onClick={toggleDialog}
          >
            No
          </Button>
          <Button
            onClick={toggleDialog}
          >
            Yes
          </Button>
        </DialogActionsBar>
      </Dialog>
    </div>
  );
};
