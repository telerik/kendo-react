import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const fruits: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Strawberry',
    'Grapes',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Blueberry',
    'Peach',
    'Cherry',
    'Pear',
    'Kiwi',
    'Papaya',
    'Pomegranate',
    'Lemon',
    'Lime',
    'Coconut',
    'Fig',
    'Plum',
    'Raspberry',
    'Blackberry',
    'Cantaloupe',
    'Guava',
    'Passion Fruit',
    'Apricot',
    'Dragon Fruit',
    'Cranberry',
    'Tangerine'
];

const App = () => {
    const [value, setValue] = React.useState<string[]>(['Orange', 'Apple']);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.value);
    };

    const selected = value.length;
    return (
        <div>
            <Label editorId="fruit">Select fruits</Label>
            <br />
            <MultiSelect
                id="fruit"
                style={{ width: '300px' }}
                data={fruits}
                value={value}
                onChange={handleChange}
                placeholder="Please select ..."
                tags={selected > 0 ? [{ text: `${selected} items selected`, data: [...value] }] : []}
            />
        </div>
    );
};

export default App;
