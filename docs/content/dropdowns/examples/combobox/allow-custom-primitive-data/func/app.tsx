import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

const App = () => {
    const sizes = ['Small', 'Medium', 'Large'];

    const [value, setValue] = React.useState('Medium');

    const onChange = (event: ComboBoxChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div>
                Custom values are <strong>enabled</strong>.
            </div>
            <p>
                <i>primitive data</i>
            </p>
            <div>
                <div>Select value:</div>
                <ComboBox
                    data={sizes}
                    value={value}
                    onChange={onChange}
                    allowCustom={true}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
        </div>
    );
};

export default App;
