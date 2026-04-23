import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import CustomCalendar from './customCalendar';

const App = () => {
    return <DateRangePicker calendar={CustomCalendar} />;
};

export default App;
