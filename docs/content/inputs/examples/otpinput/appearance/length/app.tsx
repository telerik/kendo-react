import * as React from 'react';
import { OTPInput, OTPInputChangeEvent, NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    const [length, setLength] = React.useState(6);
    const [value, setValue] = React.useState('');

    const handleLengthChange = (event: NumericTextBoxChangeEvent) => {
        const next = event.value ?? 1;
        setLength(next);
    };

    const handleChange = (event: OTPInputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <>
            <div className="example-config">
                <Label editorId="length-input" className="length-label">
                    LENGTH
                </Label>
                <NumericTextBox
                    style={{ width: 150 }}
                    format="n"
                    min={1}
                    value={length}
                    onChange={handleLengthChange}
                    id="length-input"
                />
            </div>
            <div className="example-config">
                <Label>
                    Please enter the code we sent you
                    <OTPInput placeholder="x" length={length} value={value} onChange={handleChange} />
                </Label>
            </div>
        </>
    );
};

export default App;
