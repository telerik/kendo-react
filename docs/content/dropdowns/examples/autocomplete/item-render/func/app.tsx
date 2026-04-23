import * as React from 'react';

import { AutoComplete, ListItemProps } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const sports = [
    { id: 'sport-1', name: 'Baseball', icon: '⚾' },
    { id: 'sport-2', name: 'Basketball', icon: '🏀' },
    { id: 'sport-3', name: 'Cricket', icon: '🏏' },
    { id: 'sport-4', name: 'Field Hockey', icon: '🏑' },
    { id: 'sport-5', name: 'Football', icon: '🏈' },
    { id: 'sport-6', name: 'Table Tennis', icon: '🏓' },
    { id: 'sport-7', name: 'Tennis', icon: '🎾' },
    { id: 'sport-8', name: 'Volleyball', icon: '🏐' }
];
const App = () => {
    const itemRender = (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => {
        const itemChildren = (
            <span>
                {itemProps.dataItem.icon} {itemProps.dataItem.name}
            </span>
        );

        return React.cloneElement(li, li.props, itemChildren);
    };

    return (
        <div className="example-wrapper" style={{ minHeight: 80 }}>
            <Label>
                Select sport <br />
                <AutoComplete
                    style={{ width: '300px' }}
                    data={sports}
                    opened
                    textField="name"
                    placeholder="e.g. Football"
                    itemRender={itemRender}
                />
            </Label>
        </div>
    );
};

export default App;
