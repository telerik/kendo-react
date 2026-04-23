import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { filterBy } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { CustomFilterUI } from './customFilterUI';
import { GridColumnMenuFilter } from '@progress/kendo-react-grid';
import type { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import products from './products';

const App: React.FC = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({
        logic: 'and',
        filters: []
    });
    const data = filterBy(products, filter);

    return (
        <div>
            <Grid
                data={data}
                filter={filter}
                onFilterChange={(e: GridFilterChangeEvent) => {
                    setFilter(e.filter);
                }}
            >
                <Column field={'ProductName'} title={'Product Name'} />
                <Column
                    field={'FirstOrderedOn'}
                    title={'FirstOrderedOn'}
                    filter={'date'}
                    format="{0:MM/dd/yyyy hh:mm:ss}"
                    columnMenu={(props) => <GridColumnMenuFilter {...props} alwaysExpand filterUI={CustomFilterUI} />}
                />
            </Grid>
            <br />
        </div>
    );
};

export default App;
