import * as React from 'react';
import { PanelBar, PanelBarSelectEventArguments, PanelBarUtils } from '@progress/kendo-react-layout';

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

const App = () => {
    let components = PanelBarUtils.mapItemsToComponents(items);
    const [expanded, setExpanded] = React.useState<string[]>(['5', '7'])

    const handleSelect = (event: PanelBarSelectEventArguments) => {
        if (event.expandedItems) {
            setExpanded(event.expandedItems);
        }
    }

    return (
        <PanelBar
            expanded={expanded}
            children={components}
            onSelect={handleSelect}
        />
    );
};

export default App;
