import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

const App = () => {
    const sizes = [
        { id: 1, text: 'Small' },
        { id: 2, text: 'Medium' },
        { id: 3, text: 'Large' }
    ];

    const [value, setValue] = React.useState({ id: 2, text: 'Medium' });

    const onChange = (event: ComboBoxChangeEvent) => {
        let value = event.value;

        if (value && value.id === undefined) {
            value = {
                ...value,
                id: new Date().getTime()
            };
        }

        setValue(value);
    };

    return (
        <>
            <p>
                Custom values are <strong>enabled</strong>. Type a custom value.
            </p>
            <p>ComboBox value: {JSON.stringify(value)}</p>
            <div className="example-wrapper" style={{ minHeight: 50 }}>
                <ComboBox
                    style={{ width: '300px' }}
                    data={sizes}
                    textField="text"
                    dataItemKey="id"
                    value={value}
                    onChange={onChange}
                    allowCustom={true}
                />
            </div>
        </>
    );
};

export default App;
