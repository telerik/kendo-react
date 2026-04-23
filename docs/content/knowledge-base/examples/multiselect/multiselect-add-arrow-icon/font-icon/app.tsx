import * as React from 'react';

import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import './style.css';

const App = () => {
    const countries: string[] = [
        'Brazil',
        'Bulgaria',
        'Canada',
        'China',
        'France',
        'Germany',
        'India',
        'Italy',
        'Japan',
        'Mexico',
        'United Kingdom',
        'United States'
    ];

    const [value, setValue] = React.useState<string[]>([]);

    const onChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <Label>
                Select country <br />
                <MultiSelect
                    data={countries}
                    value={value}
                    onChange={onChange}
                    placeholder="e.g. Bulgaria"
                    style={{ width: '300px' }}
                />
            </Label>
        </div>
    );
};

export default App;
