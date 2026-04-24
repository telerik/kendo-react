import * as React from 'react';
import { Dialog, Window } from '@progress/kendo-react-dialogs';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

const dialogActions: string[] = ['Yes', 'No'];

const App = () => {
    const [visibleDialog, setVisibleDialog] = React.useState<boolean>(false);
    const [visibleWindow, setVisibleWindow] = React.useState<boolean>(false);

    const onDialogToggle = () => {
        setVisibleDialog(!visibleDialog);
    };
    const onWindowToggle = () => {
        setVisibleWindow(!visibleWindow);
    };
    const onDialogAction = (event: DropDownListChangeEvent) => {
        if (event.value === dialogActions[0]) {
            setVisibleDialog(!visibleDialog);
            setVisibleWindow(!visibleWindow);
        } else {
            setVisibleDialog(!visibleDialog);
        }
    };

    return (
        <div>
            {!visibleDialog && !visibleWindow && (
                <span>
                    <Button type="button" onClick={onWindowToggle} id="open-window">
                        Open Window
                    </Button>
                </span>
            )}
            {visibleWindow && (
                <Window title={'Status'} onClose={onWindowToggle}>
                    <Button type="button" onClick={onDialogToggle} id="close-window">
                        Close Window
                    </Button>

                    {visibleDialog && (
                        <Dialog title={'Please confirm'} onClose={onDialogToggle}>
                            <Tooltip anchorElement="target" position="top">
                                <p style={{ margin: '25px', textAlign: 'center' }}>
                                    <a title="Select 'Yes' to close the Window.">
                                        Are you sure you want to close Window?
                                    </a>
                                </p>
                                <DropDownList
                                    data={dialogActions}
                                    defaultItem={'Please select'}
                                    onChange={onDialogAction}
                                />
                            </Tooltip>
                        </Dialog>
                    )}
                </Window>
            )}
        </div>
    );
};
export default App;
