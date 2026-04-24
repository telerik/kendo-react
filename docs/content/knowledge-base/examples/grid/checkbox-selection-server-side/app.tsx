import React, { useCallback, useMemo, useState } from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridSelectionChangeEvent, GridHeaderSelectionChangeEvent } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader';

const App = () => {
    const [products, setProducts] = useState<{ data: any[]; total: number }>({
        data: [],
        total: 0
    });
    const [dataState, setDataState] = useState<any>({ take: 10, skip: 0 });
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const dataStateChange = useCallback((e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    }, []);

    const selectionChange = useCallback((event: GridSelectionChangeEvent) => {
        const id = event.dataItem.ProductID;
        setSelectedIds((prev) => {
            const exists = prev.indexOf(id) !== -1;
            if (!event.dataItem.selected && !exists) return [...prev, id];
            if (event.dataItem.selected && exists) {
                const next = [...prev];
                next.splice(next.indexOf(id), 1);
                return next;
            }
            return prev;
        });
    }, []);

    const headerSelectionChange = useCallback(
        (event: GridHeaderSelectionChangeEvent) => {
            const checked = event.syntheticEvent.target.checked;
            setSelectedIds((prev) => {
                if (checked) {
                    const next = new Set(prev);
                    products.data.forEach((item) => next.add(item.ProductID));
                    return Array.from(next);
                } else {
                    const ids = new Set(prev);
                    products.data.forEach((item) => ids.delete(item.ProductID));
                    return Array.from(ids);
                }
            });
        },
        [products.data]
    );

    const dataRecieved = useCallback((p: { data: any[]; total: number }) => {
        setProducts(p);
    }, []);

    const gridData = useMemo(
        () =>
            products.data.map((item) => ({
                ...item,
                selected: selectedIds.indexOf(item.ProductID) >= 0
            })),
        [products.data, selectedIds]
    );

    const headerSelectionValue = useMemo(
        () =>
            products.data[0] !== undefined &&
            products.data.findIndex((di) => di.selected === false || selectedIds.indexOf(di.ProductID) === -1) === -1,
        [products.data, selectedIds]
    );

    return (
        <div>
            <Grid
                autoProcessData
                sortable
                pageable
                selectedField="selected"
                onSelectionChange={selectionChange}
                onHeaderSelectionChange={headerSelectionChange}
                {...dataState}
                total={products.total}
                data={gridData}
                onDataStateChange={dataStateChange}
            >
                <Column field="selected" width="70px" headerSelectionValue={headerSelectionValue} />
                <Column field="ProductID" filter="numeric" title="Id" />
                <Column field="ProductName" title="Name" />
                <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Price" />
                <Column field="UnitsInStock" filter="numeric" title="In stock" />
            </Grid>

            <ProductsLoader dataState={dataState} onDataRecieved={dataRecieved} />
        </div>
    );
};

export default App;
