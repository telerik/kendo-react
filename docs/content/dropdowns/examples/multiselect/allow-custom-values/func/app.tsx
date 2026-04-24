import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';

const occupations: string[] = [
    'Software Engineer',
    'Data Scientist',
    'Graphic Designer',
    'Doctor',
    'Teacher',
    'Electrician',
    'Chef',
    'Police Officer',
    'Pilot',
    'Journalist'
];

const App = () => {
    const [value, setValue] = React.useState<string[]>([]);

    const handleChange = (event: MultiSelectChangeEvent) => {
        const values = event.target.value;
        const lastItem = values[values.length - 1];

        if (lastItem) {
            values.pop();
            const sameItem = values.find((value) => value === lastItem);
            if (sameItem === undefined) {
                values.push(lastItem);
            }
        }

        setValue(values);
    };

    return (
        <div>
            <div className="example-config">Selected Values: {JSON.stringify(value)}</div>
            <div>Select occupations</div>
            <MultiSelect
                data={occupations}
                onChange={handleChange}
                value={value}
                allowCustom={true}
                style={{ width: '300px' }}
                placeholder="Type your past occupations"
            />
        </div>
    );
};

export default App;
