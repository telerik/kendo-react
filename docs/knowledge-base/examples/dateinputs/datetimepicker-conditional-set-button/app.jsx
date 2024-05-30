import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Calendar } from '@progress/kendo-react-dateinputs';

const App = () => {
  const [value, setValue] = React.useState(new Date());
  const [valid, setValid] = React.useState();

  const CustomCalendar = (props) => {
    const handleCalendarChange = (e) => {
      let date1 = e.value;
      let date2 = new Date();

      if (date1 <= date2) {
        document
          .getElementsByClassName('k-time-accept')[0]
          .classList.remove('k-disabled');
        setValid(true);
      } else {
        document
          .getElementsByClassName('k-time-accept')[0]
          .classList.add('k-disabled');
        setValid(false);
      }

      props.onChange(e);
      setValue(e.value);
    };

    return (
      <Calendar
        {...props}
        value={props.value}
        onChange={handleCalendarChange}
      />
    );
  };

  const handleChange = (e) => {
    setValue(e.value);
  };

  return (
    <div>
      <p>Enter date:</p>
      <DateTimePicker
        valid={valid}
        value={value}
        calendar={CustomCalendar}
        width={300}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;