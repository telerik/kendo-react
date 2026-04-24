import { DateInput, DateInputProps } from '@progress/kendo-react-dateinputs';
import * as React from 'react';

export const CustomDateInput = (props: DateInputProps) => {
    return <DateInput {...props} clearButton />;
};
