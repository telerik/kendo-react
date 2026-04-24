import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const data = [
    { label: 'Vegetarian', value: 'vegetarian', disabled: true },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Gluten-Free', value: 'gluten-free' },
    { label: 'Regular', value: 'regular', disabled: true }
];

const App = () => {
    return <RadioGroup defaultValue={data[2].value} data={data} />;
};

export default App;
