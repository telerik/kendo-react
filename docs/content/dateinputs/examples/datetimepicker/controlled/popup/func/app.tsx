import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import { Switch } from '@progress/kendo-react-inputs';

const App = () => {
    const [show, setShow] = React.useState<boolean>(true);
    return (
        <div className="example-wrapper">
            <Label className="k-mb-4">
                Show Popup &nbsp;
                <Switch onChange={() => setShow(!show)} checked={show} />
            </Label>

            <DateTimePicker show={show} defaultValue={new Date()} />
        </div>
    );
};

export default App;
