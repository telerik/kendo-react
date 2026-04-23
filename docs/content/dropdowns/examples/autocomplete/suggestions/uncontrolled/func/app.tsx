import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import countries from './shared-dd-countries';

const App = () => {
    return (
        <div className="example-wrapper" style={{ height: 90, minHeight: 90 }}>
            <Label>
                Enter text <br />
                <AutoComplete data={countries} suggest={true} placeholder="e.g. Austria" style={{ width: '300px' }} />
            </Label>
        </div>
    );
};

export default App;
