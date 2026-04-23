import * as React from 'react';
import { NumericTextBox, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';

import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [showSpinners, setShowSpinners] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setShowSpinners(event.value);
    };

    return (
        <div>
            <Label>
                Toggle Spinner Buttons&nbsp;&nbsp;
                <Switch checked={showSpinners} onChange={handleSwitchChange} />
            </Label>
            &nbsp;&nbsp;
            <br />
            <br />
            <div>Set value:</div>
            <NumericTextBox width={300} defaultValue={5} spinners={showSpinners} step={2} />
        </div>
    );
};

export default App;
