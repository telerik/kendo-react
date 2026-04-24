import * as React from 'react';
import { Sortable, SortableItemUIProps ,SortableOnDragOverEvent, SortableOnNavigateEvent } from '@progress/kendo-react-sortable';

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
    const classNames = [ 'col-xs-6 col-sm-3' ];

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

    const onDragOver = (event: SortableOnDragOverEvent) => {
        setData(event.newState)
    }

    const onNavigate = (event: SortableOnNavigateEvent) => {
        setData(event.newState)
    }

    return (
    <div className="container-fluid">
      <div className="example-config">
        <h6>Items: {JSON.stringify(data)}</h6>
      </div>
      <Sortable
        idField={'id'}
        disabledField={'disabled'}
        data={data}

        itemUI={SortableItemUI}

        onDragOver={onDragOver}
        onNavigate={onNavigate}
          />
    </div>
    );
}

export default App;
