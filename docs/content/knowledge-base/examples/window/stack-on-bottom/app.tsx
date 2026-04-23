import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    const [window1Visible, setWindow1Visible] = React.useState<boolean>(false);
    const [window2Visible, setWindow2Visible] = React.useState<boolean>(false);

    const toggleWindow1 = () => {
        setWindow1Visible(!window1Visible);
    };

    const toggleWindow2 = () => {
        setWindow2Visible(!window2Visible);
    };

    return (
        <div style={{ height: '100%' }}>
            <Button onClick={toggleWindow1} style={{ marginRight: '20px' }}>
                Open Window 1
            </Button>

            <Button onClick={toggleWindow2}>Open Window 2</Button>
            {window1Visible && (
                <Window
                    title={'Status 1'}
                    onClose={toggleWindow1}
                    draggable={false}
                    appendTo={document.getElementById('windowsWrapper')}
                />
            )}
            {window2Visible && (
                <Window
                    title={'Status 2'}
                    draggable={false}
                    onClose={toggleWindow2}
                    appendTo={document.getElementById('windowsWrapper')}
                />
            )}
            <div id="windowsWrapper"></div>
        </div>
    );
};

export default App;
