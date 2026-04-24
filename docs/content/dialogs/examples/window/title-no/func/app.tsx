import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Open Window
            </Button>
            {visible && <Window onClose={toggleDialog} />}
        </div>
    );
};
export default App;
