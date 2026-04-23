import * as React from 'react';

import { NumericTextBox, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [readonly, setReadOnly] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setReadOnly(event.value);
    };
    return (
        <div>
            <div>
                <Label>
                    Read-only&nbsp;&nbsp;
                    <Switch onChange={handleSwitchChange} />
                </Label>
                <br />
                <br />
            </div>
            <NumericTextBox defaultValue={10} width={300} readOnly={readonly} />
        </div>
    );
};

export default App;
