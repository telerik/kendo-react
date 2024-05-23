import * as React from 'react';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label, Error } from '@progress/kendo-react-labels';

const CustomStartDateInput = (props) => {
  const [value, setValue] = React.useState(new Date(props.value));
  const [valid, setValid] = React.useState(true);
  const style = {
    color: props.value !== null ? 'green' : 'red',
  };
  const compareDates = (date) => {
    let min = new Date(props.min).getTime();
    let newdate = new Date(date).getTime();

    if (min < newdate) {
      setValid(true);
    } else if (min > newdate) {
      setValid(false);
    } else {
      //equal
      setValid(true);
    }
  };
  const handleChange = (e) => {
    compareDates(new Date(e.value));
    setValue(new Date(e.value));
  };
  return (
    <div>
      <label
        style={{
          textAlign: 'center',
        }}
      >
        <span style={style}>Start</span> <br />
        <DateInput
          {...props}
          label={undefined}
          value={value}
          onChange={handleChange}
        />
      </label>
      <div>
        {!valid && <Error>{`value should be greater than ${props.min}`}</Error>}
      </div>
    </div>
  );
};
export default CustomStartDateInput;
