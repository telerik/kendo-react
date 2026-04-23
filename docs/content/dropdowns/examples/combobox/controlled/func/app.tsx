import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

const App = () => {
    const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    const [value, setValue] = React.useState('Large');

    const handleChange = (event: ComboBoxChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div>T-shirt size:</div>
            <ComboBox style={{ width: '300px' }} data={sizes} value={value} onChange={handleChange} />
        </div>
    );
};

export default App;
