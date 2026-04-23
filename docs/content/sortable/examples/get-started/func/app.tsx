import * as React from 'react';
import { Sortable, SortableItemUIProps, SortableOnDragOverEvent } from '@progress/kendo-react-sortable';

const getBaseItemStyle = (isActive: boolean) => ({
    height: 70,
    lineHeight: '68px',
    fontSize: '16px',
    textAlign: 'center',
    outline: 'none',
    border: '1px solid',
    cursor: 'move',
    display: 'block',
    width: 200,
    background: isActive ? '#27aceb' : '#bfe7f9',
    color: isActive ? '#fff' : '#1494d0',
    borderColor: isActive ? '#27aceb' : '#fff'
});

const SortableItemUI = (props: SortableItemUIProps) => {
    const { attributes, dataItem, forwardRef, isActive, style } = props;

    return (
    <div
      ref={forwardRef}
      {...attributes}
      style={{ ...getBaseItemStyle(isActive), ...style }}
    >
      {dataItem.text}
    </div>
    );
};

const App = () => {
    const [data, setData] = React.useState<any[]>([
        {
            id: 1,
            text: 'item1'
        },
        {
            id: 2,
            text: 'item2'
        },
        {
            id: 3,
            text: 'item3'
        }
    ]);

    const onDragOver = (event: SortableOnDragOverEvent) => {
        setData(event.newState);
    };

    return (
    <div className="container-fluid">
      <Sortable
        idField={'id'}
        data={data}
        itemUI={SortableItemUI}
        onDragOver={onDragOver}
      />
    </div>
    );
};

export default App;
