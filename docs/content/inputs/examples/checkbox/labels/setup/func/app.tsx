import * as React from 'react';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [labelBefore, setLabelBefore] = React.useState(false);

    const handleSwitchChange = (e: SwitchChangeEvent) => {
        setLabelBefore(e.value);
    };

    return (
        <div className="d-flex flex-wrap justify-content-center gap-container">
            <div className="d-flex flex-column align-items-start">
                <Switch checked={labelBefore} onChange={handleSwitchChange} />
                <br />
                <Checkbox
                    id={'checkbox'}
                    label={'Checkbox label'}
                    labelPlacement={labelBefore ? 'before' : 'after'}
                    checked={true}
                />
            </div>
        </div>
    );
};

export default App;
