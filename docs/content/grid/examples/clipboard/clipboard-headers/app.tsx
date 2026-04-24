import * as React from 'react';
import {
    Grid,
    GridHandle,
    GridColumn as Column,
    GridSelectionChangeEvent,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import products from './gd-products';
import { Product } from './gd-interfaces';
import {
    ClipboardActionType,
    ClipboardDataEvent,
    populateClipboardData,
    SelectDescriptor
} from '@progress/kendo-react-data-tools';

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
            if (isFieldAffected && props.dataItem.clipboardAction.type === ClipboardActionType.copy) {
                setBgColor('');
            }
        }, 200);
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

    const gridRef = React.useRef<GridHandle>(null);
    const previousCopiedItems = React.useRef<any[]>([]);

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const handleClipboard = (event: ClipboardDataEvent) => {
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
            <Grid
                ref={gridRef}
                style={{ height: '400px' }}
                data={data}
                autoProcessData={true}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: true,
                    cell: true,
                    mode: 'multiple'
                }}
                navigatable={true}
                clipboard={{ copyHeaders: true }}
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
        </div>
    );
};

export default App;
