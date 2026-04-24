import * as React from 'react';
import { MultiSelect, MultiSelectFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { filterBy } from '@progress/kendo-data-query';
import movies from './movies';

const App = () => {
    const [data, setData] = React.useState(movies.slice());

    const filterChange = (event: MultiSelectFilterChangeEvent) => {
        const filter = event.filter;
        const allData = movies.slice();
        const newData = filter.value.length >= 3 ? filterBy(allData, filter) : allData;

        setData(newData);
    };

    return (
        <div>
            <Label editorId="movie">Select movie</Label>
            <br />
            <MultiSelect
                id="movie"
                data={data}
                filterable={true}
                onFilterChange={filterChange}
                style={{ width: '300px' }}
                placeholder="Enter at least 3 characters"
            />
        </div>
    );
};

export default App;
