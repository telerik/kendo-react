import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Hint } from '@progress/kendo-react-labels';

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
            <DropDownList
                style={{
                    width: '300px'
                }}
                data={movies}
                dataItemKey="id"
                textField="name"
                label="Select movie"
                value={value}
                onChange={handleOnChange}
                skipDisabledItems={false}
                ariaDescribedBy="dropdownHint"
            />
            <Hint id="dropdownHint">(↑ and ↓ to navigate through the options)</Hint>
        </div>
    );
};

export default App;
