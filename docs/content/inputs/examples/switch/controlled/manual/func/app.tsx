import * as React from 'react';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [checked, setChecked] = React.useState<boolean>(true);

    const handleToggleSwitch = () => {
        setChecked(!checked);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center gap-3">
                <Button type="button" onClick={handleToggleSwitch}>
                    Toggle
                </Button>
                <br />

                <Switch checked={checked} />
            </div>
        </div>
    );
};

export default App;
