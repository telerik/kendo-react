import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDetailRowProps,
    GridRowReorderEvent,
    GridReorderDropPosition
} from '@progress/kendo-react-grid';
import products from './gd-products';

const DetailComponent = (props: GridDetailRowProps) => {
    const dataItem = props.dataItem;
    return (
        <section>
            <p>
                <strong>In Stock:</strong> {dataItem.UnitsInStock} units
            </p>
            <p>
                <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
            </p>
            <p>
                <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
            </p>
            <p>
                <strong>Discontinued:</strong> {dataItem.Discontinued}
            </p>
            <p>
                <strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}
            </p>
        </section>
    );
};

const App = () => {
    const [data, setData] = React.useState<Array<any>>(products);

    const calculateIndexToAdd = (dragIndex: number, dropIndex: number, dropPosition: GridReorderDropPosition) => {
        const isDropPosition = dropPosition === 'after';

        if (dragIndex > dropIndex) {
            return isDropPosition ? dropIndex + 1 : dropIndex;
        }

        return isDropPosition ? dropIndex : dropIndex - 1;
    };

    const handleRowReorder = (event: GridRowReorderEvent) => {
        const reorderedData = [...data];
        const droppedItemIndex = data.findIndex((item) => item === event.droppedDataItem);

        event.draggedDataItems.forEach((draggedItem) => {
            const draggedItemIndex = data.findIndex((item) => item === draggedItem);
            const idxToAdd: number = calculateIndexToAdd(draggedItemIndex, droppedItemIndex, event.dropPosition)!;

            reorderedData.splice(draggedItemIndex, 1);
            reorderedData.splice(idxToAdd, 0, event.draggedDataItems[0]);
        });

        setData(reorderedData);
    };
    return (
        <Grid
            data={data}
            dataItemKey="ProductID"
            rowReorderable={{ enabled: true }}
            onRowReorder={handleRowReorder}
            detail={DetailComponent}
            style={{ height: '400px' }}
        >
            <Column columnType="reorder" width={60} />
            <Column field="ProductName" title="Product" width="300px" />
            <Column field="ProductID" title="ID" width="50px" />
            <Column field="UnitPrice" title="Unit Price" width="100px" />
            <Column field="QuantityPerUnit" title="Qty Per Unit" />
        </Grid>
    );
};
export default App;
