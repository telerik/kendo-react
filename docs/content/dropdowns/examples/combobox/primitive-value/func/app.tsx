import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

const App = () => {
    const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    const [value, setValue] = React.useState(null);

    const handleChange = (event: ComboBoxChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div className="example-config">Selected Value: {value}</div>
            <div>Select value:</div>
            <ComboBox
                data={sizes}
                value={value}
                onChange={handleChange}
                placeholder="Please select ..."
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
