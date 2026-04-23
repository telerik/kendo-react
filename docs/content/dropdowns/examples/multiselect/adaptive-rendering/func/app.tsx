import * as React from 'react';
import { filterBy } from '@progress/kendo-data-query';
import { MultiSelect, MultiSelectChangeEvent, MultiSelectFilterChangeEvent } from '@progress/kendo-react-dropdowns';

const sports = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
];

const App: React.FC = () => {
    const [data, setData] = React.useState(sports.slice());
    const [value, setValue] = React.useState<any[]>([]);
    const [currentSelected, setCurrentSelected] = React.useState<any[]>([]);

    const handleOpen = () => {
        setCurrentSelected(value);
    };

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue([...event.value]);
    };

    const handleCancel = () => {
        setValue(currentSelected);
    };

    const handleClose = () => {
        setCurrentSelected([]);
    };

    const handleFilterChange = (event: MultiSelectFilterChangeEvent) => {
        setData(filterBy(sports.slice(), event.filter));
    };

    return (
        <div>
            <MultiSelect
                data={data}
                value={value}
                filterable={true}
                label="Sports list"
                placeholder="Please select..."
                adaptive={true}
                style={{ width: 300 }}
                onOpen={handleOpen}
                onFilterChange={handleFilterChange}
                onChange={handleChange}
                onClose={handleClose}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default App;
