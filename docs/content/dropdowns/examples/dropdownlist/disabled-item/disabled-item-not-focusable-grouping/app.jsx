import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Hint } from '@progress/kendo-react-labels';
import { groupBy } from '@progress/kendo-data-query';

const App = () => {
    const architecturalWonders = [
        { id: 1, name: 'Great Pyramid of Giza', type: 'Ancient Wonder' },
        { id: 2, name: 'Colossus of Rhodes', disabled: true, type: 'Destroyed Wonder' },
        { id: 3, name: 'Eiffel Tower', type: 'Modern Landmark' },
        { id: 4, name: 'Sydney Opera House', type: 'Modern Landmark' },
        { id: 5, name: 'Taj Mahal', type: 'Cultural Heritage' },
        { id: 6, name: 'Machu Picchu', type: 'Ancient City' },
        { id: 7, name: 'Hanging Gardens of Babylon', disabled: true, type: 'Lost Wonder' },
        { id: 8, name: 'Temple of Artemis', disabled: true, type: 'Ruined Wonder' },
        { id: 9, name: 'The Parthenon', type: 'Ancient Landmark' },
        { id: 10, name: 'Petra', type: 'Historic Site' }
    ];

    const [value, setValue] = React.useState();
    const [state, setState] = React.useState({
        groupedData: groupBy(architecturalWonders, [
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
            <DropDownList
                style={{
                    width: '300px'
                }}
                data={state.groupedData}
                groupField="type"
                dataItemKey="id"
                textField="name"
                label="Select landmark"
                value={value}
                onChange={handleOnChange}
                skipDisabledItems={true}
                ariaDescribedBy="dropdownHint"
            />
            <Hint id="dropdownHint">(↑ and ↓ to navigate through the options)</Hint>
        </div>
    );
};

export default App;
