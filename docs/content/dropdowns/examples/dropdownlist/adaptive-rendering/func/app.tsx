import * as React from 'react';

import { DropDownList, DropDownListFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { CompositeFilterDescriptor, filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const allData = [
    { id: 1, text: 'Small' },
    { id: 2, text: 'Medium' },
    { id: 3, text: 'Large' }
];

const App = () => {
    const [data, setData] = React.useState(allData.slice());

    const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
        const filteredData = allData.slice();
        return filterBy(filteredData, filter);
    };

    const filterChange = (event: DropDownListFilterChangeEvent) => {
        setData(filterData(event.filter));
    };

    return (
        <div>
            <DropDownList
                data={data}
                textField="text"
                filterable={true}
                label="Choose size"
                adaptive={true}
                style={{ width: '300px' }}
                onFilterChange={filterChange}
            />
        </div>
    );
};

export default App;
