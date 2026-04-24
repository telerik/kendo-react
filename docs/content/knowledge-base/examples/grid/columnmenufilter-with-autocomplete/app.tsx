import React, { useCallback, useMemo, useState } from 'react';
import { process, DataResult } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { GridColumnMenuFilter } from '@progress/kendo-react-grid';
import { CustomFilterUI } from './customFilterUI';
import products from './shared-kb-products';

interface DataState {
    take: number;
    skip: number;
}

interface State {
    result: DataResult;
    dataState: DataState;
}

const App = () => {
    const initialState: DataState = useMemo(() => ({ take: 8, skip: 0 }), []);
    const createDataState = useCallback(
        (ds: DataState): State => ({ result: process(products.slice(0), ds), dataState: ds }),
        []
    );
    const [state, setState] = useState<State>(() => createDataState(initialState));

    const dataStateChange = useCallback(
        (event: GridDataStateChangeEvent) => setState(createDataState(event.dataState)),
        [createDataState]
    );

    return (
        <div>
            <Grid
                data={state.result}
                {...state.dataState}
                onDataStateChange={dataStateChange}
                sortable
                pageable
                pageSize={8}
            >
                <Column
                    field="ProductName"
                    title="Product Name"
                    columnMenu={(props) => <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />}
                />
                <Column field="Discontinued" title="Discontinued" filter="boolean" />
            </Grid>
            <br />
        </div>
    );
};

export default App;
