import * as React from 'react';
import {
    Grid,
    GridHandle,
    GridColumn as Column,
    GridSelectionChangeEvent,
    GridSelectableMode,
    GridCustomCellProps
} from '@progress/kendo-react-grid';

import products from './gd-products';

import { Checkbox, CheckboxChangeEvent, RadioGroup, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';
import { getter } from '@progress/kendo-react-common';
import { Product } from './gd-interfaces';
import {
    ClipboardActionType,
    ClipboardDataEvent,
    ColumnBaseProps,
    GridClipboardEvent,
    populateClipboardData,
    SelectDescriptor
} from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';

interface selectionModesType {
    value: GridSelectableMode | undefined;
    label: string;
}

const DATA_ITEM_KEY = 'ProductID';
const idGetter = getter(DATA_ITEM_KEY);

const updateDataItem = (data: any[], item: any) => {
    const itemIndex = data.findIndex((dataItem) => idGetter(dataItem) === idGetter(item.dataItem));
    if (itemIndex > -1) {
        const updatedItem = Object.assign(
            {},
            data[itemIndex],
            Object.fromEntries([...item.fields.map((field) => [field, item.dataItem[field]])])
        );
        data[itemIndex] = updatedItem;
    }
};

const selectionModes: selectionModesType[] = [
    { value: 'single', label: 'Single selection mode' },
    { value: 'multiple', label: 'Multiple selection mode' }
];

const CustomCell = (props: GridCustomCellProps) => {
    const [bgColor, setBgColor] = React.useState('');

    React.useEffect(() => {
        const isFieldAffected =
            props.dataItem.clipboardAction && props.dataItem.clipboardAction.fields.indexOf(props.field) !== -1;
        if (isFieldAffected && props.dataItem.clipboardAction.type === ClipboardActionType.copy) {
            setBgColor('skyblue');
        }

        if (isFieldAffected && props.dataItem.clipboardAction.type === ClipboardActionType.paste) {
            setBgColor('lightgreen');
        }

        if (isFieldAffected && props.dataItem.clipboardAction.type === ClipboardActionType.cut) {
            setBgColor('red');
        }
        setTimeout(() => {
            if (isFieldAffected) {
                setBgColor('');
            }
        }, 500);
    }, [props.dataItem.clipboardAction]);

    return (
        <td
            {...props.tdProps}
            style={{
                backgroundColor: bgColor
            }}
        >
            {props.children}
        </td>
    );
};

const App = () => {
    const [data, setData] = React.useState<Product[]>(
        products.map((dataItem: Product) => Object.assign({ selected: false }, dataItem))
    );
    const [select, setSelect] = React.useState<SelectDescriptor>({});
    const [copiedText, setCopiedText] = React.useState<string>('');
    const [copiedItems, setCopiedItems] = React.useState<any[]>([]);
    const [pastedItems, setPastedItems] = React.useState<any[]>([]);
    const [dragEnabled, setDragEnabled] = React.useState<boolean>(true);
    const [cellEnabled, setCellEnabled] = React.useState<boolean>(true);
    const [selectionMode, setSelectionMode] = React.useState<GridSelectableMode | undefined>(selectionModes[1].value);
    const gridRef = React.useRef<GridHandle>(null);
    const previousCopiedItems = React.useRef<any[]>([]);

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const onDragChange = (event: CheckboxChangeEvent) => {
        setDragEnabled(event.value);
    };

    const onCellChange = (event: CheckboxChangeEvent) => {
        setCellEnabled(event.value);
    };

    const onSelectionModeChange = (event: RadioGroupChangeEvent) => {
        setSelectionMode(event.value);
    };

    const handleCopyClick = () => {
        const eventParams = {
            type: ClipboardActionType.copy,
            columns: gridRef.current!.columns as ColumnBaseProps[],
            dataItemKey: DATA_ITEM_KEY
        };

        performClipboardAction(eventParams);
    };

    const handleClipboard = (event: GridClipboardEvent) => {
        performClipboardAction(event);
    };

    const performClipboardAction = (event: ClipboardDataEvent) => {
        const gridClipboardData = populateClipboardData({
            event,
            data,
            selectedState: select,
            previousCopiedItems: previousCopiedItems.current
        });
        const { clipboardData, copiedItems, pastedItems } = gridClipboardData;

        setCopiedText(clipboardData);

        if (event.type !== ClipboardActionType.paste) {
            setCopiedItems(copiedItems);
            previousCopiedItems.current = copiedItems;
        } else {
            const currentPastedItems = pastedItems?.slice() || [];

            setPastedItems(currentPastedItems);
            const newData = data.slice();
            currentPastedItems.forEach((item) => {
                updateDataItem(newData, item);
            });
            setData(newData);
        }
    };

    return (
        <div>
            <Button onClick={handleCopyClick}>Copy</Button>
            <Checkbox value={dragEnabled} label={'Enable drag selection'} onChange={onDragChange} />
            <Checkbox value={cellEnabled} label={'Enable cell selection'} onChange={onCellChange} />
            <RadioGroup value={selectionMode} onChange={onSelectionModeChange} data={selectionModes} />
            <Grid
                ref={gridRef}
                style={{ height: '400px' }}
                data={data}
                autoProcessData={true}
                dataItemKey={DATA_ITEM_KEY}
                select={select}
                selectable={{
                    enabled: true,
                    drag: dragEnabled,
                    cell: cellEnabled,
                    mode: selectionMode
                }}
                navigatable={true}
                clipboard={true}
                onClipboard={handleClipboard}
                onSelectionChange={onSelectionChange}
                cells={{
                    data: CustomCell
                }}
            >
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="ReorderLevel" title="Reorder Level" />
            </Grid>
            clipboardData:
            <code
                style={{
                    display: 'block',
                    maxHeight: '200px',
                    overflow: 'auto',
                    whiteSpace: 'pre-line'
                }}
            >
                {copiedText}
            </code>
            <hr />
            copied items:
            <code
                style={{
                    display: 'block',
                    maxHeight: '200px',
                    overflow: 'auto',
                    whiteSpace: 'pre-line'
                }}
            >
                {copiedItems
                    .map((item) => `${JSON.stringify(item.dataItem, [DATA_ITEM_KEY, ...item.fields])}`)
                    .join('\r\n')}
            </code>
            pasted items:
            <code
                style={{
                    display: 'block',
                    maxHeight: '200px',
                    overflow: 'auto',
                    whiteSpace: 'pre-line'
                }}
            >
                {pastedItems.map((item) => `${JSON.stringify(item.dataItem)}`).join('\r\n')}
            </code>
        </div>
    );
};

export default App;
