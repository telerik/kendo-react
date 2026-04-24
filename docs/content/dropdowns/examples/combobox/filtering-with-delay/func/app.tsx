import * as React from 'react';
import { ComboBox, ComboBoxFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const allData = [
    { text: 'Small', id: 1 },
    { text: 'Medium', id: 2 },
    { text: 'Large', id: 3 }
];
const delay: number = 500;

const App = () => {
    const [data, setData] = React.useState(allData);
    const [loading, setLoading] = React.useState(false);

    const filterData = (filter: FilterDescriptor) => {
        const data = allData.slice();
        return filterBy(data, filter);
    };

    const timeout = React.useRef<any>(undefined);

    const filterChange = (event: ComboBoxFilterChangeEvent) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setData(filterData(event.filter));
            setLoading(false);
        }, delay);

        setLoading(true);
    };

    return (
        <div>
            <div>Select value:</div>
            <ComboBox
                data={data}
                textField="text"
                filterable={true}
                onFilterChange={filterChange}
                loading={loading}
                placeholder="Please select ..."
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
