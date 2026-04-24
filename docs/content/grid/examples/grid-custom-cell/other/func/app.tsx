import * as React from 'react';

import {
    Grid,
    GridColumn as Column,
    GridCustomCellProps,
    GridCustomFilterCellProps,
    GridCustomFooterCellProps,
    GridCustomHeaderCellProps
} from '@progress/kendo-react-grid';
import { groupBy, GroupDescriptor, GroupResult, CompositeFilterDescriptor } from '@progress/kendo-data-query';

import { HeaderThElement, setGroupIds } from '@progress/kendo-react-data-tools';
import products from './gd-products';
import { Product } from './gd-interfaces';

interface CustomCellProps extends GridCustomCellProps {
    color?: string;
    backgroundColor?: string;
    tdProps?: React.TdHTMLAttributes<HTMLTableCellElement> | null;
    children?: React.ReactNode | React.ReactNode[];
}

const initialGroup: GroupDescriptor[] = [{ field: 'UnitsInStock' }, { field: 'ProductName' }];
const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: []
};

const MySelectedCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#18605D" />;

const MySelectedFooterCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} backgroundColor="#f97e6d" />;

const MyHeaderCustomCell = (props: GridCustomCellProps) => (
    <CustomCell {...props} color="#014830" backgroundColor={'#4a9d93'} />
);
const MyDataCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#a1483d" />;
const MyFooterCustomCell = (props: GridCustomCellProps) => (
    <CustomCell {...props} color="#f97e6d" backgroundColor={'#a1cec5'} />
);

const MyFilterCustomCell = (props: GridCustomFilterCellProps) => (
    <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
        {props.children}
    </HeaderThElement>
);

const HeaderCustomCell = (props: GridCustomHeaderCellProps) => (
    <HeaderThElement
        columnId={props.thProps?.columnId || ''}
        {...props.thProps}
        style={{
            color: '#533291'
        }}
    >
        {props.children}
    </HeaderThElement>
);

const TotalFooterCustomCell = (props: GridCustomFooterCellProps) => {
    const field = props.field || '';
    const min = products.reduce((acc, current) => Math.min(acc, current[field]), Number.MAX_VALUE);
    const max = products.reduce((acc, current) => Math.max(acc, current[field]), 0);
    return props.field === 'UnitPrice' ? (
        <td colSpan={props.colSpan} style={{ ...props.style, color: '#fac390' }}>
            min: {min}, max: {max}
        </td>
    ) : (
        <td
            {...props.tdProps}
            style={{
                color: '#f97e6d'
            }}
        >
            {props.index}
        </td>
    );
};

const processWithGroups = (data: Product[], group: GroupDescriptor[]) => {
    const newDataState: GroupResult[] = groupBy(data, group) as GroupResult[];
    setGroupIds({ data: newDataState, group: group });

    return newDataState;
};

const CustomCell = (props: CustomCellProps) => {
    return (
        <td
            {...props.tdProps}
            colSpan={1}
            style={{
                color: props.color,
                backgroundColor: props.backgroundColor
            }}
        >
            {props.children}
        </td>
    );
};

const UnitPriceCell = (props) => {
    const field = props.field || '';
    const min = products.reduce((acc, current) => Math.min(acc, current[field]), Number.MAX_VALUE);
    const max = products.reduce((acc, current) => Math.max(acc, current[field]), 0);
    return (
        <td colSpan={props.colSpan} style={props.style}>
            min: {min}, max: {max}
        </td>
    );
};

const App = () => {
    return (
        <Grid
            style={{ height: '520px' }}
            data={products}
            autoProcessData={true}
            dataItemKey="ProductID"
            groupable={{ footer: 'visible' }}
            defaultGroup={initialGroup}
            filterable={true}
            defaultFilter={initialFilter}
            cells={{
                group: {
                    groupHeader: MyHeaderCustomCell,
                    groupFooter: MyFooterCustomCell
                },
                groupHeader: MyHeaderCustomCell,
                data: MyDataCustomCell,
                groupFooter: MyFooterCustomCell,
                headerCell: HeaderCustomCell,
                filterCell: MyFilterCustomCell,
                footerCell: TotalFooterCustomCell
            }}
        >
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column
                field="UnitPrice"
                title="Unit Price"
                filter="numeric"
                cells={{
                    data: MySelectedCustomCell,
                    groupFooter: MySelectedFooterCustomCell,
                    footerCell: UnitPriceCell
                }}
            />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};

export default App;
