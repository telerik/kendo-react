import * as React from 'react';

import { ToggleButton, ToggleButtonProps } from '@progress/kendo-react-dateinputs';

const CustomToggleButton = (props: ToggleButtonProps) => {
    return (
    <ToggleButton {...props}>
      <span className="k-icon k-i-sort-desc-sm" />
    </ToggleButton>
    );
}

export default CustomToggleButton
