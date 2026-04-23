import * as React from 'react';
import { DropDownList, DropDownListFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { Hint } from '@progress/kendo-react-labels';
import { CompositeFilterDescriptor, filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import movies from './movies';

const App = () => {
    const [data, setData] = React.useState(movies.slice());

    const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
        const data = movies.slice();
        return filterBy(data, filter);
    };

    const filterChange = (event: DropDownListFilterChangeEvent) => {
        const newData = event.filter.value.length >= 3 ? filterData(event.filter) : movies.slice();
        setData(newData);
    };

    return (
        <div>
            <DropDownList
                data={data}
                label="Select movie"
                filterable
                onFilterChange={filterChange}
                style={{ width: '300px' }}
                ariaDescribedBy="dropdownHint"
            />
            <Hint id="dropdownHint">Enter at least 3 characters</Hint>
        </div>
    );
};

export default App;
