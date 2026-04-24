import * as React from 'react';

import { Button, ButtonProps } from '@progress/kendo-react-buttons';

const CustomToggleButton = (props: ButtonProps) => {
    return (
        <Button {...props} style={{ width: '100px' }} type="button">
            {props.children}
            Pick a Date
        </Button>
    );
};

export default CustomToggleButton;
