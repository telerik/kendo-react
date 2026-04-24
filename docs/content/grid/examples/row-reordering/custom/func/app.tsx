import React from 'react';
import { Grid, GridColumn as Column, GridRowReorderEvent, GridReorderDropPosition } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    const [data, setData] = React.useState(products.slice(0, 20));

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
            rowReorderable={{ enabled: true }}
            onRowReorder={handleRowReorder}
            style={{ height: '400px' }}
            data={data}
        >
            <Column columnType="reorder" width={60} />
            <Column field="ProductID" title="ID" width="65px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" width="80px" />
            <Column field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
    );
};

export default App;
