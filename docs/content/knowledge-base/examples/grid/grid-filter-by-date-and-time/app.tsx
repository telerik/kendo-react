import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridFilterChangeEvent,
    GridCustomFilterCellProps
} from '@progress/kendo-react-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

import { DateFilterCell } from './DateFilterCell';
import sampleProducts from './products';
import { HeaderTdElement } from '@progress/kendo-react-data-tools';

const DateTimeFilterCell = (props: GridCustomFilterCellProps) => (
    <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
        <DateFilterCell {...props} />
    </HeaderTdElement>
);

const App: React.FC = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({
        logic: 'and',
        filters: []
    });

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
            <Column field="FirstOrderedOn" title="FirstOrderedOn" cells={{ filterCell: DateTimeFilterCell }} />
        </Grid>
    );
};

export default App;
