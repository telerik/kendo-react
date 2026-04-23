import * as React from 'react';
import { MultiSelect, MultiSelectFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import countries from './shared-dd-countries';
import { filterBy } from '@progress/kendo-data-query';
import { Label } from '@progress/kendo-react-labels';

const delay = 500;

const App = () => {
    const [state, setState] = React.useState({
        data: countries.slice(),
        loading: false
    });

    const timeout = React.useRef<any>(undefined);

    const filterChange = (event: MultiSelectFilterChangeEvent) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setState({
                data: filterBy(countries.slice(), event.filter),
                loading: false
            });
        }, delay);

        setState({
            ...state,
            loading: true
        });
    };

    return (
        <div>
            <Label editorId="country">Select country</Label>
            <br />
            <MultiSelect
                id="country"
                data={state.data}
                filterable={true}
                onFilterChange={filterChange}
                loading={state.loading}
                style={{ width: '300px' }}
                placeholder="e.g. Bulgaria"
            />
        </div>
    );
};

export default App;
