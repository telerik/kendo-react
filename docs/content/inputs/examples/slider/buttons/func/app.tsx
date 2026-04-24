import * as React from 'react';

import { Slider } from '@progress/kendo-react-inputs';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [toggleButtons, setToggleButton] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setToggleButton(event.value);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <Label className="mb-2">
                Toggle Buttons&nbsp;&nbsp;
                <Switch onChange={handleSwitchChange} />
            </Label>
            <br />
            <Slider buttons={toggleButtons} min={1} max={10} step={1} defaultValue={7} />
        </div>
    );
};

export default App;
