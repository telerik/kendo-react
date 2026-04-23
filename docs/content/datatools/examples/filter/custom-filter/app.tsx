import * as React from 'react';
import { Filter, Operators, FilterChangeEvent } from '@progress/kendo-react-data-tools';

import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-dt-products';
import { Switch } from '@progress/kendo-react-inputs';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [
        {
            field: 'Discontinued',
            value: false,
            operator: 'eq'
        }
    ]
};

const CustomFilter = (props) => {
    const [checked, setChecked] = React.useState<boolean>(props.filter.value);

    React.useEffect(() => {
        props.onFilterChange({
            nextFilter: {
                field: 'Discontinued',
                value: checked,
                operator: 'eq'
            }
        });
    }, []);

    const handleChange = (event) => {
        props.onFilterChange({
            nextFilter: {
                field: 'Discontinued',
                value: event.value,
                operator: 'eq'
            }
        });

        setChecked(event.value);
    };

    return (
        <>
            <Switch size="large" checked={checked} onChange={handleChange} />
        </>
    );
};

const App = () => {
    const [filter, setFilter] = React.useState(initialFilter);

    const onFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <React.Fragment>
            <Filter
                value={filter}
                onChange={onFilterChange}
                fields={[
                    {
                        name: 'Discontinued',
                        label: 'Discontinued',
                        filter: CustomFilter,
                        operators: Operators.boolean
                    }
                ]}
            />
            <Grid style={{ maxHeight: '400px' }} data={filterBy(products, filter)}>
                <GridColumn field="ProductName" title="Name" width="300px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </React.Fragment>
    );
};

export default App;
