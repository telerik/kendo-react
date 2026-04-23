import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridSelectionChangeEvent,
    StatusBar,
    getStatusData,
    StatusItem
} from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [statusData, setStatusData] = React.useState<StatusItem[]>([
        { type: 'count', formattedValue: '0', value: 0 }
    ]);

    const selectionChange = (event: GridSelectionChangeEvent) => {
        setStatusData(
            getStatusData({
                dataItems: sampleProducts,
                target: event.target,
                select: event.select,
                dataItemKey: DATA_ITEM_KEY
            })
        );
    };

    return (
        <>
            <div style={{ padding: '5px', color: '#999' }}>
                <div>Ctrl+Click/Enter - add to selection</div>
                <div>Shift+Click/Enter - select range </div>
            </div>
            <Grid
                data={sampleProducts}
                autoProcessData={true}
                dataItemKey={DATA_ITEM_KEY}
                reorderable={true}
                navigatable={true}
                defaultSelect={{
                    4: [0],
                    5: [0],
                    6: [0],
                    7: [0]
                }}
                selectable={{ enabled: true, drag: true, cell: true, mode: 'multiple' }}
                onSelectionChange={selectionChange}
            >
                <Column title="Products">
                    <Column field="ProductID" title="Product ID" width="100px" />
                    <Column field="ProductName" title="Product Name" width="300px" />
                    <Column field="UnitsInStock" title="Units In Stock" />
                    <Column field="UnitsOnOrder" title="Units On Order" />
                    <Column field="ReorderLevel" title="Reorder Level" />
                    <Column field="Discontinued" title="Discontinued" />
                    <Column field="FirstOrderedOn" title="Date" format="{0:d}" />
                </Column>
                <StatusBar data={statusData} />
            </Grid>
        </>
    );
};
export default App;
