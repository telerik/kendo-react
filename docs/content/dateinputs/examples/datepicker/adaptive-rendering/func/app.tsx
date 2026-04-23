import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultValue = new Date();

    return (
        <div>
            <DatePicker
                defaultValue={defaultValue}
                label="Select date"
                adaptive={true}
                adaptiveSubtitle={'MM/DD/YYYY'}
            />
        </div>
    );
};
export default App;
