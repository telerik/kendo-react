import * as React from 'react';
import { MultiSelect, MultiSelectPageChangeEvent } from '@progress/kendo-react-dropdowns';

interface Item {
    id: number;
    text: string;
}

const total = 5000;
const pageSize = 18;
const allData: Item[] = [];

for (let i = 0; i < total; i++) {
    allData.push({ id: i, text: 'Item ' + i });
}

const App = () => {
    const [state, setState] = React.useState({
        subsetData: allData.slice(0, pageSize),
        skip: 0
    });

    const pageChange = (event: MultiSelectPageChangeEvent) => {
        const skip = event.page.skip;
        const take = event.page.take;
        const newSubsetData = allData.slice(skip, skip + take);

        setState({
            subsetData: newSubsetData,
            skip: skip
        });
    };

    return (
        <div>
            <MultiSelect
                style={{ width: '300px' }}
                data={state.subsetData}
                textField="text"
                dataItemKey="id"
                label="Select value"
                virtual={{
                    total: total,
                    pageSize: pageSize,
                    skip: state.skip
                }}
                onPageChange={pageChange}
                popupSettings={{
                    height: '250px'
                }}
            />
        </div>
    );
};

export default App;
