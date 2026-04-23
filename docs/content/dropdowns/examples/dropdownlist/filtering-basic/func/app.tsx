import * as React from 'react';
import { DropDownList, DropDownListFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { CompositeFilterDescriptor, filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import usStates from './states';

const App = () => {
    const [data, setData] = React.useState(usStates.slice());

    const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
        const data = usStates.slice();
        return filterBy(data, filter);
    };

    const filterChange = (event: DropDownListFilterChangeEvent) => {
        setData(filterData(event.filter));
    };

    return (
        <div>
            <DropDownList
                data={data}
                label="Select state"
                filterable
                onFilterChange={filterChange}
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
