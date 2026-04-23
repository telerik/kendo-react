import * as React from 'react';
import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

const App = () => {
    const sports = [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 }
    ];
    const [value, setValue] = React.useState(
        // Since the reference of the initial value is not from the 'sports' collection,
        // 'dataItemKey' have to be set.
        { text: 'Football', id: 2 }
    );

    const handleChange = (event: ComboBoxChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div className="example-config">Selected Value: {JSON.stringify(value)}</div>
            <div>Select value:</div>
            <ComboBox
                data={sports}
                textField="text"
                dataItemKey="id"
                value={value}
                onChange={handleChange}
                placeholder="Please select ..."
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
