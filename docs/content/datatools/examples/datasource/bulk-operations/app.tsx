import React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { classNames, getter } from '@progress/kendo-react-common';
import { RemoteDataSource, useODataDataSource } from '@progress/kendo-react-data-tools';
import { xIcon } from '@progress/kendo-svg-icons';
import {
    Grid,
    GridColumn,
    GridCustomCellProps,
    GridCustomRowProps,
    GridDataStateChangeEvent,
    GridItemChangeEvent,
    GridToolbar
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Slide } from '@progress/kendo-react-animation';
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Badge } from '@progress/kendo-react-indicators';

const DataSourceContext = React.createContext<RemoteDataSource | null>(null);

export default function BulkOperationsDemo() {
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

    const handleBulkSyncClick = async () => {
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

    const handleRemoveError = (error) => {
        dataSource?.removeError({ error });
    };

    const handleLoad = () => {
        startTransition(async () => {
            await dataSource?.read();
        });
    };

    React.useEffect(() => {
        handleLoad();
    }, []);

    // Calculate if there are any pending changes
    const hasPendingChanges =
        dataSource && (dataSource.creates.size > 0 || dataSource.updates.size > 0 || dataSource.deletes.size > 0);

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
                cells={{
                    data: DirtyDataCell
                }}
                rows={{
                    data: InvalidDataRow
                }}
                pageable={true}
                filterable={true}
                sortable={true}
                navigatable={true}
                onItemChange={handleItemChange}
                editable={{ mode: 'incell' }}
                showLoader={pending}
                style={{ height: '600px' }}
            >
                <GridToolbar>
                    <Button onClick={handleAddClick}>Add New Product</Button>
                    <Button themeColor="primary" disabled={!hasPendingChanges} onClick={handleBulkSyncClick}>
                        Sync All Changes
                    </Button>
                    {hasPendingChanges && (
                        <Button themeColor="secondary" onClick={handleDiscardClick}>
                            Discard All Changes
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
                <GridColumn field="UnitsInStock" title="Units In Stock" filter="numeric" editor="numeric" />
                <GridColumn field="Discontinued" title="Discontinued" filter="boolean" editor="boolean" />
                <GridColumn
                    width="200px"
                    filterable={false}
                    sortable={false}
                    editable={false}
                    title="Actions"
                    cells={{data: ActionCell}}
                />
            </Grid>
            <NotificationGroup>
                <Slide direction="up">
                    {Array.from(dataSource?.errors.entries() || [])
                        .filter(([id]) => id === undefined)
                        .map(([id, errors], index) => (
                            <React.Fragment key={index}>
                                {errors.map((error) => (
                                    <Notification
                                        key={index}
                                        type={{ style: 'error', icon: true }}
                                        closable={true}
                                        onClose={handleRemoveError.bind(null, error)}
                                    >
                                        <span key={index}>{typeof error === 'string' ? error : error?.message}</span>
                                    </Notification>
                                ))}
                            </React.Fragment>
                        ))}
                </Slide>
            </NotificationGroup>
        </DataSourceContext.Provider>
    );
}

// Shows dirty indicator for modified cells
const DirtyDataCell = (props: GridCustomCellProps) => {
    const dataSource = React.useContext(DataSourceContext);
    const id = props.dataItem?.ProductID;

    const showDirty = dataSource?.creates.has(id)
        ? dataSource?.dirty.has(id) && props.field === 'ProductID'
        : dataSource?.dirty.get(id)?.has(props.field!);

    return (
        <td {...props.tdProps} className={classNames(props.tdProps?.className, { 'k-dirty-cell': showDirty })}>
            {showDirty ? <span className="k-dirty" /> : null}
            {props.children}
        </td>
    );
};

// Shows errors for invalid rows
const InvalidDataRow = (props: GridCustomRowProps) => {
    const trElement = React.useRef<HTMLTableRowElement>(null);
    const dataSource = React.useContext(DataSourceContext);

    const errors = dataSource?.errors.get(props.dataItem?.ProductID);

    const handleDismissClick = () => {
        dataSource?.removeErrors({ data: props.dataItem });
    };

    return (
        <>
            {errors?.length ? (
                <Popover show={Boolean(errors?.length)} anchor={trElement && trElement.current} position="bottom">
                    <div>
                        <ul>
                            {errors.map((error, index) => (
                                <li key={index}>{typeof error === 'string' ? error : error?.message}</li>
                            ))}
                        </ul>
                    </div>
                    <PopoverActionsBar>
                        <Button onClick={handleDismissClick}>Dismiss</Button>
                    </PopoverActionsBar>
                </Popover>
            ) : null}
            <tr {...props.trProps} ref={trElement}>
                {props.children}
            </tr>
        </>
    );
};

// Custom cell with action buttons (delete, sync individual item)
const ActionCell = (props: GridCustomCellProps) => {
    const dataSource = React.useContext(DataSourceContext);
    const [isSyncing, startSyncing] = React.useTransition();
    const id = props.dataItem?.ProductID;

    // Check if this item has pending changes
    const hasChanges = dataSource?.updates.has(id) || dataSource?.creates.has(id);

    const handleDeleteClick = () => {
        dataSource?.delete({ data: props.dataItem });
    };

    const handleSyncItemClick = async () => {
        if (!dataSource) return;

        try {
            startSyncing(async () => {
                // Sync just this specific item
                await dataSource.syncItem({ data: props.dataItem });
                // Refresh data after sync
                await dataSource.read();
            });
        } catch (error) {
            console.error('Error syncing item:', error);
        }
    };

    return (
        <td {...props.tdProps}>
            <div className="k-display-flex k-gap-2">
                {hasChanges && (
                    <Button size="small" themeColor="primary" onClick={handleSyncItemClick} disabled={isSyncing}>
                        {isSyncing ? 'Syncing...' : 'Sync Item'}
                    </Button>
                )}
                <Button size="small" themeColor="error" fillMode="outline" svgIcon={xIcon} onClick={handleDeleteClick}>
                    Delete
                </Button>
            </div>
        </td>
    );
};
