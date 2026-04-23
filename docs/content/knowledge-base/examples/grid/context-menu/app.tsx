import React, { useCallback, useRef, useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Popup } from '@progress/kendo-react-popup';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import products from './shared-kb-products';

const App = () => {
    const [gridData, setGridData] = useState(products);
    const [open, setOpen] = useState(false);

    const dataItemRef = useRef<any>(null);
    const dataItemIndexRef = useRef<number>(-1);
    const offsetRef = useRef<{ left: number; top: number } | undefined>(undefined);
    const blurTimeoutRef = useRef<any>(undefined);
    const menuWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleContextMenuOpen = useCallback(
        (e: any, dataItem: any) => {
            dataItemRef.current = dataItem;
            dataItemIndexRef.current = gridData.findIndex((p: any) => p.ProductID === dataItem.ProductID);
            offsetRef.current = { left: e.clientX, top: e.clientY };
            setOpen(true);
        },
        [gridData]
    );

    const handleMoveUp = useCallback(() => {
        const idx = dataItemIndexRef.current;
        const item = dataItemRef.current;
        if (idx > 0) {
            const data = [...gridData];
            data.splice(idx, 1);
            data.splice(idx - 1, 0, item);
            setGridData(data);
        }
    }, [gridData]);

    const handleMoveDown = useCallback(() => {
        const idx = dataItemIndexRef.current;
        const item = dataItemRef.current;
        if (idx > -1 && idx < gridData.length - 1) {
            const data = [...gridData];
            data.splice(idx, 1);
            data.splice(idx + 1, 0, item);
            setGridData(data);
        }
    }, [gridData]);

    const handleDelete = useCallback(() => {
        const idx = dataItemIndexRef.current;
        if (idx > -1) {
            const data = [...gridData];
            data.splice(idx, 1);
            setGridData(data);
        }
    }, [gridData]);

    const handleOnSelect = useCallback(
        (e: any) => {
            switch (e.item.text) {
                case 'Move Up':
                    handleMoveUp();
                    break;
                case 'Move Down':
                    handleMoveDown();
                    break;
                case 'Delete':
                    handleDelete();
                    break;
                default:
                    break;
            }
            setOpen(false);
        },
        [handleMoveUp, handleMoveDown, handleDelete]
    );

    const onFocusHandler = useCallback(() => {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = undefined;
    }, []);

    const onBlurTimeout = useCallback(() => {
        setOpen(false);
        blurTimeoutRef.current = undefined;
    }, []);

    const onBlurHandler = useCallback(() => {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = setTimeout(onBlurTimeout);
    }, [onBlurTimeout]);

    const onPopupOpen = useCallback(() => {
        menuWrapperRef.current?.querySelector<HTMLElement>('[tabindex]')?.focus();
    }, []);

    const customRow = useCallback(
        (props: any) => (
            <tr
                {...props.trProps}
                onContextMenu={(e) => {
                    e.preventDefault();
                    handleContextMenuOpen(e, props.dataItem);
                }}
            >
                {props.children}
            </tr>
        ),
        [handleContextMenuOpen]
    );

    return (
        <div>
            <Popup offset={offsetRef.current} show={open} open={onPopupOpen} popupClass={'popup-content'}>
                <div onFocus={onFocusHandler} onBlur={onBlurHandler} tabIndex={-1} ref={menuWrapperRef}>
                    <Menu vertical={true} style={{ display: 'inline-block' }} onSelect={handleOnSelect}>
                        <MenuItem text="Move Up" />
                        <MenuItem text="Move Down" />
                        <MenuItem text="Delete" />
                    </Menu>
                </div>
            </Popup>
            <Grid style={{ height: '400px' }} data={gridData} rows={{ data: customRow }}>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
        </div>
    );
};

export default App;
