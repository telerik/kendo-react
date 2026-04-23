import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import employees from './data';

const App = () => {
    const [state, setState] = React.useState({
        groupedData: groupBy(employees, [{ field: 'position' }]).reduce((res, group) => [...res, ...group.items], [])
    });

    return (
        <div>
            <DropDownList
                data={state.groupedData}
                groupField="position"
                textField="name"
                label="Select an employee"
                adaptive={true}
                style={{
                    width: '300px'
                }}
            />
        </div>
    );
};

export default App;
