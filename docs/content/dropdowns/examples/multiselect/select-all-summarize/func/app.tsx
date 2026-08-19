import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';

const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
    { id: 7, text: 'Item 7' },
    { id: 8, text: 'Item 8' },
    { id: 9, text: 'Item 9' },
    { id: 10, text: 'Item 10' },
    { id: 11, text: 'Item 11' },
    { id: 12, text: 'Item 12' }
];

const App = () => {
    const [value, setValue] = React.useState<typeof items>([]);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <MultiSelect
                style={{ width: '300px' }}
                data={items}
                value={value}
                textField="text"
                dataItemKey="id"
                selectAll={true}
                summarizeAfter={3}
                onChange={handleChange}
                label="Select items"
            />
        </div>
    );
};

export default App;
