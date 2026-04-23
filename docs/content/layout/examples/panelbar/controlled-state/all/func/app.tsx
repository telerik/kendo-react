import * as React from 'react';
import { PanelBar, PanelBarSelectEventArguments, PanelBarUtils } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const items = [{
    id: '1',
    title: 'Home',
    children: [{
        id: '2',
        title: 'Decor'
    }, {
        id: '3',
        title: 'Furniture'
    }, {
        id: '4',
        title: 'Lights'
    }]
}, {
    id: '5',
    title: 'Kitchen',
    children: [{
        id: '6',
        title: 'Tables'
    }, {
        id: '7',
        title: 'Decor',
        children: [{
            id: '8',
            title: 'Lights'
        }, {
            id: '9',
            title: 'Candles'
        }, {
            id: '10',
            title: 'Cook books'
        }, {
            id: '11',
            title: 'Plates'
        }]
    }, {
        id: '12',
        title: 'Chairs'
    }]
}, {
    id: '13',
    title: 'Bathroom',
    disabled: true
}];

let dataItems: any = [];
const flatData = (data) => {
    if (!data) { return data; }

    for (let index = 0; index < data.length; index++) {
        const currentItem = { ...data[index] };
        dataItems.push(currentItem.id);

        if (currentItem.children && currentItem.children.length) {
            currentItem.children = flatData(currentItem.children);
        }
    }
    return dataItems;
};

const App = () => {
    let components = PanelBarUtils.mapItemsToComponents(items);
    const [expanded, setExpanded] = React.useState<string[]>(['1', '5']);

    const handleSelect = (event: PanelBarSelectEventArguments) => {
        if (event.expandedItems) {
            setExpanded(event.expandedItems);
        }
    };

    const handleCollapse = () => {
        setExpanded([]);
    };

    const handleExpand = () => {
        const flattenItemsIds = flatData(items);

        setExpanded(flattenItemsIds);
        dataItems = [];
    };

    return (
      <div>
        <Button onClick={handleCollapse}>
          Collapse All items
        </Button>
        <Button onClick={handleExpand}>
          Expand All items
        </Button>
        <PanelBar
          isControlled={true}
          expanded={expanded}
          children={components}
          onSelect={handleSelect}
        />
      </div>
    );
};

export default App;
