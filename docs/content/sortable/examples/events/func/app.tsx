import * as React from 'react';
import {
    Sortable,
    SortableItemUIProps,
    SortableOnDragStartEvent,
    SortableOnDragOverEvent,
    SortableOnNavigateEvent,
    SortableOnDragEndEvent
} from '@progress/kendo-react-sortable';
import { EventLog } from '@docs-shared/EventLog';

const getBaseItemStyle = (isActive) => ({
    height: 70,
    lineHeight: '68px',
    fontSize: '16px',
    textAlign: 'center',
    outline: 'none',
    border: '1px solid',
    cursor: 'move',
    display: 'inline-block',
    background: isActive ? '#27aceb' : '#bfe7f9',
    color: isActive ? '#fff' : '#1494d0',
    borderColor: isActive ? '#27aceb' : '#fff'
});

const SortableItemUI = (props: SortableItemUIProps) => {
    const { isDisabled, isActive, style, attributes, dataItem, forwardRef } = props;
    const classNames = ['col-xs-6 col-sm-3'];

    if (isDisabled) {
        classNames.push('k-disabled');
    }

    return (
        <div
            ref={forwardRef}
            {...attributes}
            style={{
                ...getBaseItemStyle(isActive),
                ...style
            }}
            className={classNames.join(' ')}
        >
            {dataItem.text}
        </div>
    );
};

const App = () => {
    const [data, setData] = React.useState<Array<object>>([
        { id: 1, text: 'item1' },
        { id: 2, text: 'item2' },
        { id: 3, text: 'item3' },
        { id: 4, text: 'item4' },
        { id: 5, text: 'item5' },
        { id: 6, text: 'item6' },
        { id: 7, text: 'item7' },
        { id: 8, text: 'item8' }
    ]);
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (message: string) => setEvents((prev) => [message, ...prev]);

    const onDragStart = (event: SortableOnDragStartEvent) => {
        log(`Drag start: previous index:${event.prevIndex}`);
    };

    const onDragOver = (event: SortableOnDragOverEvent) => {
        setData(event.newState);
        log(`Drag over: previous index:${event.prevIndex}, next index: ${event.nextIndex}`);
    };

    const onDragEnd = (event: SortableOnDragEndEvent) => {
        log(`Drag end: previous index:${event.prevIndex}, next index: ${event.nextIndex}`);
    };

    const onNavigate = (event: SortableOnNavigateEvent) => {
        setData(event.newState);
        log(`Keyboard navigation: previous index:${event.prevIndex}, next index: ${event.nextIndex}`);
    };

    return (
        <div className="container-fluid">
            <EventLog events={events} onClear={() => setEvents([])}>
                <Sortable
                    idField={'id'}
                    disabledField={'disabled'}
                    data={data}
                    itemUI={SortableItemUI}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}
                    onNavigate={onNavigate}
                />
            </EventLog>
        </div>
    );
};
export default App;
