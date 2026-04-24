import * as React from 'react';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { ColumnMenu } from './columnMenu';
import sampleProducts from './gd-sample-products';

const createDataState = (dataState: State) => {
    return {
        result: process(sampleProducts.slice(0), dataState),
        dataState: dataState
    };
};
const App = () => {
    let initialState = createDataState({
        take: 8,
        skip: 0
    });

    const [result, setResult] = React.useState<DataResult>(initialState.result);
    const [dataState, setDataState] = React.useState<State>(initialState.dataState);

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        let updatedState = createDataState(event.dataState);
        setResult(updatedState.result);
        setDataState(updatedState.dataState);
    };

    return (
        <Grid
            data={result}
            {...dataState}
            onDataStateChange={dataStateChange}
            adaptive={true}
            sortable={true}
            pageable={true}
            pageSize={8}
        >
            <Column field="ProductID" title="Product Id" filter={'numeric'} columnMenu={ColumnMenu} />
            <Column field="ProductName" columnMenu={ColumnMenu} />
            <Column field="UnitPrice" filter={'numeric'} columnMenu={ColumnMenu} />
            <Column field="Discontinued" filter={'boolean'} columnMenu={ColumnMenu} />
        </Grid>
    );
};

export default App;
