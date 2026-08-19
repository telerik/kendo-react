import * as React from 'react';
import { OTPInput, OTPInputChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    const [numberValue, setNumberValue] = React.useState('1204');
    const [passwordValue, setPasswordValue] = React.useState('1204');
    const [textValue, setTextValue] = React.useState('b59g');

    return (
        <div className="wrapper">
            <div>
                <Label className="k-display-block">
                    Verification code
                    <OTPInput
                        type="number"
                        length={4}
                        value={numberValue}
                        onChange={(e: OTPInputChangeEvent) => setNumberValue(e.value)}
                    />
                </Label>
            </div>
            <div>
                <Label className="k-display-block">
                    Enter PIN
                    <OTPInput
                        type="password"
                        length={4}
                        value={passwordValue}
                        onChange={(e: OTPInputChangeEvent) => setPasswordValue(e.value)}
                    />
                </Label>
            </div>
            <div>
                <Label className="k-display-block">
                    SMS code
                    <OTPInput
                        type="text"
                        length={4}
                        value={textValue}
                        onChange={(e: OTPInputChangeEvent) => setTextValue(e.value)}
                    />
                </Label>
            </div>
        </div>
    );
};

export default App;
