import * as React from 'react';

import { Grid, GridColumn as Column, GridCustomCellProps, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { process, State, AggregateDescriptor } from '@progress/kendo-data-query';
import { setGroupIds } from '@progress/kendo-react-data-tools';

import products from './gd-products';

const aggregates: AggregateDescriptor[] = [
    { field: 'UnitPrice', aggregate: 'average' },
    { field: 'UnitsInStock', aggregate: 'sum' }
];

const initialDataState: State = {
    group: [{ field: 'UnitsInStock' }, { field: 'ProductName' }]
};

const processWithGroups = (data: typeof products, dataState: State) => {
    if (dataState.group) {
        dataState.group.forEach((group) => (group.aggregates = aggregates));
    }
    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });
    return newDataState;
};

type TdProps = React.TdHTMLAttributes<HTMLTableCellElement> & { key?: React.Key };

const App = () => {
    interface CustomCellProps extends GridCustomCellProps {
        color: string;
    }

    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [resultState, setResultState] = React.useState(() => processWithGroups(products, initialDataState));

    const handleDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        setDataState(event.dataState);
        setResultState(processWithGroups(products, event.dataState));
    }, []);

    const CustomCell = (props: CustomCellProps) => {
        if (!props.tdProps) {
            return null;
        }
        const { key: tdKey, ...tdProps } = props.tdProps as TdProps;
        const td2Props = props.td2Props as TdProps | null | undefined;
        const { key: td2Key, ...restTd2Props } = td2Props || {};
        return (
            <>
                <td
                    key={tdKey}
                    {...tdProps}
                    style={{
                        ...tdProps.style,
                        backgroundColor: props.color
                    }}
                >
                    {props.children && (
                        <span>
                            {(props.children as any)?.props?.children?.[0]}
                            {props.dataItem?.[props.field!]} custom cell
                        </span>
                    )}
                </td>
                {td2Props && (
                    <td
                        key={td2Key}
                        {...restTd2Props}
                        style={{ ...restTd2Props.style, backgroundColor: props.color }}
                    />
                )}
            </>
        );
    };

    const GroupMyHeaderCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="yellow" />;
    const GroupMyDataCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="lightblue" />;

    const GroupMyFooterCustomCell = (props: GridCustomCellProps) => {
        let content: React.ReactNode = null;
        if (props.dataItem.field === 'UnitPrice') {
            const avg = props.dataItem.aggregates?.UnitPrice?.average;
            content = avg !== undefined ? `Avg: ${avg.toFixed(2)}` : null;
        } else if (props.dataItem.field === 'UnitsInStock') {
            const sum = props.dataItem.aggregates?.UnitsInStock?.sum;
            content = sum !== undefined ? `Sum: ${sum}` : null;
        }
        if (!props.tdProps) {
            return null;
        }
        const { key: tdKey, ...tdProps } = props.tdProps as TdProps;
        const td2Props = props.td2Props as TdProps | null | undefined;
        const { key: td2Key, ...restTd2Props } = td2Props || {};
        return (
            <>
                <td key={tdKey} {...tdProps} style={{ ...tdProps.style, backgroundColor: 'orange' }}>
                    {content}
                </td>
                {td2Props && (
                    <td key={td2Key} {...restTd2Props} style={{ ...restTd2Props.style, backgroundColor: 'orange' }} />
                )}
            </>
        );
    };

    return (
        <Grid
            style={{ height: '520px' }}
            data={resultState.data}
            dataItemKey="ProductID"
            navigatable={true}
            groupable={{ displayMode: 'default' }}
            onDataStateChange={handleDataStateChange}
            {...dataState}
            cells={{
                group: {
                    groupHeader: GroupMyHeaderCustomCell,
                    data: GroupMyDataCustomCell,
                    groupFooter: GroupMyFooterCustomCell
                },
                data: GroupMyDataCustomCell
            }}
        >
            <Column field="ProductID" filterable={false} title="ID" width="120px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};

export default App;
