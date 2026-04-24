import * as React from 'react';
import { Grid, GridColumn as Column, GridSortChangeEvent } from '@progress/kendo-react-grid';
import { Label } from '@progress/kendo-react-labels';

import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

import products from './gd-products';
import { Product } from './gd-interfaces';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(products);
    const [allowUnsort, setAllowUnsort] = React.useState<boolean>(true);
    const [multiple, setMultiple] = React.useState<boolean>(false);

    return (
        <div>
            <div className="example-config">
                <Checkbox
                    id="unsort"
                    checked={allowUnsort}
                    onChange={(event) => {
                        setAllowUnsort(event.value);
                    }}
                    label="Enable unsorting"
                ></Checkbox>
                <br />
                <Checkbox
                    id="multiSort"
                    checked={multiple}
                    onChange={(event) => {
                        setMultiple(event.value);
                    }}
                    label="Enable multiple columns sorting"
                ></Checkbox>
            </div>
            <Grid
                style={{ height: '300px' }}
                dataItemKey="ProductID"
                data={data}
                autoProcessData={true}
                sortable={{
                    allowUnsort: allowUnsort,
                    mode: multiple ? 'multiple' : 'single'
                }}
                defaultSort={[{ field: 'ProductName', dir: 'desc' }]}
            >
                <Column field="ProductID" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};

export default App;
