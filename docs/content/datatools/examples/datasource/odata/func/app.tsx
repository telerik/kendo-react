import React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { getter } from '@progress/kendo-react-common';
import { RemoteDataSource, useODataDataSource, EditDescriptor } from '@progress/kendo-react-data-tools';
import {
    Grid,
    GridColumn,
    GridDataStateChangeEvent,
    GridItemChangeEvent,
    GridToolbar
} from '@progress/kendo-react-grid';

export default function LocalDataSource() {
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [pending, startTransition] = React.useTransition();

    const baseUrl = 'https://demos.telerik.com/kendo-ui/service-v4/odata';
    const dataSource = useODataDataSource({
        defaultSkip: 0,
        take: 10,
        transport: {
            read: {
                url: baseUrl + '/Products'
            },
            update: {
                url: (dataItem) => `${baseUrl}/Products(${getter('ProductID')(dataItem)})`
            },
            create: {
                url: baseUrl + '/Products',
                data: (dataItem) => {
                    return { ...dataItem, ProductID: undefined };
                }
            },
            delete: {
                url: (dataItem) => `${baseUrl}/Products(${getter('ProductID')(dataItem)})`
            }
        },
        schema: {
            model: {
                id: 'ProductID'
            }
        }
    });

    const onDataStateChange = (event: GridDataStateChangeEvent) => {
        dataSource?.setDataState(event.dataState);
        startTransition(async () => {
            await dataSource?.read();
        });
    };

    const handleItemChange = (event: GridItemChangeEvent) => {
        dataSource?.update({ data: { ...event.dataItem, [event.field!]: event.value }, field: event.field });
    };

    const handleSyncClick = async () => {
        startTransition(async () => {
            await dataSource?.sync();
            await dataSource?.read();
            setEdit({});
        });
    };

    const handleAddClick = () => {
        dataSource?.create({ data: { ProductID: null } });
        setEdit(() => ({ null: true }));
    };

    const handleDiscardClick = () => {
        dataSource?.discard();
        setEdit({});
    };

    const handleLoad = () => {
        startTransition(async () => {
            await dataSource?.read();
        });
    };

    React.useEffect(() => {
        handleLoad();
    }, []);

    return (
        <DataSourceContext.Provider value={dataSource}>
            <Grid
                data={dataSource?.data}
                total={dataSource?.total}
                {...dataSource?.dataState}
                onDataStateChange={onDataStateChange}
                dataItemKey="ProductID"
                edit={edit}
                onEditChange={(event) => {
                    setEdit(event.edit);
                }}
                pageable={true}
                filterable={true}
                sortable={true}
                navigatable={true}
                groupable={true}
                onItemChange={handleItemChange}
                editable={{ mode: 'incell' }}
                showLoader={pending}
                style={{ height: '600px' }}
            >
                <GridToolbar>
                    <Button onClick={handleAddClick}>Add Item</Button>
                    <Button
                        themeColor={'primary'}
                        disabled={
                            !((dataSource?.updates.size || dataSource?.creates.size || dataSource?.deletes.size) > 0)
                        }
                        onClick={handleSyncClick}
                    >
                        Sync
                    </Button>
                    {(dataSource?.updates.size || dataSource?.creates.size || dataSource?.deletes.size) > 0 && (
                        <Button themeColor={'secondary'} onClick={handleDiscardClick}>
                            Discard
                        </Button>
                    )}
                </GridToolbar>
                <GridColumn
                    field="ProductID"
                    title="ID"
                    width="65px"
                    filterable={false}
                    sortable={false}
                    editable={false}
                />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Unit Price" filter="numeric" editor="numeric" />
                <GridColumn field="UnitsInStock" title="Units In Stock" /* filter="numeric" */ editor="numeric" />
                <GridColumn field="Discontinued" title="Discontinued" filter="boolean" editor="boolean" />
                <GridColumn filterable={false} sortable={false} editable={false} />
            </Grid>
        </DataSourceContext.Provider>
    );
}

const DataSourceContext = React.createContext<RemoteDataSource | null>(null);
