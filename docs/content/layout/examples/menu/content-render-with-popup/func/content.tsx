import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

const Content = (props: any) => {
    const dropDown = React.useRef<any>(undefined);

    const handleFilter = (e) => {
        props.item.data.showChosenFilter(props.itemId, dropDown.current.value);
        props.item.data.resetMenu();
        // Stop propagation because the menu internally treats the event
        // as focusing of an item and otherwise the Menu will not be closed.
        e.stopPropagation();
    }

    const handleClear = (e) => {
        props.item.data.clearFilter();
        props.item.data.resetMenu();
        // Stop propagation because the menu internally treats the event
        // as focusing of an item and otherwise the Menu will not be closed.
        e.stopPropagation();
    }
    return (
    <div>
      <div style={{ padding: 5 }}>Show items with value that:</div>
      <DropDownList
        defaultValue="Is equal to"
        data={['Is equal to', 'Is not equal to', 'Starts with', 'Contains', 'Does not contain']}
        ref={dropDown}
      />
      <div style={{ padding: 5, fontStyle: 'italic' }}>text to search for</div>
      <div>
        <Button type="button" onClick={handleFilter}>Filter</Button>
        <Button type="button" onClick={handleClear}>Clear</Button>
      </div>
    </div >
    );
}


export default Content;
