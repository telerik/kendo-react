import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
const App = () => {
    const sizes = [
        { id: 1, name: 'X-Small' },
        { id: 2, name: 'Small' },
        { id: 3, name: 'Medium', disabled: true },
        { id: 4, name: 'Large' },
        { id: 5, name: 'X-Large', disabled: true },
        { id: 6, name: '2X-Large' }
    ];

    const [value, setValue] = React.useState<string[]>([]);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Label>
                Select size <br />
                <MultiSelect
                    style={{
                        width: '300px'
                    }}
                    data={sizes}
                    dataItemKey="id"
                    textField="name"
                    placeholder="e.g. Medium"
                    value={value}
                    onChange={handleOnChange}
                    skipDisabledItems={true}
                />
            </Label>
        </div>
    );
};

export default App;
