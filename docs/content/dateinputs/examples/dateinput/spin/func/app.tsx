import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [spinners, setSpinners] = React.useState<boolean>(true);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Label>
                Show Spin Buttons &nbsp;
                <Switch onChange={() => setSpinners(!spinners)} checked={spinners} />
            </Label>
            <DateInput spinners={spinners} width={300} />
        </div>
    );
};

export default App;
