import * as React from 'react';

import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridGroupColumnFn,
    GridGroupExpandChangeEvent,
    GridGroupingMode
} from '@progress/kendo-react-grid';
import { DataResult, GroupDescriptor, process, State } from '@progress/kendo-data-query';

import { setGroupIds, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import { DropDownList } from '@progress/kendo-react-dropdowns';

import products from './gd-products';
import { Product, COLUMNS } from './gd-interfaces';
import { GroupColumnMenu } from './groupColumnMenu';
import { DataColumnMenu } from './columnMenu';

const GROUP: GroupDescriptor[] = [{ field: 'Category.CategoryName' }, { field: 'ProductName' }];

const initialDataState: State = {
    take: 10,
    skip: 0,
    group: GROUP
};

const DISPLAY_MODES: GridGroupingMode[] = ['default', 'compact', 'singleColumn', 'multipleColumns'];

const processWithGroups = (data: Product[], dataState: State) => {
    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });
    return newDataState;
};

const App = () => {
    const [displayMode, setDisplayMode] = React.useState<GridGroupingMode>('multipleColumns');
    const [lockedColumns, setLockedColumns] = React.useState<Record<string, boolean>>({
        ProductID: true,
        ProductName: true
    });
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [resultState, setResultState] = React.useState<DataResult>(processWithGroups(products, initialDataState));

    const onDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        const newDataState = processWithGroups(products, event.dataState);
        setDataState(event.dataState);
        setResultState(newDataState);
    }, []);

    const handleGroupExpand = (event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    };

    const handleColumnLockToggle = React.useCallback((field: string, locked: boolean) => {
        setLockedColumns((prev) => ({ ...prev, [field]: locked }));
    }, []);

    const groupColumnFn: GridGroupColumnFn = (groupDescriptor) => {
        const width = groupDescriptor.field === 'Category.CategoryName' ? 200 : 300;
        return {
            width,
            columnMenu: GroupColumnMenu
        };
    };

    return (
        <div className="group-column-locked-demo">
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    alignItems: 'flex-end',
                    marginBottom: '16px'
                }}
            >
                <div>
                    <label htmlFor="display-mode" style={{ display: 'block', fontSize: '0.85em', marginBottom: '4px' }}>
                        Display mode
                    </label>
                    <DropDownList
                        id="display-mode"
                        data={DISPLAY_MODES}
                        value={displayMode}
                        onChange={(event) => setDisplayMode(event.value as GridGroupingMode)}
                        style={{ width: '160px' }}
                    />
                </div>
            </div>
            <Grid
                style={{ height: '450px' }}
                data={resultState}
                {...dataState}
                resizable={true}
                onDataStateChange={onDataStateChange}
                groupable={{
                    displayMode: displayMode,
                    footer: 'none',
                    groupColumn: groupColumnFn,
                    hideGroupedColumns: true
                }}
                lockGroups={true}
                onGroupExpandChange={handleGroupExpand}
                groupExpand={groupExpand}
                pageable={true}
            >
                {COLUMNS.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        title={col.title}
                        width={col.width}
                        locked={!!lockedColumns[col.field]}
                        columnMenu={(menuProps) => (
                            <DataColumnMenu
                                {...menuProps}
                                locked={!!lockedColumns[col.field]}
                                onColumnLockToggle={handleColumnLockToggle}
                            />
                        )}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default App;
