import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { groupBy } from '@progress/kendo-data-query';

const App = () => {
    const coffees = [
        { id: 1, name: 'Espresso', type: 'Special Blend' },
        { id: 2, name: 'Turkish Coffee', type: 'Special Blend' },
        { id: 3, name: 'Irish Coffee', type: 'Special Blend' },
        { id: 4, name: 'Americano', type: 'Classic' },
        { id: 5, name: 'Latte', disabled: true, type: 'Classic' },
        { id: 6, name: 'Cappuccino', type: 'Classic' },
        { id: 7, name: 'Mocha', type: 'Classic' },
        { id: 8, name: 'Macchiato', disabled: true, type: 'Limited Edition' },
        { id: 9, name: 'Flat White', type: 'Limited Edition' },
        { id: 10, name: 'Affogato', disabled: true, type: 'Limited Edition' }
    ];

    const [value, setValue] = React.useState();
    const [state, setState] = React.useState({
        groupedData: groupBy(coffees, [
            {
                field: 'groupTest'
            }
        ]).reduce((res, group) => [...res, ...group.items], [])
    });

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Label>
                Select coffee <br />
                <AutoComplete
                    style={{
                        width: '300px'
                    }}
                    data={state.groupedData}
                    placeholder="e.g. Espresso"
                    groupField="type"
                    dataItemKey="id"
                    textField="name"
                    value={value}
                    onChange={handleOnChange}
                    skipDisabledItems={false}
                />
            </Label>
        </div>
    );
};

export default App;
