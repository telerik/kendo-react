import * as React from 'react';

import { ToggleButton, ToggleButtonProps } from '@progress/kendo-react-dateinputs';
import { calendarDateIcon } from '@progress/kendo-svg-icons';

const CustomToggleButton = (props: ToggleButtonProps) => {
    return <ToggleButton {...props} svgIcon={calendarDateIcon}></ToggleButton>;
};

export default CustomToggleButton;
