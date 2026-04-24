import * as React from 'react';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const usStates: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];

const App = () => {
    const [state, setState] = React.useState({ data: usStates, value: '' });

    const filterData = (value: string) => {
        const data = usStates;
        const filter: FilterDescriptor = {
            value: value,
            operator: 'startswith',
            ignoreCase: true
        };
        return value ? filterBy(data, filter) : data;
    };

    const onChange = (event: AutoCompleteChangeEvent) => {
        const value = event.value;

        setState({
            data: filterData(value),
            value: value
        });
    };

    return (
        <div>
            <Label editorId="state">Select state</Label>
            <br />
            <AutoComplete
                id="state"
                data={state.data}
                value={state.value}
                onChange={onChange}
                placeholder="e.g. California"
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
