import * as React from 'react';
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { filterBy, groupBy } from '@progress/kendo-data-query';
import employees from './data';

const App: React.FC = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) =>
        el.position
            ? el
            : {
                  ...el,
                  position: ungrouped
              }
    );
    const [groupedData, setGroupeData] = React.useState(
        groupBy(employeesWithUngrouped, [
            {
                field: 'position'
            }
        ])
            .map((el) =>
                el.position
                    ? el
                    : {
                          ...el,
                          position: ungrouped
                      }
            )
            .reduce((res, group) => [...res, ...group.items], [])
    );

    const onFilterChange = (event) => {
        const filter = {
            field: 'name',
            ignoreCase: true,
            operator: 'contains',
            value: event.value
        };
        const data = groupBy(filterBy(employeesWithUngrouped, filter), [
            {
                field: 'position'
            }
        ])
            .map((el) =>
                el.position
                    ? el
                    : {
                          ...el,
                          position: ungrouped
                      }
            )
            .reduce((res, group) => [...res, ...group.items], []);
        setGroupeData(data);
    };

    return (
        <div>
            <AutoComplete
                data={groupedData}
                textField="name"
                groupField="position"
                label="Select a country"
                placeholder="Please select..."
                adaptive={true}
                style={{ width: '300px' }}
                onChange={onFilterChange}
            />
        </div>
    );
};

export default App;
