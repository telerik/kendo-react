import * as React from 'react';

import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
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

    const [value, setValue] = React.useState('');

    const onChange = (event: AutoCompleteChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <Label>
                Select country <br />
                <AutoComplete
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
