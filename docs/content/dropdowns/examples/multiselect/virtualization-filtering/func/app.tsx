import * as React from 'react';
import { MultiSelect, MultiSelectPageChangeEvent, MultiSelectFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

interface Item {
    id: number;
    text: string;
}

const total = 5000;
const pageSize = 16;
const allData: Item[] = [];

for (let i = 0; i < total; i++) {
    allData.push({ id: i, text: 'Item ' + i });
}

const App = () => {
    const filteredData = React.useRef(allData.slice());

    const [state, setState] = React.useState({
        subsetData: allData.slice(0, pageSize),
        skip: 0,
        total: total
    });

    const onFilterChange = (event: MultiSelectFilterChangeEvent) => {
        const filter = event.filter;
        filteredData.current = filterBy(allData.slice(), filter);

        const data = filteredData.current.slice(0, pageSize);

        setState({
            subsetData: data,
            skip: 0,
            total: filteredData.current.length
        });
    };

    const pageChange = (event: MultiSelectPageChangeEvent) => {
        const skip = event.page.skip;
        const take = event.page.take;
        const newSubsetData = filteredData.current.slice(skip, skip + take);

        setState({
            ...state,
            subsetData: newSubsetData,
            skip: skip
        });
    };

    return (
        <div>
            <MultiSelect
                style={{ width: '300px' }}
                data={state.subsetData}
                dataItemKey="id"
                textField="text"
                label="Select value"
                virtual={{
                    total: state.total,
                    pageSize: pageSize,
                    skip: state.skip
                }}
                onPageChange={pageChange}
                filterable={true}
                onFilterChange={onFilterChange}
                popupSettings={{
                    height: '210px'
                }}
            />
        </div>
    );
};

export default App;
