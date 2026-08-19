import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';

const sizes = [
    { id: 1, text: 'X-Small' },
    { id: 2, text: 'Small' },
    { id: 3, text: 'Medium' },
    { id: 4, text: 'Large' },
    { id: 5, text: 'X-Large' },
    { id: 6, text: '2X-Large' }
];

const App = () => {
    const [value, setValue] = React.useState<typeof sizes>([]);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <MultiSelect
                style={{ width: '300px' }}
                data={sizes}
                value={value}
                textField="text"
                dataItemKey="id"
                selectAll={true}
                onChange={handleChange}
                label="Select sizes"
            />
        </div>
    );
};

export default App;
