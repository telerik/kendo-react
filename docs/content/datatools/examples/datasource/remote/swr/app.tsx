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
import useSWR, { mutate } from 'swr';

type Post = {
    userId?: number;
    id: number | null;
    title: string;
    body: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const App = () => {
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [isPending, startTransition] = React.useTransition();

    const { data, isLoading } = useSWR<Array<Post>>('https://jsonplaceholder.typicode.com/posts', fetcher);

    const dataSource = useRemoteDataSource<Post>({
        reads: data?.reduce((acc, item) => {
            acc.set(item.id!, item);
            return acc;
        }, new Map<number, Post>()),
        transport: {
            read: {
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET',
                onSuccess: (data) => {
                    // Cache the data in SWR
                    mutate('https://jsonplaceholder.typicode.com/posts', data, false);
                    return data;
                }
            },
            update: {
                url: (dataItem) => `https://jsonplaceholder.typicode.com/posts/${dataItem.id}`,
                method: 'PUT',
                onSuccess: (dataItem) => {
                    // Update the SWR cache with the new data
                    mutate('https://jsonplaceholder.typicode.com/posts', dataSource.data, false);
                    return dataItem;
                }
            },
            create: {
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                onSuccess: (dataItem) => {
                    // Update the SWR cache with the new data
                    mutate('https://jsonplaceholder.typicode.com/posts', dataSource.data, false);
                    return dataItem;
                }
            },
            delete: {
                url: (dataItem) => `https://jsonplaceholder.typicode.com/posts/${dataItem.id}`,
                method: 'DELETE',
                onResponse: () => null,
                onSuccess: (dataItem) => {
                    // Update the SWR cache with the new data
                    mutate('https://jsonplaceholder.typicode.com/posts', dataSource.data, false);
                    return dataItem;
                }
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
        mutate('https://jsonplaceholder.typicode.com/posts');
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
            data: { ...event.dataItem, [event.field!]: event.value }
        });
    };

    const DeleteCell = (props: GridCustomCellProps) => {
        return (
            <td {...props.tdProps} className="k-text-center">
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
                showLoader={isPending || isLoading}
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
