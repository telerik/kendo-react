import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';

const sports = [
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 }
];

const App = () => {
    const [value, setValue] = React.useState([
        // Since the items references of the initial value are not from the 'sports' collection,
        // 'dataItemKey' have to be set.
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 }
    ]);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div className="example-config">Selected Values: {JSON.stringify(value)}</div>
            <div>Favorite sports:</div>
            <MultiSelect
                data={sports}
                onChange={handleChange}
                value={value}
                textField="text"
                dataItemKey="id"
                style={{ width: '300px' }}
                placeholder="Please select ..."
            />
        </div>
    );
};

export default App;
