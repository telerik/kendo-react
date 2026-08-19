import * as React from 'react';
import { OTPInput } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    return (
        <div className="wrapper">
            <div className="input-wrapper">
                <Label className="k-display-block">
                    Input mode: &apos;text&apos; (default)
                    <OTPInput inputAttributes={{ inputMode: 'text' }} defaultValue="kr26" />
                </Label>
            </div>
            <div className="input-wrapper">
                <Label className="k-display-block">
                    Input mode: &apos;numeric&apos;
                    <OTPInput inputAttributes={{ inputMode: 'numeric' }} defaultValue="1204" />
                </Label>
            </div>
        </div>
    );
};

export default App;
