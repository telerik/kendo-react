import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import CustomToggleButton from './customToggleButton';
import { CustomCalendar } from './customCalendar';

const App = () => {
    return (
      <div>
        <p>Select date:</p>
        <DatePicker
          calendar={CustomCalendar}
          toggleButton={CustomToggleButton}
          width={300}
        />
      </div>
    );
};

export default App;
