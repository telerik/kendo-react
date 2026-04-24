import * as React from 'react';

import { DateInput, DateInputProps } from '@progress/kendo-react-dateinputs';

export const CustomDateInput = (props: DateInputProps) => {
    return <DateInput {...props} clearButton />;
};
