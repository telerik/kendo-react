import React, { useState } from 'react';
import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';

const items = [
    { label: 'Success Step', isValid: true },
    { label: 'Error Step', isValid: false },
    { label: 'Disabled Step', disabled: true },
    { label: 'Optional Step', optional: true }
];

const App = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e: StepperChangeEvent) => setValue(e.value);
    return <Stepper value={value} onChange={handleChange} items={items} />;
};

export default App;
