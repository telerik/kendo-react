import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const handleClose = () => {
        setVisible(false);
    };
    return (
        <div>
            {visible && (
                <Dialog height={300} width={450} onClose={handleClose}>
                    <p style={{ margin: '25px', textAlign: 'center' }}>Add Delivery Address</p>
                    <div>
                        <div>
                            <Label>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '50px',
                                        textAlign: 'right',
                                        paddingRight: '0.5em'
                                    }}
                                >
                                    Street:
                                </span>
                                <Input type="text" style={{ width: '27em', maxWidth: '70%' }} autoFocus={true} />
                            </Label>
                        </div>
                        <div>
                            <Label>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '50px',
                                        textAlign: 'right',
                                        paddingRight: '0.5em'
                                    }}
                                >
                                    City:
                                </span>
                                <Input type="text" style={{ width: '27em', maxWidth: '70%' }} />
                            </Label>
                        </div>
                        <div>
                            <Label>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '50px',
                                        textAlign: 'right',
                                        paddingRight: '0.5em'
                                    }}
                                >
                                    State:
                                </span>
                                <Input type="text" style={{ width: '27em', maxWidth: '70%' }} />
                            </Label>
                        </div>
                        <div>
                            <Label>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '50px',
                                        textAlign: 'right',
                                        paddingRight: '0.5em'
                                    }}
                                >
                                    Zip:
                                </span>
                                <Input type="text" style={{ width: '27em', maxWidth: '70%' }} />
                            </Label>
                        </div>
                    </div>
                    <DialogActionsBar>
                        <Button type="button">Verify Address</Button>
                        <Button type="button">Add</Button>
                        <Button themeColor={'primary'} type="button">
                            Cancel
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};
export default App;
