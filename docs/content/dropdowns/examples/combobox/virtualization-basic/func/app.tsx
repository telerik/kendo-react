import * as React from 'react';
import { ComboBox, ComboBoxPageChangeEvent } from '@progress/kendo-react-dropdowns';

const total = 5000;
const pageSize = 18;
const allData: { id: number; text: string }[] = [];

for (let i = 0; i < total; i++) {
    allData.push({ id: i, text: 'Item ' + i });
}

const App = () => {
    const [state, setState] = React.useState({
        subsetData: allData.slice(0, pageSize),
        skip: 0
    });

    const pageChange = (event: ComboBoxPageChangeEvent) => {
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
            <div>Select value:</div>
            <ComboBox
                data={state.subsetData}
                dataItemKey="id"
                textField="text"
                virtual={{
                    total: total,
                    pageSize: pageSize,
                    skip: state.skip
                }}
                onPageChange={pageChange}
                popupSettings={{
                    height: '250px'
                }}
                placeholder="Please select ..."
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
