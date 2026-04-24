import * as React from 'react';
import { Grid, GridColumn as Column, GridHandle, GridSelectionChangeEvent } from '@progress/kendo-react-grid';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import { DragAndDrop } from '@progress/kendo-react-common';

import { DraggableRow } from './draggable-row';
import { DragHint } from './drag-hint';

import products from './gd-products';
import { Product } from './gd-interfaces';
import { Badge } from '@progress/kendo-react-indicators';

export const ReorderContext = React.createContext<{
    reorder: (dataItem: Product, direction: 'before' | 'after' | null) => void;
    dragStart: (dataItem: Product) => void;
    dragEnd: (dataItem?: Product) => void;
}>({ reorder: () => {}, dragStart: () => {}, dragEnd: () => {} });

export const IsSelectedContext = React.createContext<boolean>(false);
export const DragHintContext = React.createContext<React.RefObject<HTMLElement | null> | null>(null);
export const GridContext = React.createContext<React.RefObject<GridHandle | null> | null>(null);

export const ReorderDragDropContext = React.createContext({});

const App = () => {
    const grid = React.useRef<GridHandle>(null);
    const hint = React.useRef<HTMLElement>(null);

    const [data, setData] = React.useState<Product[]>(products);
    const [select, setSelect] = React.useState<SelectDescriptor>({});
    const [activeItem, setActiveItem] = React.useState<Product | null>(null);

    const selected = Object.keys(select).reduce<Product[]>((acc, id) => {
        if (select[id]) {
            acc.push(data.find((item) => String(item.ProductID) === id)!);
        }
        return acc;
    }, []);

    const handleSelectChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const reorder = (dataItem: Product, direction: 'before' | 'after' | null) => {
        if (activeItem === dataItem || direction === null) {
            return;
        }

        let reorderedData = data.slice();
        reorderedData = reorderedData.filter(
            (item) => !Object.keys(select).some((id) => id === String(item.ProductID))
        );

        const nextIndex = reorderedData.findIndex((product) => product.ProductID === dataItem.ProductID);

        reorderedData.splice(Math.max(nextIndex + (direction === 'before' ? 0 : 1), 0), 0, ...selected);

        setData(reorderedData);
    };

    const dragStart = (dataItem: Product) => {
        setActiveItem(dataItem);
    };

    const dragEnd = () => {
        setActiveItem(null);
    };

    return (
        <GridContext.Provider value={grid}>
            <DragHintContext.Provider value={hint}>
                <ReorderContext.Provider value={{ reorder, dragStart, dragEnd }}>
                    <DragAndDrop context={ReorderDragDropContext}>
                        <Grid
                            ref={grid}
                            style={{ height: '400px' }}
                            data={data}
                            dataItemKey={'ProductID'}
                            selectable={true}
                            select={select}
                            onSelectionChange={handleSelectChange}
                            rows={{
                                data: DraggableRow
                            }}
                        >
                            <Column title="" width="40px" columnType="checkbox" />
                            <Column field="ProductID" title="ID" width="65px" />
                            <Column field="ProductName" title="Name" width="200px" />
                            <Column field="Category.CategoryName" title="CategoryName" />
                            <Column field="UnitPrice" title="Price" width="80px" />
                            <Column field="UnitsInStock" title="In stock" width="80px" />
                        </Grid>
                        {activeItem ? (
                            <DragHint ref={hint} portal={grid} style={{ display: activeItem ? undefined : 'none' }}>
                                {activeItem.ProductName}
                                {selected.length > 1 ? (
                                    <Badge
                                        position={'edge'}
                                        align={{
                                            horizontal: 'end',
                                            vertical: 'bottom'
                                        }}
                                        themeColor={'info'}
                                        rounded={'full'}
                                        size={'large'}
                                    >
                                        +{selected.length - 1}
                                    </Badge>
                                ) : null}
                            </DragHint>
                        ) : null}
                    </DragAndDrop>
                </ReorderContext.Provider>
            </DragHintContext.Provider>
        </GridContext.Provider>
    );
};

export default App;
