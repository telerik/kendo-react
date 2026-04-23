import * as React from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { process, State } from '@progress/kendo-data-query';
import sampleProducts from './gd-sample-products';

const initialDataState: State = {
    sort: [{ field: 'ProductName', dir: 'asc' }],
    take: 5,
    skip: 0,
    filter: {
        logic: 'and',
        filters: [{ field: 'ProductName', operator: 'contains', value: 'Ch' }]
    }
};

const App = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const data = process(sampleProducts, dataState);

    const onDataStateChange = (event: GridDataStateChangeEvent) => {
        setDataState(event.dataState);
    };

    return (
        <Grid
            style={{ height: '355px' }}
            data={data}
            filterable={true}
            pageable={true}
            {...dataState}
            onDataStateChange={onDataStateChange}
        >
            <Column field="ProductID" title="ID" filterable={false} width="40px" />
            <Column field="ProductName" title="Product Name" width="240px" />
            <Column field="UnitsInStock" title="Units in Stock" width="170px" filter="numeric" />
            <Column field="QuantityPerUnit" title="Quantity per Unit" width="180px" />
            <Column field="Discontinued" filter="boolean" />
        </Grid>
    );
};

export default App;
