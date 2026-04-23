import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
const total = 5000;
const pageSize = 18;
const allData: any[] = [];

for (let i = 0; i < total; i++) {
    allData.push({
        id: i,
        text: 'Item ' + i
    });
}

const App = () => {
    const filteredData = React.useRef(allData.slice());
    const [state, setState] = React.useState({
        skip: 0,
        total: total,
        subsetData: allData.slice(0, pageSize)
    });
    const onFilterChange = (event) => {
        filteredData.current = filterBy(allData.slice(), event.filter);
        const data = filteredData.current.slice(0, pageSize);
        setState({
            subsetData: data,
            skip: 0,
            total: filteredData.current.length
        });
    };

    const pageChange = (event) => {
        const skip = event.page.skip;
        const take = event.page.take;
        const newSubsetData = filteredData.current.slice(skip, skip + take);
        setState({ ...state, subsetData: newSubsetData, skip: skip });
    };

    return (
        <div>
            <DropDownList
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
