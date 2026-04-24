import * as React from 'react';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

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
    const [value, setValue] = React.useState('Bulgaria');

    const handleChange = (event: DropDownListChangeEvent) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <div className="example-config">Selected Value: {value}</div>
            <Label editorId="country">Select country</Label>
            <br />
            <DropDownList
                id="country"
                style={{ width: '300px' }}
                data={countries}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default App;
