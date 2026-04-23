import * as React from 'react';

import { ComboBox, ComboBoxChangeEvent, ComboBoxFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const countries: Array<string> = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia & Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City'
];
const placeholder = 'Select country';

const App: React.FC = () => {
    const [data, setData] = React.useState(countries.slice());
    const [value, setValue] = React.useState<string>();
    const [filter, setFilter] = React.useState<string>('');
    const [adaptiveFilter, setAdaptiveFilter] = React.useState<string>('');
    const filterData = (f: any) => filterBy(countries.slice(), f);
    const filterChange = (event: ComboBoxFilterChangeEvent) => {
        if (event.target.mobileMode) {
            setAdaptiveFilter(event.filter.value);
        } else {
            setFilter(event.filter.value);
        }

        setData(filterData(event.filter));
    };

    const handleChange = (event: ComboBoxChangeEvent) => {
        setValue(event.value);
        setFilter(event.value);
        setAdaptiveFilter('');
    };

    const handleClose = () => {
        setAdaptiveFilter('');
    };

    return (
        <ComboBox
            data={data}
            value={value}
            label="Select a country"
            placeholder="Please select..."
            filterable={true}
            filter={filter}
            adaptive={true}
            adaptiveFilter={adaptiveFilter}
            style={{ width: '300px' }}
            onFilterChange={filterChange}
            onChange={handleChange}
            onClose={handleClose}
        />
    );
};

export default App;
