import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [isResizable, setIsResizable] = React.useState<boolean>(false);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Checkbox
                id="resizeChkBox"
                onChange={() => setIsResizable(!isResizable)}
                label={'Enable/Disable resizing'}
            />
            {visible && (
                <Window title={'Resize me'} resizable={isResizable} onClose={toggleDialog}>
                    {isResizable ? 'I can be resized!' : 'I cannot be resized!'}
                </Window>
            )}
        </div>
    );
};
export default App;
