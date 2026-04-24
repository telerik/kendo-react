import * as React from 'react';
import { DragAndDrop } from '@progress/kendo-react-common';
import { RadioGroup, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';
import { DraggableButton } from './draggable-button';
import { DroppableBox } from './droppable-box';

const data = [
    {
        label: 'Horizontal',
        value: 'horizontal'
    },
    {
        label: 'Vertical',
        value: 'vertical'
    }
];

export const AxisContext = React.createContext<['horizontal' | 'vertical']>(['horizontal']);

const App = () => {
    const [box, setBox] = React.useState('A');
    const [axis, setAxis] = React.useState<'horizontal' | 'vertical'>('horizontal');

    const handleDrop = React.useCallback((id: string) => {
        setBox(id);
    }, []);

    const handleAxisChange = React.useCallback((event: RadioGroupChangeEvent) => {
        setAxis(event.value);
    }, []);

    return (
        <div>
            <AxisContext.Provider value={[axis]}>
                <div className="example-config">
                    <RadioGroup value={axis} onChange={handleAxisChange} data={data} />
                </div>
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
            </AxisContext.Provider>
        </div>
    );
};

export default App;
