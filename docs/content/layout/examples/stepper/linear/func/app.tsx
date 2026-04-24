import * as React from 'react';

import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';
import { cartIcon, dollarIcon, eyeIcon, mapMarkerIcon, trackChangesAcceptIcon } from '@progress/kendo-svg-icons';

const items = [
    { label: 'Cart', svgIcon: cartIcon },
    { label: 'Delivery Address', svgIcon: mapMarkerIcon },
    { label: 'Payment Method', svgIcon: dollarIcon },
    { label: 'Preview', svgIcon: eyeIcon },
    { label: 'Finish Order', svgIcon: trackChangesAcceptIcon }
];

const App = () => {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (e: StepperChangeEvent) => {
        setValue(e.value);
    };

    return (
      <Stepper value={value} onChange={handleChange} items={items} linear={true} />
    );
};

export default App;
