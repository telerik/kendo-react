import * as React from 'react';
import { DragAndDrop } from '@progress/kendo-react-common';
import { DraggableButton } from './draggable-button';
import { DroppableBox } from './droppable-box';

const boxes = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

const App = () => {
    const [box, setBox] = React.useState('A');

    const handleDrop = React.useCallback((id: string) => {
        setBox(id);
    }, []);

    return (
        <div style={{ height: 340, overflow: 'auto' }}>
            <div style={{ width: 1200, height: 1200, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
                <DragAndDrop>
                    {boxes.map((current) => (
                        <DroppableBox key={current} selected={box === current} id={current} onDrop={handleDrop}>
                            {box === current ? <DraggableButton /> : null}
                        </DroppableBox>
                    ))}
                </DragAndDrop>
            </div>
        </div>
    );
};

export default App;
