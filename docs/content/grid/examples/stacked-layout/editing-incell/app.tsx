import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridItemChangeEvent,
    GridEditChangeEvent
} from '@progress/kendo-react-grid';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { Customer, customers } from './data';

const DATA_ITEM_KEY = 'CustomerID';

const countries = Array.from(new Set(customers.map((c) => c.Country)));

const CountryCell = (props) => {
    const { dataItem, stackedCellProps, isInEdit, dataIndex, onItemChange } = props;
    if (!dataItem) return null;

    const handleChange = (e: DropDownListChangeEvent) => {
        onItemChange({
            dataItem: dataItem,
            dataIndex: dataIndex || 0,
            field: 'Country',
            syntheticEvent: e.syntheticEvent,
            value: e.value
        } as any);
    };

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                {isInEdit ? (
                    <DropDownList
                        data={countries}
                        value={dataItem.Country}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                ) : (
                    <span>{dataItem.Country}</span>
                )}
            </div>
        </div>
    );
};

const App = () => {
    const [data, setData] = React.useState<Array<Customer>>(customers);
    const [changes, setChanges] = React.useState<boolean>(false);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    const saveChanges = () => {
        customers.splice(0, customers.length, ...data);
        setChanges(false);
        setEdit({});
    };

    const cancelChanges = () => {
        setChanges(false);
        setData(customers);
        setEdit({});
    };

    const itemChange = (event: GridItemChangeEvent) => {
        if (event.field) {
            setData((data) =>
                data.map((item) =>
                    item.CustomerID === event.dataItem.CustomerID ? { ...item, [event.field!]: event.value } : item
                )
            );
        }
        setChanges(true);
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            dataItemKey={DATA_ITEM_KEY}
            dataLayoutMode="stacked"
            stackedLayoutSettings={{ cols: 2 }}
            rowHeight={50}
            edit={edit}
            editable={{ mode: 'incell' }}
            onEditChange={handleEditChange}
            onItemChange={itemChange}
        >
            <GridToolbar>
                <Button title="Save Changes" type="button" onClick={saveChanges} disabled={!changes}>
                    Save Changes
                </Button>
                <Button title="Cancel Changes" type="button" onClick={cancelChanges} disabled={!changes}>
                    Cancel Changes
                </Button>
            </GridToolbar>
            <Column field="CustomerID" title="Id" editable={false} />
            <Column field="ContactName" title="Contact Name" />
            <Column field="CompanyName" title="Company Name" />
            <Column
                field="Country"
                title="Country"
                cells={{
                    stackedData: (props) => <CountryCell {...props} onItemChange={itemChange} />
                }}
            />
        </Grid>
    );
};

export default App;
