import * as React from 'react';
import { OTPInput, OTPInputChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: OTPInputChangeEvent) => {
        console.log(event.value);
        setValue(event.value);
    };

    return (
        <div>
            <Label>
                Enter verification code
                <OTPInput type="number" length={4} value={value} onChange={handleChange} />
            </Label>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                <Button themeColor="primary" onClick={() => setValue('1234')}>
                    Set 1234
                </Button>
                <Button onClick={() => setValue('')}>Clear</Button>
            </div>
        </div>
    );
};

export default App;
