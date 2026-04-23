import * as React from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { State, process, DataResult } from '@progress/kendo-data-query';
import products from './gd-products';

const dataStateAllData = (currentDataState: State) => ({ ...currentDataState, take: products.length });

const App = () => {
    const [dataState, setDataState] = React.useState<State>({
        skip: 0,
        take: 30,
        group: [{ field: 'Category.CategoryName' }]
    });

    const [dataResult, setDataResult] = React.useState<DataResult>(process(products, dataStateAllData(dataState)));

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        if (!event.nativeEvent || event.nativeEvent.type !== 'scroll') {
            setDataResult(process(products, dataStateAllData(event.dataState)));
        }

        setDataState(event.dataState);
    };

    return (
        <Grid
            style={{ height: '520px' }}
            resizable={true}
            reorderable={true}
            filterable={true}
            sortable={true}
            groupable={true}
            scrollable="virtual"
            rowHeight={50}
            data={dataResult}
            total={dataResult.total}
            onDataStateChange={dataStateChange}
            {...dataState}
        >
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};

export default App;
