import * as React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { filterBy } from '@progress/kendo-data-query';
import states from './states';

const App = () => {
    const [data, setData] = React.useState(states.slice());
    const filterChange = (event) => {
        setData(filterBy(states.slice(), event.filter));
    };
    return (
        <div>
            <Label editorId="state">Select state</Label>
            <br />
            <MultiSelect
                id="state"
                data={data}
                filterable={true}
                onFilterChange={filterChange}
                style={{
                    width: '300px'
                }}
                placeholder="e.g. California"
            />
        </div>
    );
};
export default App;
