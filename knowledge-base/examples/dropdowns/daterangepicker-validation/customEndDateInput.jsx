import * as React from 'react';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label, Error } from '@progress/kendo-react-labels';
const CustomEndDateInput = (props) => {
  const [value, setValue] = React.useState(new Date(props.value));
  const [valid, setValid] = React.useState(true);
  const style = {
    color: props.value !== null ? 'green' : 'red',
  };
  const compareDates = (date) => {
    let max = new Date(props.max).getTime();
    let newdate = new Date(date).getTime();

    if (max > newdate) {
      setValid(true);
    } else if (max < newdate) {
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
        <span style={style}>End</span> <br />
        <DateInput
          {...props}
          label={undefined}
          value={value}
          onChange={handleChange}
        />
      </label>
      <div>
        {!valid && <Error>{`value should be less than ${props.max}`}</Error>}
      </div>
    </div>
  );
};
export default CustomEndDateInput;
