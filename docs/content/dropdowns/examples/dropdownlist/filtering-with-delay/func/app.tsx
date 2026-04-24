import * as React from 'react';
import { DropDownList, DropDownListFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { CompositeFilterDescriptor, filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import books from './books';
const delay = 500;

const App = () => {
    const [state, setState] = React.useState({
        data: books.slice(),
        loading: false
    });

    const timeout = React.useRef<any>(false);

    const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
        const data = books.slice();
        return filterBy(data, filter);
    };

    const filterChange = (event: DropDownListFilterChangeEvent) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setState({ loading: false, data: filterData(event.filter) });
        }, delay);

        setState({ ...state, loading: true });
    };

    return (
        <div>
            <DropDownList
                data={state.data}
                label="Select book"
                filterable
                onFilterChange={filterChange}
                loading={state.loading}
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
