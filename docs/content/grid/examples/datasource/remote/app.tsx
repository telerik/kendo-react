import * as React from 'react';
import {
    Grid,
    GridColumn,
    GridCustomCellProps,
    GridDataStateChangeEvent,
    GridEditChangeEvent,
    GridItemChangeEvent,
    GridToolbar
} from '@progress/kendo-react-grid';
import { EditDescriptor, useRemoteDataSource } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';

type Post = {
    userId?: number;
    id: number | null;
    title: string;
    body: string;
};

const App = () => {
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [pending, startTransition] = React.useTransition();

    const dataSource = useRemoteDataSource<Post>({
        transport: {
            read: {
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET'
            },
            update: {
                url: (dataItem) => `https://jsonplaceholder.typicode.com/posts/${dataItem.id}`,
                method: 'PUT'
            },
            create: {
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST'
            },
            delete: {
                url: (dataItem) => `https://jsonplaceholder.typicode.com/posts/${dataItem.id}`,
                method: 'DELETE'
            }
        },
        schema: {
            model: {
                id: 'id'
            }
        }
    });

    const handleDataStateChange = (event: GridDataStateChangeEvent) => {
        dataSource.setDataState(event.dataState);
    };

    const handleAddClick = () => {
        dataSource.create({
            data: {
                id: null,
                title: '',
                body: ''
            }
        });
        setEdit({ null: true });
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        if (dataSource.creates.size || dataSource.updates.size) {
            startTransition(async () => {
                await dataSource.sync();
                setEdit(event.edit);
            });
        } else {
            setEdit(event.edit);
        }
    };

    const handleItemChange = (event: GridItemChangeEvent) => {
        dataSource.update({
            data: { ...event.dataItem, [event.field!]: event.value },
            field: event.field
        });
    };

    const DeleteCell = (props: GridCustomCellProps) => {
        return (
            <td {...props.tdProps} className={classNames(props.className, 'k-text-center')}>
                <Button
                    themeColor={'error'}
                    fillMode={'outline'}
                    onClick={() => {
                        if (confirm(`Are you sure you want to delete the post with ID ${props.dataItem.id}?`)) {
                            startTransition(async () => {
                                dataSource.delete({ data: props.dataItem });
                                await dataSource.syncItem({ data: props.dataItem });
                            });
                        }
                    }}
                >
                    Delete
                </Button>
            </td>
        );
    };

    React.useEffect(() => {
        startTransition(async () => {
            await dataSource.read();
        });
    }, []);

    return (
        <div>
            <Grid
                dataItemKey="id"
                style={{ height: '400px' }}
                data={dataSource.data}
                edit={edit}
                onEditChange={handleEditChange}
                editable={true}
                onDataStateChange={handleDataStateChange}
                showLoader={pending}
                onItemChange={handleItemChange}
                {...dataSource.dataState}
            >
                <GridToolbar>
                    <Button onClick={handleAddClick} themeColor={'primary'}>
                        Add New Product
                    </Button>
                </GridToolbar>
                <GridColumn field="id" title="ID" width="75px" filterable={false} sortable={false} editable={false} />
                <GridColumn field="title" title="Title" width="175px" />
                <GridColumn field="body" title="Body" />
                <GridColumn
                    width={85}
                    cells={{
                        data: DeleteCell
                    }}
                />
            </Grid>
        </div>
    );
};

export default App;
