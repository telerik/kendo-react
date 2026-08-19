import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridGroupExpandChangeEvent,
    GridCustomCellProps,
    GridGroupingMode
} from '@progress/kendo-react-grid';
import { AggregateDescriptor, DataResult, process, State } from '@progress/kendo-data-query';
import { setGroupIds, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Checkbox } from '@progress/kendo-react-inputs';
import products from './gd-products';
import { Product } from './gd-interfaces';

const aggregates: AggregateDescriptor[] = [
    { field: 'UnitsInStock', aggregate: 'sum' },
    { field: 'UnitPrice', aggregate: 'average' }
];

const initialDataState: State = {
    take: 30,
    skip: 0,
    group: [
        { field: 'Category.CategoryName', aggregates },
        { field: 'UnitsInStock', aggregates }
    ]
};

const displayModes: GridGroupingMode[] = ['default', 'compact', 'singleColumn', 'multipleColumns'];

const processWithGroups = (data: Product[], dataState: State) => {
    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });
    return newDataState;
};

const SumCell = (props: GridCustomCellProps) => {
    const value = props.dataItem.aggregates?.UnitsInStock?.sum;
    return <td {...props.tdProps}>Sum: {value}</td>;
};

const AvgCell = (props: GridCustomCellProps) => {
    const value = props.dataItem.aggregates?.UnitPrice?.average;
    return <td {...props.tdProps}>Avg: {value !== undefined ? value.toFixed(2) : ''}</td>;
};

const App = () => {
    const [displayMode, setDisplayMode] = React.useState<GridGroupingMode>('default');
    const [stickyHeaders, setStickyHeaders] = React.useState(true);
    const [stickyFooters, setStickyFooters] = React.useState(true);
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [resultState, setResultState] = React.useState<DataResult>(processWithGroups(products, initialDataState));

    const onDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        const groups = event.dataState.group;
        if (groups) {
            groups.forEach((group) => (group.aggregates = aggregates));
        }
        const newDataState = processWithGroups(products, event.dataState);
        setDataState(event.dataState);
        setResultState(newDataState);
    }, []);

    const onGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    }, []);

    return (
        <div>
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
                        data={displayModes}
                        value={displayMode}
                        onChange={(event) => setDisplayMode(event.value as GridGroupingMode)}
                        style={{ width: '180px' }}
                    />
                </div>
                <Checkbox
                    label="Sticky headers"
                    checked={stickyHeaders}
                    onChange={(event) => setStickyHeaders(!!event.value)}
                />
                <Checkbox
                    label="Sticky footers"
                    checked={stickyFooters}
                    onChange={(event) => setStickyFooters(!!event.value)}
                />
            </div>
            <Grid
                style={{ height: '500px' }}
                data={resultState}
                total={resultState.total}
                groupable={{
                    displayMode,
                    stickyHeaders,
                    stickyFooters,
                    footer: 'visible'
                }}
                onDataStateChange={onDataStateChange}
                onGroupExpandChange={onGroupExpandChange}
                groupExpand={groupExpand}
                {...dataState}
            >
                <Column field="ProductID" title="ID" filter="numeric" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" filter="numeric" cells={{ groupFooter: AvgCell }} />
                <Column field="UnitsInStock" title="Units In Stock" filter="numeric" cells={{ groupFooter: SumCell }} />
                <Column field="Category.CategoryName" title="Category Name" />
                <Column field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
