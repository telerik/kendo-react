import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import { Switch } from '@progress/kendo-react-inputs';

const App = () => {
    const [disabled, setDisabled] = React.useState<boolean>(true);
    return (
        <div className="example-wrapper">
            <Label className="k-mb-4">
                Disable DatePicker &nbsp;
                <Switch onChange={() => setDisabled(!disabled)} checked={disabled} />
            </Label>

            <DatePicker disabled={disabled} defaultValue={new Date()} defaultShow />
        </div>
    );
};

export default App;
