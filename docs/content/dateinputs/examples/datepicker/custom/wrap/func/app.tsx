import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import CustomPickerWrap from './customPickerWrap';
import CustomToggleButton from './customToggleButton';

const App = () => {
    return (
        <div>
            <p>Select date:</p>
            <DatePicker
                dateInput={() => null}
                toggleButton={CustomToggleButton}
                pickerWrap={CustomPickerWrap}
                width={300}
            />
        </div>
    );
};

export default App;
