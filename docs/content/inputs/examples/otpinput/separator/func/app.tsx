import * as React from 'react';
import { OTPInput, OTPInputChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    const [value1, setValue1] = React.useState('5042');
    const [value2, setValue2] = React.useState('9136');

    return (
        <div className="wrapper">
            <Label>
                Group length 1
                <OTPInput
                    length={4}
                    groupLength={1}
                    separator="/"
                    value={value1}
                    onChange={(e: OTPInputChangeEvent) => setValue1(e.value)}
                />
            </Label>
            <Label>
                Group length [1, 2, 1]
                <OTPInput
                    length={4}
                    groupLength={[1, 2, 1]}
                    separator="#"
                    value={value2}
                    onChange={(e: OTPInputChangeEvent) => setValue2(e.value)}
                />
            </Label>
        </div>
    );
};

export default App;
