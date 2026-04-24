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
                <Dialog title={'Status'} onClose={toggleDialog} width={200} height={250}>
                    <p style={{ margin: '25px', textAlign: 'center' }}>Your escape pod is now ready.</p>
                    <DialogActionsBar>
                        <Button themeColor={'primary'} onClick={toggleDialog}>
                            Launch
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};
export default App;
