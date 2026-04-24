import * as React from 'react';
import {
    Grid,
    GridContextMenuEvent,
    GridColumn as Column,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent,
    getSelectedState
} from '@progress/kendo-react-grid';
import { ContextMenu, MenuItem } from '@progress/kendo-react-layout';
import { getter } from '@progress/kendo-react-common';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';

const DATA_ITEM_KEY: string = 'ProductID';
const idGetter = getter(DATA_ITEM_KEY);

const App = () => {
    const [show, setShow] = React.useState(false);
    const [current, setCurrent] = React.useState<Product | undefined>(undefined);
    const [dataState] = React.useState<Product[]>(
        sampleProducts.map((dataItem: Product) => Object.assign({ selected: false }, dataItem))
    );
    const [select, setSelect] = React.useState<SelectDescriptor>({});
    const offset = React.useRef({ left: 0, top: 0 });
    const onSelectionChange = React.useCallback((event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    const selectRow = React.useCallback(
        (item: any) => {
            console.log('selectRow', item);
            setSelect({
                [idGetter(item.item.data.item)]: true
            });
        },
        [select]
    );

    const deselectRow = React.useCallback(
        (item: any) => {
            setSelect({
                ...select,
                [idGetter(item.item.data.item)]: false
            });
            // const newSelectedState = {
            //     ...selectedState
            // };
            // if (item.item.data.item) {
            //     delete newSelectedState[item.item.data.item.ProductID];
            // }
            // setSelectedState(newSelectedState);
        },
        [select]
    );

    const onHeaderSelectionChange = React.useCallback((event: GridHeaderSelectionChangeEvent) => {
        // const checkboxElement: any = event.syntheticEvent.target;
        // const checked = checkboxElement.checked;
        // const newSelectedState = {};

        // event.dataItems.forEach((item) => {
        //     newSelectedState[idGetter(item)] = checked;
        // });
        // setSelectedState(newSelectedState);
        setSelect(
            event.dataItems.reduce((acc, item) => {
                acc[idGetter(item)] = true;
                return acc;
            }, {})
        );
    }, []);

    const handleOnSelect = (e: any) => {
        switch (e.item.data.action) {
            case 'deselectAll':
                setSelect({});
                break;
            case 'deselect':
                deselectRow(e);
                break;
            case 'select':
                selectRow(e);
                break;

            default:
        }
        setShow(false);
    };

    const handleContextMenuOpen = (e: React.MouseEvent, dataItem: Product) => {
        e.preventDefault();
        setCurrent(dataItem);

        offset.current = { left: e.pageX, top: e.pageY };
        setShow(true);
    };

    const handleCloseMenu = () => {
        setShow(false);
    };
    const handleContextMenu = (event: GridContextMenuEvent) => {
        handleContextMenuOpen(event.syntheticEvent, event.dataItem);
    };

    return (
        <div>
            <Grid
                data={dataState}
                style={{ height: '400px' }}
                dataItemKey={DATA_ITEM_KEY}
                select={select}
                selectable={{
                    enabled: true,
                    drag: false,
                    cell: false,
                    mode: 'multiple'
                }}
                onSelectionChange={onSelectionChange}
                onHeaderSelectionChange={onHeaderSelectionChange}
                onContextMenu={handleContextMenu}
            >
                <Column
                    width="40px"
                    columnType="checkbox"
                    headerSelectionValue={dataState.findIndex((item) => !select[idGetter(item)]) === -1}
                />
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="ReorderLevel" title="Reorder Level" />
            </Grid>
            <ContextMenu show={show} offset={offset.current} onSelect={handleOnSelect} onClose={handleCloseMenu}>
                {select ? (
                    [
                        <MenuItem
                            text={`Deselect all (${Object.keys(select).length})`}
                            data={{ action: 'deselectAll' }}
                            icon="minus"
                            key={1}
                        />,
                        <MenuItem key={2} text={`Deselect`} data={{ action: 'deselect', item: current }} icon="minus" />
                    ]
                ) : (
                    <MenuItem key={3} text={`Select`} data={{ action: 'select', item: current }} icon="plus" />
                )}
            </ContextMenu>
        </div>
    );
};

export default App;
