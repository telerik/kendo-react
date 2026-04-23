import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [disabled, setDisabled] = React.useState<boolean>(true);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Label>
                Disable Calendar &nbsp;
                <Switch onChange={() => setDisabled(!disabled)} checked={disabled} />
            </Label>
            <Calendar disabled={disabled} />
        </div>
    );
};

export default App;
