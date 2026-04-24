import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridFilterChangeEvent,
    GridCustomFilterCellProps
} from '@progress/kendo-react-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

import { RangeFilterCell } from './rangeFilterCell';
import { DropdownFilterCell } from './dropdownFilterCell';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';
import { HeaderTdElement } from '@progress/kendo-react-data-tools';

const categories: string[] = Array.from(
    new Set(sampleProducts.map((p: Product) => (p.Category ? p.Category.CategoryName : '')))
);

const CategoryFilterCell: any = (props: GridCustomFilterCellProps) => (
    <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
        <DropdownFilterCell {...props} data={categories} defaultItem={'Select category'} />
    </HeaderTdElement>
);

const UnitPriceFilterCell: any = (props: GridCustomFilterCellProps) => (
    <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
        <RangeFilterCell {...props} />
    </HeaderTdElement>
);

const App = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({ logic: 'and', filters: [] });

    const filterChange = (event: GridFilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <Grid
            style={{ height: '400px' }}
            dataItemKey="ProductID"
            data={sampleProducts}
            autoProcessData={true}
            filterable={true}
            filter={filter}
            onFilterChange={filterChange}
        >
            <Column field="ProductID" title="ID" filterable={false} width="40px" />
            <Column field="ProductName" title="Product Name" width={250} />
            <Column
                field="Category.CategoryName"
                title="Category Name"
                width={230}
                cells={{ filterCell: CategoryFilterCell }}
            />
            <Column field="UnitPrice" title="Unit Price" format="{0:c}" cells={{ filterCell: UnitPriceFilterCell }} />
        </Grid>
    );
};

export default App;
