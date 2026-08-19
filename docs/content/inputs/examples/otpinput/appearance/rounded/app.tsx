import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem' }}>
            <Label>
                Small
                <OTPInput rounded="small" />
            </Label>
            <Label>
                Medium
                <OTPInput rounded="medium" />
            </Label>
            <Label>
                Large
                <OTPInput rounded="large" />
            </Label>
            <Label>
                Full
                <OTPInput rounded="full" />
            </Label>
            <Label>
                None
                <OTPInput rounded="none" />
            </Label>
        </div>
    );
};

export default App;
