import * as React from 'react';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';

import { CustomColumnMenu } from './customColumnMenu';
import sampleProducts from './gd-sample-products';
import columns from './columns';
import { columnInterface } from './gd-interfaces';

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
    const [stateColumns, setStateColumns] = React.useState<Array<columnInterface>>(columns);

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        let updatedState = createDataState(event.dataState);
        setResult(updatedState.result);
        setDataState(updatedState.dataState);
    };

    const onColumnsSubmit = (columnsState: Array<columnInterface>) => {
        setStateColumns(columnsState);
    };
    return (
        <div>
            <Grid
                style={{ height: '430px' }}
                data={result}
                {...dataState}
                onDataStateChange={dataStateChange}
                sortable={true}
                pageable={true}
                pageSize={8}
            >
                {stateColumns.map(
                    (column, idx) =>
                        column.show && (
                            <Column
                                key={idx}
                                field={column.field}
                                title={column.title}
                                filter={column.filter}
                                columnMenu={(props) => (
                                    <CustomColumnMenu
                                        {...props}
                                        columns={stateColumns}
                                        onColumnsSubmit={onColumnsSubmit}
                                    />
                                )}
                            />
                        )
                )}
            </Grid>
            <br />
        </div>
    );
};

export default App;
