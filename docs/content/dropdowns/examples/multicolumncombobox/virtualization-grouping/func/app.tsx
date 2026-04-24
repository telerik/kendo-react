import * as React from 'react';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';

function createRandomData(count) {
    const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Anne', 'Nige'];
    const lastNames = [
        'Davolio',
        'Fuller',
        'Leverling',
        'Peacock',
        'Buchanan',
        'Suyama',
        'King',
        'Callahan',
        'Dodsworth',
        'White'
    ];
    const titles = [
        'Accountant',
        'Vice President, Sales',
        'Sales Representative',
        'Technical Support',
        'Sales Manager',
        'Web Designer',
        'Software Developer',
        'QA',
        'Project Manager'
    ];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            id: idx,
            name:
                firstNames[Math.floor(Math.random() * firstNames.length)] +
                ' ' +
                lastNames[Math.floor(Math.random() * lastNames.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        }));
}

const take = 14;
const employees = createRandomData(200);

const App = () => {
    const columns = [
        { field: 'id', header: 'ID', width: '90px' },
        { field: 'name', header: 'Name', width: '150px' },
        { field: 'position', header: 'Position', width: '480px' }
    ];

    const [skip, setSkip] = React.useState(0);

    const [state, setState] = React.useState({
        total: employees.length,
        subsetData: groupBy(employees, [{ field: 'title' }]).reduce((res, group) => [...res, ...group.items], [])
    });
    const pageChange = (event) => {
        const skipValue = event.page.skip;
        const takeValue = event.page.take;
        const result = groupBy(employees, [{ field: 'title' }])
            .reduce((res, group) => [...res, ...group.items], [])
            .slice(skipValue, skipValue + takeValue);

        setState({
            ...state,
            subsetData: result
        });
        setSkip(skipValue);
    };
    return (
        <div>
            <MultiColumnComboBox
                data={state.subsetData as any}
                columns={columns}
                textField="name"
                groupField="title"
                placeholder="Please select ..."
                style={{
                    width: '300px'
                }}
                virtual={{
                    total: state.total,
                    pageSize: take,
                    skip: skip
                }}
                onPageChange={pageChange}
            />
        </div>
    );
};

export default App;
