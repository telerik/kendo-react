import * as React from 'react';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const source = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];

const App: React.FC = () => {
    const [state, setState] = React.useState({ data: source, value: '' });

    const filterData = (value: string) => {
        const data = source;
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
            <AutoComplete
                data={state.data}
                value={state.value}
                label="Select a country"
                placeholder="Please select..."
                adaptive={true}
                style={{ width: '300px' }}
                onChange={onChange}
            />
        </div>
    );
};

export default App;
