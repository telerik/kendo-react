import * as React from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { CustomColumnMenu } from './customColumnMenu';
import products from './gd-products';
import columns from './gd-lockedColumns';
import { orderBy, process, State } from '@progress/kendo-data-query';
import { columnInterface } from './gd-interfaces';

const initialDataState: State = {
    take: 8,
    skip: 0
};

const initialColumns: columnInterface[] = columns as columnInterface[];

const App = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [currentColumns, setCurrentColumns] = React.useState<Array<columnInterface>>(initialColumns);

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        setDataState(event.dataState);
    };

    const handleColumnLockToggle = (columnField, state) => {
        let newColumns = currentColumns.map((column) => {
            if (column.field === columnField) {
                column.locked = state;
            }
            return column;
        });
        setCurrentColumns(newColumns);
    };

    // place all locked columns first
    let sortedColumns = orderBy(currentColumns, [{ field: 'locked', dir: 'desc' }]);
    return (
        <div>
            <Grid
                data={process(products, dataState)}
                {...dataState}
                onDataStateChange={dataStateChange}
                sortable={true}
                pageable={{ type: 'input' }}
                pageSize={8}
                style={{ height: 450 }}
            >
                {sortedColumns.map((column, idx) => (
                    <Column
                        key={idx}
                        field={column.field}
                        title={column.title}
                        filter={column.filter}
                        locked={column.locked}
                        width={column.width}
                        columnMenu={(props) => (
                            <CustomColumnMenu
                                {...props}
                                onColumnLockToggle={handleColumnLockToggle}
                                locked={column.locked || false}
                            />
                        )}
                    />
                ))}
            </Grid>
            <br />
        </div>
    );
};

export default App;
