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

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'UnitPrice', operator: 'gt', value: 20 }]
};

const App = () => {
    const [filter, setFilter] = React.useState(initialFilter);

    const onFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <Filter
            value={filter}
            onChange={onFilterChange}
            fields={[
                { name: 'ProductName', label: 'Name', filter: TextFilter, operators: Operators.text },
                { name: 'UnitPrice', label: 'Price', filter: NumericFilter, operators: Operators.numeric },
                { name: 'Discontinued', label: 'Discontinued', filter: BooleanFilter, operators: Operators.boolean }
            ]}
        />
    );
};

export default App;
