import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', padding: '1.5rem' }}>
            <Label>
                Small
                <OTPInput size="small" />
            </Label>
            <Label>
                Medium
                <OTPInput size="medium" />
            </Label>
            <Label>
                Large
                <OTPInput size="large" />
            </Label>
        </div>
    );
};

export default App;
