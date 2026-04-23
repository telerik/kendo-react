import React, { useMemo, useState } from 'react';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { CustomColumnMenu } from './customColumnMenu';
import products from './shared-kb-products';

const createDataState = (dataState: any) => ({
    result: process(products.slice(0), dataState),
    dataState
});

const App = () => {
    const initial = useMemo(() => createDataState({ take: 8, skip: 0 }), []);
    const [columns] = useState<{ field: string; title?: string }[]>([{ field: 'ProductName' }, { field: 'ProductID' }]);
    const [result, setResult] = useState(initial.result);
    const [dataState, setDataState] = useState(initial.dataState);

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        const next = createDataState(event.dataState);
        setResult(next.result);
        setDataState(next.dataState);
    };

    const onReset = () => {
        setResult(process(products.slice((dataState as any).take), dataState));
    };

    const onColumnsSubmit = (data: any[]) => {
        const filterData = data.filter((item) => item.filterChecked);
        setResult(process(filterData, dataState));
    };

    return (
        <div>
            <Grid data={result} {...dataState} onDataStateChange={dataStateChange} sortable pageable pageSize={8}>
                {columns.map((column, idx) => (
                    <Column
                        key={idx}
                        field={column.field}
                        title={column.title}
                        columnMenu={(props) => (
                            <CustomColumnMenu
                                {...props}
                                field={column.field}
                                data={products}
                                onReset={onReset}
                                onColumnsSubmit={onColumnsSubmit}
                            />
                        )}
                    />
                ))}
            </Grid>
            <br />
        </div>
    );
};

export default App;
