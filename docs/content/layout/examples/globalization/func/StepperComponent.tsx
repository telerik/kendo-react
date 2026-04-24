import * as React from 'react';
import { Stepper } from '@progress/kendo-react-layout';
import { lockIcon, trackChangesIcon, userIcon } from '@progress/kendo-svg-icons';

const stepperItems: Array<any> = [
    { label: 'Account Info', svgIcon: lockIcon },
    { label: 'Personal Info', svgIcon: userIcon },
    { label: 'Payment Details', svgIcon: trackChangesIcon, optional: true }
];

const StepperComponent = (props) => {
    const { dir } = props;
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (e) => {
        setValue(e.value);
    };

    return (
      <Stepper  dir={dir} value={value} onChange={handleChange} items={stepperItems} />
    );
};

export default StepperComponent;
