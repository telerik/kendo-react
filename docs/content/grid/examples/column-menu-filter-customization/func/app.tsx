import * as React from 'react';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { CustomFilterUI } from './customFilterUI';
import { GridColumnMenuFilter } from '@progress/kendo-react-grid';
import products from './gd-products';

const createDataState = (dataState: State) => {
    return {
        result: process(products.slice(0), dataState),
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
        <div>
            <Grid
                data={result}
                {...dataState}
                onDataStateChange={dataStateChange}
                sortable={true}
                pageable={true}
                pageSize={8}
            >
                <Column field={'ProductName'} title={'Product Name'} />
                <Column
                    field={'Discontinued'}
                    title={'Discontinued'}
                    filter={'boolean'}
                    columnMenu={(props) => <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />}
                />
            </Grid>
            <br />
        </div>
    );
};

export default App;
