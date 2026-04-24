import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';
import CustomPopup from './customPopup';

const App = () => {
    return (
        <div>
            <p>Enter time:</p>
            <TimePicker popup={CustomPopup} width={300} />
        </div>
    );
};

export default App;
