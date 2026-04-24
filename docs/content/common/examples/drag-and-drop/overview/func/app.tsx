import * as React from 'react';
import { DragAndDrop } from '@progress/kendo-react-common';
import { DraggableButton } from './draggable-button';
import { DroppableBox } from './droppable-box';

const App = () => {
    const [box, setBox] = React.useState<string>('A');

    const handleDrop = React.useCallback((id: string) => {
        setBox(id);
    }, []);

    return (
        <div style={{ height: 300, display: 'grid', gridGap: 10, gridTemplateColumns: '50% 50%' }}>
            <DragAndDrop>
                <DroppableBox selected={box === 'A'} id="A" onDrop={handleDrop}>
                    {box === 'A' ? <DraggableButton /> : null}
                </DroppableBox>
                <DroppableBox selected={box === 'B'} id="B" onDrop={handleDrop}>
                    {box === 'B' ? <DraggableButton /> : null}
                </DroppableBox>
                <DroppableBox selected={box === 'C'} id="C" onDrop={handleDrop}>
                    {box === 'C' ? <DraggableButton /> : null}
                </DroppableBox>
                <DroppableBox selected={box === 'D'} id="D" onDrop={handleDrop}>
                    {box === 'D' ? <DraggableButton /> : null}
                </DroppableBox>
            </DragAndDrop>
        </div>
    );
};

export default App;
