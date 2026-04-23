import * as React from 'react';

import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const sports: string[] = [
        'Football',
        'Basketball',
        'Swimming',
        'Gymnastics',
        'Tennis',
        'Athletics',
        'Boxing',
        'Cycling',
        'Weightlifting',
        'Fencing'
    ];
    const [value, setValue] = React.useState<string[]>(['Football']);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <Label>
                Select sport <br />
                <MultiSelect
                    data={sports}
                    onChange={handleChange}
                    value={value}
                    placeholder="e.g. Football"
                    style={{ width: '300px' }}
                />
            </Label>
        </div>
    );
};

export default App;
