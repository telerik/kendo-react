import * as React from 'react';
import { ComboBox, ComboBoxFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const allData = [
    { text: 'Small', id: 1 },
    { text: 'Medium', id: 2 },
    { text: 'Large', id: 3 }
];

const App = () => {
    const [data, setData] = React.useState(allData.slice());

    const filterData = (filter: FilterDescriptor) => {
        const data = allData.slice();
        return filterBy(data, filter);
    };

    const filterChange = (event: ComboBoxFilterChangeEvent) => {
        setData(filterData(event.filter));
    };

    return (
        <div>
            <div>Select value:</div>
            <ComboBox
                data={data}
                textField="text"
                filterable={true}
                onFilterChange={filterChange}
                placeholder="Please select ..."
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
