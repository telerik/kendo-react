import * as React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import { groupBy, filterBy } from '@progress/kendo-data-query';
import employees from './data';

const textField = 'name';

const App = () => {
    const [state, setState] = React.useState({
        groupedData: groupBy(employees, [
            {
                field: 'position'
            }
        ]).reduce((res, group) => [...res, ...group.items], [])
    });
    const [value, setValue] = React.useState();
    const [filter, setFilter] = React.useState('');
    const [adaptiveFilter, setAdaptiveFilter] = React.useState('');
    const filterData = (f) =>
        groupBy(filterBy(employees, f), [
            {
                field: 'position'
            }
        ]).reduce((res, group) => [...res, ...group.items], []);
    const filterChange = (event) => {
        if (event.target.mobileMode) {
            setAdaptiveFilter(event.filter.value);
        } else {
            setFilter(event.filter.value);
        }
        setState({
            ...state,
            groupedData: filterData(event.filter)
        });
    };
    const handleChange = (event) => {
        setValue(event.value);
        if (event.value && event.value[textField]) {
            setFilter(event.value[textField]);
        }
        setAdaptiveFilter(filter);
    };
    const handleClose = () => {
        setAdaptiveFilter('');
    };
    return (
        <div>
            <ComboBox
                data={state.groupedData}
                dataItemKey="id"
                value={value}
                label="Select an employee"
                placeholder="Please select..."
                filterable={true}
                filter={filter}
                textField={textField}
                groupField="position"
                adaptive={true}
                adaptiveFilter={adaptiveFilter}
                style={{ width: '300px' }}
                onFilterChange={filterChange}
                onChange={handleChange}
                onClose={handleClose}
            />
        </div>
    );
};
export default App;
