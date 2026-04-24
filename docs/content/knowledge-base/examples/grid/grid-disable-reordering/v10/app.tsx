import * as React from 'react';
import { Grid, GridColumn, GridColumnState, GridColumnReorderEvent, GridColumnProps } from '@progress/kendo-react-grid';
import products from './shared-kb-products';

const App: React.FC = () => {
    const columnsWithOrderIndex0: string[] = ['ProductID', 'ProductName'];
    const [columnsState, setColumnsState] = React.useState<GridColumnState[]>();

    const onColumnReorder = (event: GridColumnReorderEvent): void => {
        const allColumns = event.columns;

        const lockedAtStart = columnsWithOrderIndex0
            .map((field: string) => allColumns.find((col) => col.field === field))
            .filter((col): col is GridColumnProps => col !== undefined); // remove undefined if any field is missing

        const unlocked = allColumns
            .filter((col) => !columnsWithOrderIndex0.includes(col.field || ''))
            .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));

        const reorderedColumns = [...lockedAtStart, ...unlocked].map((col, index) => ({
            ...col,
            orderIndex: index,
            ariaIndex: index,
            ariaColumnIndex: index
        }));

        setColumnsState(reorderedColumns as GridColumnState[]);
    };

    return (
        <Grid
            style={{
                height: '400px'
            }}
            data={products}
            reorderable={true}
            columnsState={columnsState}
            onColumnReorder={onColumnReorder}
        >
            <GridColumn field="ProductID" title="ID" width="45px" locked={true} />
            <GridColumn field="ProductName" title="Name" width="250px" locked={true} />
            <GridColumn field="Category.CategoryName" title="CategoryName" />
            <GridColumn field="UnitPrice" title="Price" width="80px" />
            <GridColumn field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
    );
};
export default App;
