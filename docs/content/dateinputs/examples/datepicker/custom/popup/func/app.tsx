import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <Label>
            Select date <br />
            <DatePicker popupSettings={{ animate: false }} width={300} />
        </Label>
    );
};

export default App;
