import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-dialog">
                Open Dialog
            </Button>
            {visible && (
                <Dialog title={'Please confirm'} onClose={toggleDialog}>
                    <p style={{ margin: '25px', textAlign: 'center' }}>Are you sure you want to continue?</p>
                    <DialogActionsBar>
                        <Button type="button" onClick={toggleDialog}>
                            No
                        </Button>
                        <Button type="button" onClick={toggleDialog}>
                            Yes
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};
export default App;
