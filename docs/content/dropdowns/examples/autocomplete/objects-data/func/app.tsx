import * as React from 'react';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const planets: { id: number; name: string }[] = [
        { id: 1, name: 'Mercury' },
        { id: 2, name: 'Venus' },
        { id: 3, name: 'Earth' },
        { id: 4, name: 'Mars' },
        { id: 5, name: 'Jupiter' },
        { id: 6, name: 'Saturn' },
        { id: 7, name: 'Uranus' },
        { id: 8, name: 'Neptune' }
    ];
    const [value, setValue] = React.useState('');

    const onChange = (event: AutoCompleteChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div className="example-config">Object Structure: &#123; id: number; name: string &#125;</div>
            <Label>
                Select planet <br />
                <AutoComplete
                    data={planets}
                    textField="name"
                    value={value}
                    onChange={onChange}
                    placeholder="e.g. Earth"
                    style={{ width: '300px' }}
                />
            </Label>
        </div>
    );
};

export default App;
