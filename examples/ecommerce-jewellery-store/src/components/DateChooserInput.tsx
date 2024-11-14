import * as React from 'react';
import { DateInput } from '@progress/kendo-react-dateinputs';

const DateChooserInput: React.FC  = () => {
    const [value, setValue] = React.useState<Date | null>(new Date(2017, 1, 13));
    const min = new Date(2000, 2, 10);
    const max = new Date(2020, 2, 10);

    const changeDate = (event: DateInputChangeEvent) => {
        setValue(event.value);
    };

  return <div>
            <DateInput value={value} min={min} max={max} onChange={changeDate} />
        </div>;
};

export default DateChooserInput;