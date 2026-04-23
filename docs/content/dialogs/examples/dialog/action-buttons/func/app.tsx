import * as React from 'react';
import { ActionsLayout, Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

const App = () => {
    const [visible, setVisible] = React.useState(true);
    const [layout, setLayout] = React.useState<ActionsLayout>('stretched');

    const toggleDialog = () => {
        setVisible(!visible);
    };

    const onDeleteData = () => {
        alert('Data deleted.');
        setVisible(!visible);
    };

    const onChange = (e) => {
        setLayout(e.target.value);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-dialog">
                Open Dialog
            </Button>
            {visible && (
                <Dialog title={'Delete Data'} onClose={toggleDialog} width={350}>
                    <div className="example-config">
                        <RadioButton
                            name="layout"
                            value="start"
                            label="Start"
                            defaultChecked={layout === 'start'}
                            onClick={onChange}
                        />
                        <br />
                        <RadioButton
                            name="layout"
                            value="center"
                            label="Center"
                            defaultChecked={layout === 'center'}
                            onClick={onChange}
                        />
                        <br />
                        <RadioButton
                            name="layout"
                            value="end"
                            label="End"
                            defaultChecked={layout === 'end'}
                            onClick={onChange}
                        />
                        <br />
                        <RadioButton
                            name="layout"
                            value="stretched"
                            label="Stretched"
                            defaultChecked={layout === 'stretched'}
                            onClick={onChange}
                        />
                    </div>
                    <DialogActionsBar layout={layout}>
                        <Button type="button" themeColor={'primary'} onClick={toggleDialog}>
                            Cancel
                        </Button>
                        <Button type="button" onClick={onDeleteData}>
                            Delete
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </div>
    );
};
export default App;
