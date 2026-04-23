import * as React from 'react';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    const [value, setValue] = React.useState('Large');

    const handleChange = (event: DropDownListChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Label>Select size</Label>
            <br />
            <DropDownList data={sizes} value={value} onChange={handleChange} style={{ width: '300px' }} />
        </div>
    );
};

export default App;
