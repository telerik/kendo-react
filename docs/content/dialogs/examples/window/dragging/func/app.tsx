import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [isDraggable, setIsDraggable] = React.useState<boolean>(false);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Checkbox id="resizeChkBox" onChange={() => setIsDraggable(!isDraggable)} label="Enable/Disable dragging" />
            {visible && (
                <Window title={'Move me'} draggable={isDraggable} onClose={toggleDialog}>
                    {isDraggable ? 'I can be moved!' : 'I cannot be moved!'}
                </Window>
            )}
        </div>
    );
};
export default App;
