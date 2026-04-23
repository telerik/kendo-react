import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="example">
            <Label>
                Select Date
                <br />
                <DatePicker autoCorrectParts={false} width={300} />
            </Label>
        </div>
    );
};

export default App;
