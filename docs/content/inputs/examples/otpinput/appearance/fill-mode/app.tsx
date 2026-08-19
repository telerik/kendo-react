import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', padding: '1.5rem' }}>
            <Label>
                Solid
                <OTPInput fillMode="solid" />
            </Label>
            <Label>
                Flat
                <OTPInput fillMode="flat" />
            </Label>
            <Label>
                Outline
                <OTPInput fillMode="outline" />
            </Label>
        </div>
    );
};

export default App;
