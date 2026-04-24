import * as React from 'react';
import { Rating, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [disabled, setDisabled] = React.useState(true);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setDisabled(event.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: 20 }}>
                <Label>
                    Disabled&nbsp;&nbsp;
                    <Switch onChange={handleSwitchChange} checked={disabled} />
                </Label>
            </div>

            <Rating defaultValue={3} disabled={disabled} max={3} />
        </div>
    );
};

export default App;
