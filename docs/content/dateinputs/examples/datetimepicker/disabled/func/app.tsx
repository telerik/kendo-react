import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import { Switch } from '@progress/kendo-react-inputs';

const App = () => {
    const [disabled, setDisabled] = React.useState<boolean>(true);
    return (
        <div className="example-wrapper">
            <Label className="k-mb-4">
                Disable DateTimePicker &nbsp;
                <Switch onChange={() => setDisabled(!disabled)} checked={disabled} />
            </Label>

            <DateTimePicker disabled={disabled} defaultValue={new Date()} defaultShow />
        </div>
    );
};

export default App;
