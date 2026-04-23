import * as React from 'react';
import {
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    BooleanFilter,
    FilterChangeEvent
} from '@progress/kendo-react-data-tools';

import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './gd-products';
import { Button } from '@progress/kendo-react-buttons';
import { filterIcon } from '@progress/kendo-svg-icons';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [
        { field: 'UnitPrice', operator: 'gt', value: 20 },
        { field: 'Discontinued', operator: 'eq', value: false },
        {
            logic: 'or',
            filters: [
                { field: 'ProductName', operator: 'contains', value: 'organic' },
                { field: 'ProductName', operator: 'contains', value: 'cranberry' }
            ]
        }
    ]
};

const App = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>();
    const [newFilter, setNewFilter] = React.useState<CompositeFilterDescriptor>(initialFilter);
    const [visible, setVisible] = React.useState<boolean>(false);

    const onFilterChange = (event: FilterChangeEvent) => {
        setNewFilter(event.filter);
    };

    const showFilterPopup = () => {
        setVisible(true);
    };
    const closeFilterPopup = () => {
        setVisible(false);
        setFilter(newFilter);
    };
    return (
        <React.Fragment>
            <div className="example-config">
                <p className="k-form-hint">
                    Click the button below to filter the Grid from an external Filter component
                </p>
                <Button svgIcon={filterIcon} onClick={showFilterPopup}>
                    Filter the Grid
                </Button>
            </div>

            {visible && (
                <Dialog title="Filter the Grid" onClose={() => setVisible(false)}>
                    <Filter
                        value={initialFilter}
                        onChange={onFilterChange}
                        fields={[
                            { name: 'ProductName', label: 'Name', filter: TextFilter, operators: Operators.text },
                            { name: 'UnitPrice', label: 'Price', filter: NumericFilter, operators: Operators.numeric },
                            {
                                name: 'Discontinued',
                                label: 'Discontinued',
                                filter: BooleanFilter,
                                operators: Operators.boolean
                            }
                        ]}
                    />
                    <DialogActionsBar>
                        <Button onClick={closeFilterPopup}>Filter</Button>
                    </DialogActionsBar>
                </Dialog>
            )}
            <Grid
                style={{ maxHeight: '400px' }}
                dataItemKey="ProductID"
                data={products}
                autoProcessData={true}
                filter={filter}
            >
                <GridColumn field="ProductName" title="Name" width="300px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </React.Fragment>
    );
};

export default App;
