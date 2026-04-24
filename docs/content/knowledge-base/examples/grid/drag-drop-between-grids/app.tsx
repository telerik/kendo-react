import React, { useCallback, useRef, useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './shared-kb-products';

export const DraggableRow = (props: any) => {
    const onDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData('text/plain', String(props.dataItem?.ProductID ?? 'row'));
        e.dataTransfer.effectAllowed = 'move';
        props.onDragStart(e, props.dataItem);
    };

    return (
        <tr
            {...props.trProps}
            draggable
            onDragStart={onDragStart}
            onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            }}
            onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                props.onDrop(e);
            }}
        >
            {props.children}
        </tr>
    );
};

const App = () => {
    const [gridData, setGridData] = useState<any[]>(products.slice(0, 30));
    const [gridDataTwo, setGridDataTwo] = useState<any[]>(products.slice(31, 60));

    const dragFromRef = useRef<'first' | 'second' | ''>('');
    const dragItemRef = useRef<any>(null);

    const handleOnDropOne = useCallback(() => {
        if (dragFromRef.current === 'second' && dragItemRef.current) {
            const item = dragItemRef.current;
            setGridData((prev) => [item, ...prev]);
            setGridDataTwo((prev) => prev.filter((p) => p.ProductID !== item.ProductID));
            dragFromRef.current = '';
            dragItemRef.current = null;
        }
    }, []);

    const handleDragStartOne = useCallback((_e: React.DragEvent, dataItem: any) => {
        dragFromRef.current = 'first';
        dragItemRef.current = dataItem;
    }, []);

    const handleOnDropTwo = useCallback(() => {
        if (dragFromRef.current === 'first' && dragItemRef.current) {
            const item = dragItemRef.current;
            setGridData((prev) => prev.filter((p) => p.ProductID !== item.ProductID));
            setGridDataTwo((prev) => [item, ...prev]);
            dragFromRef.current = '';
            dragItemRef.current = null;
        }
    }, []);

    const handleDragStartTwo = useCallback((_e: React.DragEvent, dataItem: any) => {
        dragFromRef.current = 'second';
        dragItemRef.current = dataItem;
    }, []);

    const customRowOne = useCallback(
        (props: any) => (
            <DraggableRow {...props} onDrop={handleOnDropOne} onDragStart={handleDragStartOne}>
                {props.children}
            </DraggableRow>
        ),
        [handleOnDropOne, handleDragStartOne]
    );

    const customRowTwo = useCallback(
        (props: any) => (
            <DraggableRow {...props} onDrop={handleOnDropTwo} onDragStart={handleDragStartTwo}>
                {props.children}
            </DraggableRow>
        ),
        [handleOnDropTwo, handleDragStartTwo]
    );

    return (
        <>
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    handleOnDropOne();
                }}
            >
                <Grid style={{ height: '400px' }} data={gridData} rows={{ data: customRowOne }}>
                    <Column field="ProductID" title="ID" width="60px" />
                    <Column field="ProductName" title="Name" width="250px" />
                    <Column field="Category.CategoryName" title="CategoryName" />
                    <Column field="UnitPrice" title="Price" width="80px" />
                    <Column field="UnitsInStock" title="In stock" width="80px" />
                </Grid>
            </div>

            <hr />

            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    handleOnDropTwo();
                }}
            >
                <Grid style={{ height: '400px' }} data={gridDataTwo} rows={{ data: customRowTwo }}>
                    <Column field="ProductID" title="ID" width="60px" />
                    <Column field="ProductName" title="Name" width="250px" />
                    <Column field="Category.CategoryName" title="CategoryName" />
                    <Column field="UnitPrice" title="Price" width="80px" />
                    <Column field="UnitsInStock" title="In stock" width="80px" />
                </Grid>
            </div>
        </>
    );
};

export default App;
