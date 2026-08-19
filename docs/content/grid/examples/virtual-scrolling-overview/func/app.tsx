import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

interface PersonData {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    title: string;
}

const createRandomData = (count: number): PersonData[] => {
    const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'];
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
    const cities = [
        'Seattle',
        'Tacoma',
        'Kirkland',
        'Redmond',
        'London',
        'Philadelphia',
        'New York',
        'Seattle',
        'London',
        'Boston'
    ];
    const titles = [
        'Accountant',
        'Vice President, Sales',
        'Sales Representative',
        'Technical Support',
        'Sales Manager',
        'Web Designer',
        'Software Developer'
    ];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        }));
};

const App = () => {
    const [data] = React.useState<PersonData[]>(() => createRandomData(10000));

    return (
        <Grid
            style={{ height: '520px' }}
            autoProcessData={true}
            filterable={true}
            sortable={true}
            scrollable={'virtual'}
            data={data}
        >
            <Column field="id" title="ID" filterable={false} width="100px" />
            <Column field="firstName" title="First Name" />
            <Column field="lastName" title="Last Name" />
            <Column field="city" title="City" width="160px" />
            <Column field="title" title="Title" width="220px" />
        </Grid>
    );
};

export default App;
