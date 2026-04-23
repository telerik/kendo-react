import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { CustomPopup } from './customPopup';

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <DateRangePicker popup={CustomPopup} />
        </div>
    );
};

export default App;
