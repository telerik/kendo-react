import * as React from 'react';
import { ActionsLayout, Window, WindowActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [layout, setLayout] = React.useState<ActionsLayout>('stretched');

    const toggleDialog = () => {
        setVisible(!visible);
    };

    const onChange = (e) => {
        setLayout(e.target.value);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Open Window
            </Button>
            {visible && (
                <Window title={'Status'} onClose={toggleDialog} initialHeight={350} initialWidth={350}>
                    <div className="example-config">
                        <RadioButton
                            id="start"
                            name="layout"
                            value="start"
                            defaultChecked={layout === 'start'}
                            onClick={onChange}
                        />
                        <Label editorId="start" className="k-radio-label">
                            Start
                        </Label>
                        <br />
                        <RadioButton
                            id="center"
                            name="layout"
                            value="center"
                            defaultChecked={layout === 'center'}
                            onClick={onChange}
                        />
                        <Label editorId="center" className="k-radio-label">
                            Center
                        </Label>
                        <br />
                        <RadioButton
                            id="end"
                            name="layout"
                            value="end"
                            defaultChecked={layout === 'end'}
                            onClick={onChange}
                        />
                        <Label editorId="end" className="k-radio-label">
                            End
                        </Label>
                        <br />
                        <RadioButton
                            id="stretched"
                            name="layout"
                            value="stretched"
                            defaultChecked={layout === 'stretched'}
                            onClick={onChange}
                        />
                        <Label editorId="stretched" className="k-radio-label">
                            Stretched
                        </Label>
                    </div>
                    <WindowActionsBar layout={layout}>
                        <Button type="button" onClick={toggleDialog}>
                            Cancel
                        </Button>
                        <Button type="button" themeColor={'primary'} onClick={toggleDialog}>
                            Submit
                        </Button>
                    </WindowActionsBar>
                </Window>
            )}
        </div>
    );
};
export default App;
