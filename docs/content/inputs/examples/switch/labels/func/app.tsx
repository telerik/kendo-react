import * as React from 'react';

import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Label>
                Labeled switch <br />
                <Switch size="large" onLabel={'On'} offLabel={'Off'} />
            </Label>
        </div>
    );
};

export default App;
