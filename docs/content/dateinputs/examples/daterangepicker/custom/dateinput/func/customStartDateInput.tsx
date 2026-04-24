import * as React from 'react';

import { DateInput, DateInputProps } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const CustomStartDateInput = (props: DateInputProps) => {
    const style = { color: props.value !== null ? 'green' : 'red' };

    return (
        <Label style={{ textAlign: 'center' }}>
            <span style={style}>Start</span> <br />
            <DateInput {...props} label={undefined} />
        </Label>
    );
};

export default CustomStartDateInput;
