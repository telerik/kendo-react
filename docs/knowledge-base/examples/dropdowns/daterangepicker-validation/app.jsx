import * as React from 'react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import CustomStartDateInput from './customStartDateInput';
import CustomEndDateInput from './customEndDateInput';
const App = () => {
  const min = new Date(2018, 8, 1);
  const max = new Date(2018, 9, 25);
  const defaultValue = {
    start: new Date(2018, 8, 5),
    end: new Date(2018, 9, 13),
  };
  return (
    <DateRangePicker
      startDateInput={CustomStartDateInput}
      endDateInput={CustomEndDateInput}
      min={min}
      max={max}
      defaultValue={defaultValue}
    />
  );
};
export default App;