import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [opened, setOpened] = React.useState<boolean>(true);

    const open = () => setOpened(true);
    const close = () => setOpened(false);

    return (
        <div>
            {!opened && (
                <Button type="button" onClick={open} id="open-dialog">
                    Open Dialog
                </Button>
            )}
            {opened && (
                <Dialog title={'Please confirm'} onClose={close} minWidth={250} width={450}>
                    <p style={{ margin: '30px', textAlign: 'center' }}>Are you sure you want to continue?</p>
                    <DialogActionsBar>
                        <Button type="button" onClick={close}>
                            No
                        </Button>
                        <Button type="button" themeColor="primary" onClick={close}>
                            Yes
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};

export default App;
