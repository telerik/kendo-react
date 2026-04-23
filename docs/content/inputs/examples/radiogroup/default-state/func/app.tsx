import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const data = [
    { label: 'Vegetarian', value: 'vegetarian' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Gluten-Free', value: 'gluten-free' },
    { label: 'Regular', value: 'regular' }
];

const App = () => {
    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div className="k-d-flex k-flex-col k-gap-2">
                <Label className="k-label">Type of Meal</Label>
                <RadioGroup defaultValue={data[3].value} data={data} layout="vertical" />
            </div>
        </div>
    );
};

export default App;
