import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
const App = () => {
    const movies = [
        { id: 1, name: 'Inception' },
        { id: 2, name: 'The Dark Knight' },
        { id: 3, name: 'The Godfather', disabled: true },
        { id: 4, name: 'The Shawshank Redemption' },
        { id: 5, name: 'Titanic' },
        { id: 6, name: 'The Matrix' },
        { id: 7, name: 'Avatar' },
        { id: 8, name: 'Jurassic Park', disabled: true },
        { id: 9, name: 'The Lord of the Rings: The Fellowship of the Ring' },
        { id: 10, name: 'Pulp Fiction' }
    ];

    const [value, setValue] = React.useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Label>
                Select movie <br />
                <AutoComplete
                    style={{
                        width: '300px'
                    }}
                    data={movies}
                    placeholder="e.g. Titanic"
                    dataItemKey="id"
                    textField="name"
                    value={value}
                    onChange={handleOnChange}
                    skipDisabledItems={false}
                />
            </Label>
        </div>
    );
};

export default App;
