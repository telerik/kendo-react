import * as React from 'react';
import { DragAndDrop } from '@progress/kendo-react-common';
import { DraggableButton } from './draggable-button';
import { DroppableBox } from './droppable-box';

const EvenDragContext = React.createContext({});
const OddDragContext = React.createContext({});

const App = () => {
    const [odd, setOdd] = React.useState(1);
    const [even, setEven] = React.useState(2);

    const handleDrop = React.useCallback((index: number, setter) => {
        setter(index);
    }, []);

    return (
        <div style={{ height: 300, display: 'grid', gridGap: 10, gridTemplateColumns: '30% 30% 30%' }}>
            <DragAndDrop context={EvenDragContext}>
                <DragAndDrop context={OddDragContext}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                        const isEven = index % 2 === 0;

                        return isEven ? (
                            <DroppableBox
                                accent={'lightgreen'}
                                selected={index === even}
                                id={index}
                                onDrop={handleDrop.bind(null, index, setEven)}
                                key={index}
                                context={EvenDragContext}
                            >
                                {index === even ? <DraggableButton accent={'green'} context={EvenDragContext} /> : null}
                            </DroppableBox>
                        ) : (
                            <DroppableBox
                                accent={'lightcoral'}
                                selected={index === odd}
                                id={index}
                                onDrop={handleDrop.bind(null, index, setOdd)}
                                key={index}
                                context={OddDragContext}
                            >
                                {index === odd ? <DraggableButton accent={'red'} context={OddDragContext} /> : null}
                            </DroppableBox>
                        );
                    })}
                </DragAndDrop>
            </DragAndDrop>
        </div>
    );
};

export default App;
