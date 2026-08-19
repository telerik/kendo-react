import * as React from 'react';
import { OTPInput, OTPInputChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { chevronDoubleRightIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const [value1, setValue1] = React.useState('1232');
    const [value2, setValue2] = React.useState('6408');

    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div className="wrapper">
                <Label>
                    Kendo SVG Icon
                    <OTPInput
                        length={4}
                        groupLength={2}
                        separator={{ type: 'svgIcon', value: chevronDoubleRightIcon }}
                        value={value1}
                        onChange={(e: OTPInputChangeEvent) => setValue1(e.value)}
                    />
                </Label>
                <Label>
                    Font Awesome Icon
                    <OTPInput
                        length={4}
                        groupLength={[1, 3]}
                        separator={{ type: 'iconClass', value: 'fa fa-arrow-right' }}
                        value={value2}
                        onChange={(e: OTPInputChangeEvent) => setValue2(e.value)}
                    />
                </Label>
            </div>
        </>
    );
};

export default App;
