import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div className="parent-container" ref={containerRef}>
            <p className="container-label">Parent Container</p>
            <Button type="button" onClick={toggleDialog}>
                Open Dialog
            </Button>
            {visible && (
                <Dialog
                    title="Centered Dialog"
                    onClose={toggleDialog}
                    appendTo={containerRef.current}
                    style={{
                        position: 'absolute',
                        //use CSS transform to contain the overlay in the parent container
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <p style={{ margin: '25px', textAlign: 'center' }}>
                        This Dialog is centered within the parent container, not the viewport.
                    </p>
                    <DialogActionsBar>
                        <Button type="button" onClick={toggleDialog}>
                            Close
                        </Button>
                        <Button type="button" themeColor="primary" onClick={toggleDialog}>
                            OK
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};

export default App;
