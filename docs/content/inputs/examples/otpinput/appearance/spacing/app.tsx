import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', padding: '1.5rem' }}>
            <Label>
                Spacing (default)
                <OTPInput spacing={true} />
            </Label>
            <Label>
                No spacing
                <OTPInput spacing={false} />
            </Label>
        </div>
    );
};

export default App;
