import * as React from 'react';
import {
    Grid,
    GridColumn,
    type GridCellProps,
    type GridCustomFilterCellProps,
    type GridFilterChangeEvent,
    type GridRowReorderEvent,
    type GridReorderDropPosition
} from '@progress/kendo-react-grid';

import { Button } from '@progress/kendo-react-buttons';
import { HeaderTdElement } from '@progress/kendo-react-data-tools';
import { type CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';

import { products, type Product } from './gd-products';

const LOCAL_STORAGE_KEY = 'kendo-grid-product-order';

const SaveOrderContext = React.createContext<() => void>(() => undefined);

const SaveOrderFilterCell = (props: Readonly<GridCustomFilterCellProps>) => {
    const saveOrder = React.useContext(SaveOrderContext);

    return (
        <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
            <Button size="small" themeColor="primary" onClick={saveOrder}>
                Save Order
            </Button>
        </HeaderTdElement>
    );
};

const OrderCell = (props: Readonly<GridCellProps>) => (
    <td style={{ textAlign: 'center' }}>{(props.dataItem as Product).order}</td>
);

const calculateIndexToAdd = (
    dragIndex: number,
    dropIndex: number,
    dropPosition: GridReorderDropPosition
) => {
    const isAfter = dropPosition === 'after';

    if (dragIndex > dropIndex) {
        return isAfter ? dropIndex + 1 : dropIndex;
    }

    return isAfter ? dropIndex : dropIndex - 1;
};

const withOrder = (items: Product[]): Product[] =>
    items.map((item, index) => ({ ...item, order: index + 1 }));

const loadInitialData = (): Product[] => {
    const savedIds = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') as number[];

    if (!savedIds.length) {
        return withOrder(products);
    }

    const byId = new Map(products.map((item) => [item.ProductID, item]));
    const ordered = savedIds.map((id) => byId.get(id)).filter((item): item is Product => Boolean(item));
    const missing = products.filter((item) => !savedIds.includes(item.ProductID));

    return withOrder([...ordered, ...missing]);
};

const App = () => {
    const [gridData, setGridData] = React.useState<Product[]>(loadInitialData);
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor | undefined>(undefined);

    const visibleData = React.useMemo(
        () => (filter ? filterBy(gridData, filter) : gridData),
        [gridData, filter]
    );

    const saveOrder = React.useCallback(() => {
        const orderedIds = gridData.map((item) => item.ProductID);

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orderedIds));
    }, [gridData]);

    const handleRowReorder = (event: GridRowReorderEvent) => {
        const reorderedData = [...gridData];
        const droppedItemIndex = gridData.indexOf(event.droppedDataItem as Product);

        event.draggedDataItems.forEach((draggedItem) => {
            const draggedItemIndex = gridData.indexOf(draggedItem as Product);
            const idxToAdd = calculateIndexToAdd(draggedItemIndex, droppedItemIndex, event.dropPosition);

            reorderedData.splice(draggedItemIndex, 1);
            reorderedData.splice(idxToAdd, 0, draggedItem as Product);
        });

        setGridData(withOrder(reorderedData));
    };

    const handleFilterChange = (event: GridFilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <SaveOrderContext.Provider value={saveOrder}>
            <Grid
                style={{ height: '475px' }}
                data={visibleData}
                rowReorderable={true}
                onRowReorder={handleRowReorder}
                resizable={true}
                filterable={true}
                filter={filter}
                onFilterChange={handleFilterChange}
            >
                <GridColumn
                    field="order"
                    title="Order"
                    width="140px"
                    columnType="reorder"
                    filter="numeric"
                    cells={{
                        data: OrderCell,
                        filterCell: SaveOrderFilterCell
                    }}
                />
                <GridColumn field="ProductID" title="ID" width="75px" filterable={false} />
                <GridColumn field="ProductName" title="Name" filter="text" />
                <GridColumn field="Category.CategoryName" title="Category" width="180px" filter="text" />
                <GridColumn field="UnitPrice" title="Price" width="120px" filter="numeric" />
                <GridColumn field="UnitsInStock" title="In stock" width="120px" filter="numeric" />
                <GridColumn field="Discontinued" title="Discontinued" width="140px" filter="boolean" />
            </Grid>
        </SaveOrderContext.Provider>
    );
};

export default App;
