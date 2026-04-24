import React, { useState, useEffect } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const App = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(setUsers);
    }, []);

    return (
        <Grid style={{ height: '400px' }} data={users}>
            <Column field="id" title="ID" width="40px" />
            <Column field="name" title="Name" width="250px" />
            <Column field="email" title="Email" />
            <Column field="address.street" title="Address" />
            <Column field="address.zipcode" title="Zipcode" />
            <Column field="address.city" title="City" />
        </Grid>
    );
};

export default App;
