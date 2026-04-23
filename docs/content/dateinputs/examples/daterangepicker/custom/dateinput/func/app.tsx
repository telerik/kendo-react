import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import CustomStartDateInput from './customStartDateInput';
import CustomEndDateInput from './customEndDateInput';

const App = () => {
    return <DateRangePicker startDateInput={CustomStartDateInput} endDateInput={CustomEndDateInput} />;
};

export default App;
