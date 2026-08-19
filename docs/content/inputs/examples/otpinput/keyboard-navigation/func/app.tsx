import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { minusIcon } from '@progress/kendo-svg-icons';

const App = () => (
    <div className="example-col">
        <Label>
            Verification code
            <OTPInput length={6} groupLength={3} separator={{ type: 'svgIcon', value: minusIcon }} />
        </Label>
    </div>
);

export default App;
