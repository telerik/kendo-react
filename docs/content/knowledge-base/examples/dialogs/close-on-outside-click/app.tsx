import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (!visible) {
            return;
        }

        const overlay = document.querySelector('.k-overlay');
        if (!overlay) {
            return;
        }

        const handleOverlayClick = () => setVisible(false);
        overlay.addEventListener('click', handleOverlayClick);

        return () => {
            overlay.removeEventListener('click', handleOverlayClick);
        };
    }, [visible]);

    return (
        <div style={{ padding: '20px' }}>
            <Button type="button" themeColor="primary" onClick={() => setVisible(true)}>
                Open Dialog
            </Button>
            {visible && (
                <Dialog title="Click Outside to Close" onClose={() => setVisible(false)}>
                    <p style={{ margin: '25px', textAlign: 'center' }}>
                        Click anywhere outside this Dialog to close it.
                    </p>
                    <DialogActionsBar>
                        <Button type="button" onClick={() => setVisible(false)}>
                            Close
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};

export default App;
