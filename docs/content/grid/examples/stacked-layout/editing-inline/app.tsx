import * as React from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent, GridToolbar } from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { saveIcon, cancelIcon } from '@progress/kendo-svg-icons';
import { customers, Customer, countries } from './data';

const DATA_ITEM_KEY = 'CustomerID';

const CountryCell = (props) => {
    const { dataItem, stackedCellProps, isInEdit, dataIndex, onItemChange, title } = props;

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
            <div className="k-grid-stack-header">{title}</div>
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

const CommandCell = (props) => {
    const { dataItem, stackedCellProps, isInEdit, onEdit, onSave, onCancel, onRemove, onAdd, onDiscard, title } = props;
    if (!dataItem) return null;

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{title}</div>
            <div className="k-grid-stack-content">
                {isInEdit ? (
                    (dataItem as any).new ? (
                        <>
                            <Button themeColor="primary" svgIcon={saveIcon} onClick={() => onAdd(dataItem)}>
                                Add
                            </Button>
                            <Button svgIcon={cancelIcon} onClick={() => onDiscard(dataItem)}>
                                Discard
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button themeColor="primary" svgIcon={saveIcon} onClick={onSave}>
                                Save
                            </Button>
                            <Button svgIcon={cancelIcon} onClick={onCancel}>
                                Cancel
                            </Button>
                        </>
                    )
                ) : (
                    <>
                        <Button themeColor="primary" onClick={() => onEdit(dataItem)}>
                            Edit
                        </Button>
                        <Button themeColor="base" onClick={() => onRemove(dataItem)}>
                            Remove
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

const App = () => {
    const [data, setData] = React.useState<Customer[]>([...customers]);
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [originalItem, setOriginalItem] = React.useState<Customer | null>(null);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const field = event.field || '';
        setData((currentData) =>
            currentData.map((item) => {
                if (item[DATA_ITEM_KEY] === event.dataItem[DATA_ITEM_KEY]) {
                    return {
                        ...item,
                        [field]: event.value
                    };
                }
                return item;
            })
        );
    };

    const handleEdit = (dataItem: Customer) => {
        setOriginalItem({ ...dataItem });
        setEdit({ [dataItem[DATA_ITEM_KEY]]: true });
    };

    const handleSave = () => {
        setEdit({});
        setOriginalItem(null);
    };

    const handleCancel = () => {
        if (originalItem) {
            const newData = data.map((item) => {
                if (item[DATA_ITEM_KEY] === originalItem[DATA_ITEM_KEY]) {
                    return { ...originalItem };
                }
                return item;
            });
            setData(newData);
        }
        setEdit({});
        setOriginalItem(null);
    };

    const handleRemove = (dataItem: Customer) => {
        const newData = data.filter((item) => item[DATA_ITEM_KEY] !== dataItem[DATA_ITEM_KEY]);
        setData(newData);
    };

    const handleAdd = (dataItem: Customer) => {
        const newData = data.map((item) => {
            if (item[DATA_ITEM_KEY] === dataItem[DATA_ITEM_KEY]) {
                const { new: isNew, ...rest } = item as any;
                return rest;
            }
            return item;
        });
        setData(newData);
        setEdit({});
    };

    const handleDiscard = (dataItem: Customer) => {
        const newData = data.filter((item) => item[DATA_ITEM_KEY] !== dataItem[DATA_ITEM_KEY]);
        setData(newData);
        setEdit({});
    };

    const addNew = () => {
        const newDataItem = {
            CustomerID: data.reduce((acc, current) => Math.max(acc, current.CustomerID), 0) + 1,
            ContactName: '',
            ContactTitle: '',
            CompanyName: '',
            Country: '',
            City: '',
            Budget: 0,
            OrderDate: new Date(),
            IsActive: true,
            new: true
        };
        setData([newDataItem, ...data]);
        setEdit({ [newDataItem.CustomerID]: true });
    };

    return (
        <Grid
            data={data}
            dataItemKey={DATA_ITEM_KEY}
            dataLayoutMode="stacked"
            stackedLayoutSettings={{ cols: 2 }}
            style={{ width: '100%' }}
            edit={edit}
            editable={{ enabled: true, mode: 'inline' }}
            selectable={{
                enabled: true,
                mode: 'single'
            }}
            defaultSelect={{ 2: true }}
            onItemChange={handleItemChange}
            pageable={true}
            defaultSkip={0}
            defaultTake={3}
            autoProcessData={true}
        >
            <GridToolbar>
                <Button title="Add new" themeColor="primary" onClick={addNew} type="button">
                    Add new
                </Button>
            </GridToolbar>
            <Column field="CompanyName" title="Company Name" editor="text" editable={true} />
            <Column field="ContactName" title="Contact Name" editor="text" editable={true} />
            <Column
                field="Country"
                title="Country"
                cells={{
                    stackedData: (props) => <CountryCell {...props} onItemChange={handleItemChange} />
                }}
            />
            <Column field="Budget" title="Budget" editor="numeric" editable={true} />
            <Column field="OrderDate" title="Order Date" editor="date" editable={true} />
            <Column field="IsActive" title="Active" editor="boolean" editable={true} />
            <Column
                title="Commands"
                cells={{
                    stackedData: (props) => (
                        <CommandCell
                            {...props}
                            onEdit={handleEdit}
                            onSave={handleSave}
                            onCancel={handleCancel}
                            onRemove={handleRemove}
                            onAdd={handleAdd}
                            onDiscard={handleDiscard}
                        />
                    )
                }}
            />
        </Grid>
    );
};

export default App;
