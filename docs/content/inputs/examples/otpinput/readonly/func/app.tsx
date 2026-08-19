import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <Label>
            Please enter the code we sent you
            <OTPInput readOnly={true} value="9316" />
        </Label>
    );
};

export default App;
