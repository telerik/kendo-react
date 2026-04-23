import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    return (
        <div>
            <DatePicker placeholder="" label="Date of Birth" width={300} />
        </div>
    );
};

export default App;
