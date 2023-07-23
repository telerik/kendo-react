import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
  const [rangePickerValidation, setRangePickerValidation] =
    React.useState(true);

  //Setting the valid property of the DateRangePicker to false if start date is after end date
  const rangePickerChange = (ev) => {
    setRangePickerValidation(ev.value.start < ev.value.end);
  };
  return (
    <div className="example-wrapper">
      <DateRangePicker
        valid={rangePickerValidation}
        onChange={rangePickerChange}
      />
      {!rangePickerValidation && (
        <div>
          <span
            className="k-text-error"
            style={{ fontStyle: 'italic', fontSize: '10px' }}
          >
            * Start date should be before End date
          </span>
        </div>
      )}
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
