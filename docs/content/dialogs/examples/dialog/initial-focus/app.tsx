import * as React from 'react';

import { Dialog } from '@progress/kendo-react-dialogs';
import { TextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState(true);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Button type="button" onClick={toggleDialog} id="open-dialog">
                Open Dialog
            </Button>
            {visible && (
                <Dialog title="Dialog Title" autoFocusedElement="#username" onClose={toggleDialog}>
                    <p style={{ margin: '30px', textAlign: 'center' }}>Please, provide your name</p>
                    <TextBox id="username" />
                </Dialog>
            )}
        </>
    );
};
export default App;
