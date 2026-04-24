import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridContextMenuEvent,
    GridGroupChangeEvent,
    GridDetailExpandChangeEvent
} from '@progress/kendo-react-grid';
import { groupBy, GroupDescriptor, GroupResult } from '@progress/kendo-data-query';
import { DetailExpandDescriptor, setExpandedState, setGroupIds } from '@progress/kendo-react-data-tools';
import { ContextMenu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';
import { CustomColumnMenu } from './CustomColumnMenu';
import {
    arrowUpIcon,
    arrowDownIcon,
    arrowLeftIcon,
    arrowRightIcon,
    checkIcon,
    cancelIcon
} from '@progress/kendo-svg-icons';
import { Window, WindowActionsBar } from '@progress/kendo-react-dialogs';
import { RadioButton, NumericTextBox, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const products = sampleProducts;
interface GridColumn {
    field: string;
    id: string;
    width?: string | number;
}

const initialGroup: GroupDescriptor[] = [{ field: 'UnitsInStock' }, { field: 'ProductName' }];

const processWithGroups = (data: Product[], group: GroupDescriptor[]): GroupResult[] => {
    const newDataState = groupBy(data, group) as GroupResult[];
    setGroupIds({ data: newDataState, group: group });
    return newDataState;
};

const GridColumns: GridColumn[] = [
    { field: 'ProductName', id: '0' },
    { field: 'Category.CategoryName', id: '1' },
    { field: 'UnitPrice', id: '2' },
    { field: 'UnitsInStock', id: '3' }
];

const BEFORE = 'Before';
const AFTER = 'After';

interface DataItem {
    label: string;
    value: string;
}

const data: DataItem[] = [
    {
        label: BEFORE,
        value: BEFORE
    },
    {
        label: AFTER,
        value: AFTER
    }
];

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);
    const [columns, setColumns] = React.useState<GridColumn[]>(GridColumns);
    const [secondShow, setSecondShow] = React.useState<boolean>(false);
    const offset = React.useRef<{ left: number; top: number }>({
        left: 0,
        top: 0
    });
    const [group, setGroup] = React.useState<GroupDescriptor[]>(initialGroup);
    const [dataItemIndex, setDataItemIndex] = React.useState<number>(0);
    const [resultState, setResultState] = React.useState<GroupResult[]>(processWithGroups(products, initialGroup));
    const [selectedRow, setSelectedRow] = React.useState<Product | undefined>();

    const [reorderWindowVisible, setReorderWindowVisible] = React.useState<boolean>(false);
    const [resizeWindowVisible, setResizeWindowVisible] = React.useState<boolean>(false);
    const [currentColumn, setCurrentColumn] = React.useState<GridColumn | null>(null);

    const onOpenReorderWindow = (column: GridColumn) => {
        setCurrentColumn(column);
        setReorderWindowVisible(true);
    };

    const onOpenResizeWindow = (column: GridColumn) => {
        setCurrentColumn(column);
        setResizeWindowVisible(true);
    };

    const [selectedValue, setSelectedValue] = React.useState<string>(BEFORE);
    const [reorderState, setReorderState] = React.useState<{
        selectedBeforeColumn: GridColumn | null;
        selectedAfterColumn: GridColumn | null;
    }>({
        selectedBeforeColumn: null,
        selectedAfterColumn: null
    });

    const handleRadioChange = (event: RadioButtonChangeEvent) => {
        setSelectedValue(event.value);
    };

    const handleChange = (event: DropDownListChangeEvent, index: number) => {
        const updatedValue = event.target.value as GridColumn;
        if (index === 1) {
            setReorderState((prevState) => ({
                ...prevState,
                selectedBeforeColumn: updatedValue
            }));
        } else if (index === 2) {
            setReorderState((prevState) => ({
                ...prevState,
                selectedAfterColumn: updatedValue
            }));
        }
    };

    const isValidSelection = () => {
        if (selectedValue === BEFORE && reorderState.selectedBeforeColumn !== null) {
            return true;
        }
        if (selectedValue === AFTER && reorderState.selectedAfterColumn !== null) {
            return true;
        }
        return false;
    };

    const reorderColumns = () => {
        if (!isValidSelection() || currentColumn == null) {
            return;
        }

        const reorderedColumns = [...columns];
        const currentColumnIndex = columns.findIndex((column) => column.field === currentColumn.field);

        let selectedColumnIndex: number;
        if (selectedValue === BEFORE) {
            selectedColumnIndex = columns.findIndex((column) => column.id === reorderState.selectedBeforeColumn!.id);
        } else {
            selectedColumnIndex = columns.findIndex((column) => column.id === reorderState.selectedAfterColumn!.id);
        }

        if (currentColumnIndex !== -1 && selectedColumnIndex !== -1) {
            const [columnToMove] = reorderedColumns.splice(currentColumnIndex, 1);
            if (selectedValue === BEFORE) {
                reorderedColumns.splice(
                    selectedColumnIndex > currentColumnIndex ? selectedColumnIndex - 1 : selectedColumnIndex,
                    0,
                    columnToMove
                );
            } else {
                reorderedColumns.splice(
                    selectedColumnIndex > currentColumnIndex ? selectedColumnIndex : selectedColumnIndex + 1,
                    0,
                    columnToMove
                );
            }
            setColumns(reorderedColumns);
        } else {
            console.error('Column not found');
        }
        setReorderWindowVisible(false);
    };

    const [newWidth, setNewWidth] = React.useState<number | null>(null);

    const resizeColumn = () => {
        if (newWidth != null && currentColumn != null) {
            const updatedColumns = columns.map((column) => {
                if (column.field === currentColumn.field) {
                    return { ...column, width: newWidth };
                }
                return column;
            });
            setColumns(updatedColumns);
            setResizeWindowVisible(false);
        }
    };

    const onGroupChange = React.useCallback((event: GridGroupChangeEvent) => {
        const newDataState = processWithGroups(products, event.group);
        setGroup(event.group);
        setResultState(newDataState);
    }, []);

    const handleOnClose = () => setShow(false);
    const handleSecondClose = () => setSecondShow(false);

    const handleContextMenu = React.useCallback((e: GridContextMenuEvent) => {
        const dataItem = e.dataItem as Product;
        setDataItemIndex(products.findIndex((p: Product) => p.ProductID === dataItem.ProductID));
        setSelectedRow(dataItem);
        e.nativeEvent.preventDefault();
        let targetElement = e.nativeEvent.target as HTMLElement | null;
        while (targetElement != null && !targetElement.classList.contains('k-chip')) {
            targetElement = targetElement.parentElement;
        }
        if (targetElement != null) {
            setShow(true);
            setDataItemIndex(e.dataItem.index);
            offset.current = {
                left: e.nativeEvent.clientX,
                top: e.nativeEvent.clientY
            };
        } else {
            setSecondShow(true);
            offset.current = {
                left: e.nativeEvent.clientX,
                top: e.nativeEvent.clientY
            };
        }
    }, []);

    const handleOnSelect = (e: MenuSelectEvent) => {
        if (typeof dataItemIndex === 'number') {
            const newGroup = [...group];
            const swapIndex = e.item.data.action === 'left' ? dataItemIndex - 1 : dataItemIndex + 1;
            if (swapIndex >= 0 && swapIndex < newGroup.length) {
                [newGroup[dataItemIndex], newGroup[swapIndex]] = [newGroup[swapIndex], newGroup[dataItemIndex]];
                setGroup(newGroup);
                setResultState(processWithGroups(products, newGroup));
            }
        }
        setShow(false);
    };

    const handleSecondSelect = (e: MenuSelectEvent) => {
        switch (e.item.data.action) {
            case 'moveUp':
                handleMoveUp();
                break;
            case 'moveDown':
                handleMoveDown();
                break;
            default:
        }
        setSecondShow(false);
    };

    const flattenGroup = (data: GroupResult[]): Product[] => {
        return data.flatMap((item) =>
            item.items ? flattenGroup(item.items as GroupResult[]) : [item as unknown as Product]
        ) as Product[];
    };

    const handleMoveUp = () => {
        const flatData = flattenGroup(resultState);

        const currentIndex = flatData.findIndex((item: Product) => item.ProductID === selectedRow?.ProductID);

        if (currentIndex > 0) {
            const newData = [...flatData];
            const [movingItem] = newData.splice(currentIndex, 1);
            newData.splice(currentIndex - 1, 0, movingItem);

            const groupedData = processWithGroups(newData, group);
            setResultState(groupedData);
        }
    };

    const handleMoveDown = () => {
        const flatData = flattenGroup(resultState);

        const currentIndex = flatData.findIndex((item: Product) => item.ProductID === selectedRow?.ProductID);

        if (currentIndex < resultState.length - 1) {
            const newData = [...flatData];
            const [movingItem] = newData.splice(currentIndex, 1);
            newData.splice(currentIndex + 1, 0, movingItem);

            const groupedData = processWithGroups(newData, group);
            setResultState(groupedData);
        }
    };

    const toggleReorderWindow = () => {
        setReorderWindowVisible(!reorderWindowVisible);
    };

    const toggleResizeWindow = () => {
        setResizeWindowVisible(!resizeWindowVisible);
    };

    return (
        <div style={{ height: '480px' }}>
            <Grid
                style={{ height: '480px' }}
                groupable={true}
                onContextMenu={handleContextMenu}
                data={resultState}
                onGroupChange={onGroupChange}
                group={group}
                navigatable={true}
            >
                {columns.map((column) => (
                    <Column
                        key={column.id}
                        field={column.field}
                        width={column.width}
                        columnMenu={(columnProps) => (
                            <CustomColumnMenu
                                {...columnProps}
                                columns={columns}
                                setColumns={setColumns}
                                onOpenReorderWindow={onOpenReorderWindow}
                                onOpenResizeWindow={onOpenResizeWindow}
                            />
                        )}
                    />
                ))}
            </Grid>
            <ContextMenu
                vertical={true}
                show={show}
                offset={offset.current}
                onClose={handleOnClose}
                onSelect={handleOnSelect}
            >
                <MenuItem text="Move next" icon="arrow-right" data={{ action: 'right' }} svgIcon={arrowRightIcon} />
                <MenuItem text="Move previous" icon="arrow-left" data={{ action: 'left' }} svgIcon={arrowLeftIcon} />
            </ContextMenu>
            <ContextMenu
                vertical={true}
                show={secondShow}
                offset={offset.current}
                onClose={handleSecondClose}
                onSelect={handleSecondSelect}
            >
                <MenuItem text="move up" data={{ action: 'moveUp' }} svgIcon={arrowUpIcon} />
                <MenuItem text="move down" data={{ action: 'moveDown' }} svgIcon={arrowDownIcon} />
            </ContextMenu>

            {reorderWindowVisible && currentColumn && (
                <Window title={'Reorder'} onClose={toggleReorderWindow} initialHeight={250}>
                    <p>
                        Move Column:
                        <span style={{ fontWeight: 'bold' }}> {currentColumn.field} </span>
                    </p>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px'
                            }}
                        >
                            <RadioButton
                                value={item.value}
                                checked={selectedValue === item.value}
                                onChange={handleRadioChange}
                                label={item.label}
                            />
                            <DropDownList
                                style={{
                                    marginLeft: '10px',
                                    width: '200px'
                                }}
                                data={columns}
                                textField="field"
                                dataItemKey="id"
                                value={
                                    index === 0 ? reorderState.selectedBeforeColumn : reorderState.selectedAfterColumn
                                }
                                onChange={(e) => handleChange(e, index + 1)}
                                disabled={selectedValue !== item.value}
                            />
                        </div>
                    ))}

                    <WindowActionsBar>
                        <Button onClick={reorderColumns}>
                            <SvgIcon icon={checkIcon} size="medium" style={{ marginRight: '5px' }} />
                            Reorder
                        </Button>
                        <Button onClick={toggleReorderWindow}>
                            <SvgIcon icon={cancelIcon} size="medium" style={{ marginRight: '5px' }} />
                            Cancel
                        </Button>
                    </WindowActionsBar>
                </Window>
            )}

            {resizeWindowVisible && currentColumn && (
                <Window title={'Resize Column'} onClose={toggleResizeWindow} initialHeight={200}>
                    <p>
                        Resize Column:
                        <span style={{ fontWeight: 'bold' }}> {currentColumn.field} </span>
                    </p>
                    <NumericTextBox
                        value={newWidth}
                        onChange={(e) => setNewWidth(e.value)}
                        format="n0"
                        min={50}
                        max={1000}
                        placeholder="Enter new width in pixels"
                        width="100%"
                    />
                    <WindowActionsBar>
                        <Button onClick={resizeColumn}>
                            <SvgIcon icon={checkIcon} size="medium" style={{ marginRight: '5px' }} />
                            Resize
                        </Button>
                        <Button onClick={toggleResizeWindow}>
                            <SvgIcon icon={cancelIcon} size="medium" style={{ marginRight: '5px' }} />
                            Cancel
                        </Button>
                    </WindowActionsBar>
                </Window>
            )}
        </div>
    );
};

export default App;
