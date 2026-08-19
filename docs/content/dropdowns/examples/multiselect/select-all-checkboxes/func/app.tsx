import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';

const colors = [
    { id: 1, text: 'Red' },
    { id: 2, text: 'Orange' },
    { id: 3, text: 'Yellow' },
    { id: 4, text: 'Green' },
    { id: 5, text: 'Blue' },
    { id: 6, text: 'Indigo' },
    { id: 7, text: 'Violet' },
    { id: 12, text: 'Red' },
    { id: 23, text: 'Orange' },
    { id: 33, text: 'Yellow' },
    { id: 44, text: 'Green' },
    { id: 55, text: 'Blue' },
    { id: 66, text: 'Indigo' },
    { id: 77, text: 'Violet' },
    { id: 11, text: 'Red' },
    { id: 22, text: 'Orange' },
    { id: 34, text: 'Yellow' },
    { id: 45, text: 'Green' },
    { id: 56, text: 'Blue' },
    { id: 67, text: 'Indigo' },
    { id: 79, text: 'Violet' }
];

const App = () => {
    const [value, setValue] = React.useState<typeof colors>([]);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <MultiSelect
                style={{ width: '300px' }}
                data={colors}
                value={value}
                textField="text"
                dataItemKey="id"
                selectAll={true}
                checkboxes={true}
                onChange={handleChange}
                label="Select colors"
            />
        </div>
    );
};

export default App;
