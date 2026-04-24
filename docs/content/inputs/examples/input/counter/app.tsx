import * as React from 'react';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { Hint } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState<string>('');
    const max: number = 20;

    const handleChange = (e: InputChangeEvent) => {
        setValue(e.value);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{ textAlign: 'center', width: 250 }}>
                <div>Message:</div>
                <br />
                <Input maxLength={max} value={value} onChange={handleChange} placeholder="Type your message here" />

                <Hint direction={'end'}>
                    {value.length} / {max}
                </Hint>
            </div>
        </div>
    );
};

export default App;
