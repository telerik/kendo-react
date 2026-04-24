import React, { useState } from 'react';
import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';
import { cartIcon, dollarIcon, eyeIcon, mapMarkerIcon, trackChangesAcceptIcon } from '@progress/kendo-svg-icons';

const items = [
    { label: 'Cart', svgIcon: cartIcon },
    { label: 'Delivery Address', svgIcon: mapMarkerIcon },
    { label: 'Payment Method', svgIcon: dollarIcon },
    { label: 'Preview', svgIcon: eyeIcon, optional: true },
    { label: 'Finish Order', svgIcon: trackChangesAcceptIcon }
];

const App = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e: StepperChangeEvent) => setValue(e.value);
    return <Stepper value={value} onChange={handleChange} items={items} />;
};

export default App;
