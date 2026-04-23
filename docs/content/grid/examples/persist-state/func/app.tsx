import * as React from 'react';
import {
    Grid,
    GridColumn,
    GridToolbar,
    GridDataStateChangeEvent,
    GridFilterChangeEvent,
    GridColumnsStateChangeEvent
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

import { CompositeFilterDescriptor, DataResult, process, SortDescriptor } from '@progress/kendo-data-query';
import orders from './gd-orders';

interface GridState extends DataResult {
    sort?: SortDescriptor[];
    take?: number;
    skip?: number;
    filter?: CompositeFilterDescriptor;
}

const App = () => {
    const formattedOrders = orders.map((order) => {
        const orderDate = order.orderDate && order.orderDate.substring(0, 10);
        const shippedDate = order.shippedDate && order.shippedDate.substring(0, 10);
        return { ...order, orderDate, shippedDate };
    });

    const [dataState, setDataState] = React.useState<GridState>({
        data: formattedOrders,
        total: formattedOrders.length,
        filter: { logic: 'and', filters: [] },
        skip: 0,
        take: 20,
        sort: [{ field: 'orderDate', dir: 'desc' }]
    });

    const [columns] = React.useState([
        { field: 'customerID', width: 200 },
        { field: 'orderDate', width: 200 },
        { field: 'shipName', width: 200 },
        { field: 'freight', width: 200 },
        {
            field: 'shippedDate',
            width: 200
        },
        { field: 'employeeID', width: 200 },
        { field: 'orderID', width: 200 }
    ]);
    const [columnsState, setColumnsState] = React.useState(() => {
        const loadedColumns = localStorage.getItem('gridColumns');
        return loadedColumns ? JSON.parse(loadedColumns) : null;
    });

    const saveStateToLocalStorage = () => {
        const state = {
            dataState,
            columnsState
        };
        localStorage.setItem('gridState', JSON.stringify(state));
    };

    const loadStateFromLocalStorage = () => {
        const savedState = localStorage.getItem('gridState');
        if (savedState) {
            const { dataState: savedDataState, columnsState: savedColumns } = JSON.parse(savedState);
            setDataState(savedDataState);
            setColumnsState(savedColumns);
        }
    };

    const onColumnsStateChange = (event: GridColumnsStateChangeEvent) => {
        setColumnsState(event.columnsState);
    };

    const onDataStateChange = (event: GridDataStateChangeEvent) => {
        const { dataState } = event;
        if (dataState) {
            const { filter, sort, skip, take } = dataState;
            const updatedFilter = filter || dataState.filter;
            const updatedSkip = skip !== undefined ? skip : dataState.skip;
            const updatedTake = take !== undefined ? take : dataState.take;
            setDataState((prevState) => ({
                ...prevState,
                filter: updatedFilter,
                sort,
                skip: updatedSkip,
                take: updatedTake
            }));
        }
    };

    const onFilterChange = (event: GridFilterChangeEvent) => {
        const newFilter = event.filter ? { ...event.filter } : { logic: 'and', filters: [] };

        setDataState((prevState: any) => ({
            ...prevState,
            filter: newFilter
        }));
    };

    const onPageChange = (event: any) => {
        const newSkip = event.page.skip;
        const newTake = event.page.take;
        setDataState((prevState) => ({
            ...prevState,
            skip: newSkip,
            take: newTake
        }));
    };

    React.useEffect(() => {
        loadStateFromLocalStorage();
    }, []);

    const processedData = process(dataState.data, {
        filter: dataState.filter,
        sort: dataState.sort,
        skip: dataState.skip,
        take: dataState.take
    });

    return (
        <div>
            <Grid
                style={{ height: '700px' }}
                sortable={true}
                sort={dataState.sort}
                filterable={true}
                resizable={true}
                reorderable={true}
                pageable={{ buttonCount: 4, pageSizes: true }}
                data={processedData}
                filter={dataState.filter}
                onFilterChange={onFilterChange}
                columnsState={columnsState}
                onColumnsStateChange={onColumnsStateChange}
                onDataStateChange={onDataStateChange}
                skip={dataState.skip}
                take={dataState.take}
                onPageChange={onPageChange}
            >
                {columns.map((column, index) => {
                    return <GridColumn key={index} {...column} />;
                })}
                <GridToolbar>
                    <Button
                        title="Export to Excel"
                        themeColor={'primary'}
                        type="button"
                        onClick={saveStateToLocalStorage}
                    >
                        Save Data
                    </Button>
                    &nbsp;
                    <Button themeColor={'primary'} type="button" onClick={loadStateFromLocalStorage} title="Load Data">
                        Load Data
                    </Button>
                </GridToolbar>
            </Grid>
        </div>
    );
};

export default App;
