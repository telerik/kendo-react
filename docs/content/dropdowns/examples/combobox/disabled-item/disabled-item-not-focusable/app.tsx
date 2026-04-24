import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
const App = () => {
    const sizes = [
        { id: 1, name: 'X-Small' },
        { id: 2, name: 'Small' },
        { id: 3, name: 'Medium', disabled: true },
        { id: 4, name: 'Large' },
        { id: 5, name: 'X-Large', disabled: true },
        { id: 6, name: '2X-Large' }
    ];

    const [value, setValue] = React.useState();

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
                data={sizes}
                dataItemKey="id"
                textField="name"
                value={value}
                onChange={handleOnChange}
                skipDisabledItems={true}
            />
        </div>
    );
};

export default App;
