import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';

const App = () => {
    const sizes = [
        { id: 1, name: 'X-Small', type: 'Special Price' },
        { id: 2, name: 'Small', type: 'Regular Price' },
        { id: 3, name: 'Medium', disabled: true, type: 'Regular Price' },
        { id: 4, name: 'Large', type: 'Regular Price' },
        { id: 5, name: 'X-Large', disabled: true, type: 'In Production' },
        { id: 6, name: '2X-Large', type: 'Regular Price' },
        { id: 7, name: '3X-Large', type: 'In Production' },
        { id: 8, name: '4X-Large', disabled: true, type: 'In Production' },
        { id: 9, name: '5X-Large', type: 'Special Price' },
        { id: 10, name: '6X-Large', type: 'Special Price' }
    ];

    const [value, setValue] = React.useState();
    const [state, setState] = React.useState({
        groupedData: groupBy(sizes, [
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
            <div>T-shirt size:</div>
            <ComboBox
                style={{
                    width: '300px'
                }}
                data={state.groupedData}
                groupField="type"
                dataItemKey="id"
                textField="name"
                value={value}
                onChange={handleOnChange}
                skipDisabledItems={false}
            />
        </div>
    );
};

export default App;
