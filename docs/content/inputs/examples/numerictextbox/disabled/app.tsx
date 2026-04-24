import * as React from 'react';
import { NumericTextBox, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [disabled, setDisabled] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setDisabled(event.value);
    };

    return (
        <div>
            <div>
                <Label>
                    Disable NumericTextBox &nbsp;
                    <Switch onChange={handleSwitchChange} />
                </Label>
                <br />
                <br />
            </div>
            <NumericTextBox placeholder="Enter quantity" width={300} disabled={disabled} />
        </div>
    );
};

export default App;
