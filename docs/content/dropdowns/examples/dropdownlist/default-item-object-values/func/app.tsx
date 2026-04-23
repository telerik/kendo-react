import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const occupations: { id: number; title: string }[] = [
        { id: 1, title: 'Software Engineer' },
        { id: 2, title: 'Doctor' },
        { id: 3, title: 'Teacher' },
        { id: 4, title: 'Pilot' },
        { id: 5, title: 'Artist' },
        { id: 6, title: 'Chef' },
        { id: 7, title: 'Architect' },
        { id: 8, title: 'Scientist' },
        { id: 9, title: 'Police Officer' },
        { id: 10, title: 'Firefighter' }
    ];

    const defaultItem = { title: 'Select occupation...' };

    return (
        <div>
            <DropDownList
                id="occupation"
                style={{ width: '300px' }}
                data={occupations}
                textField="title"
                defaultItem={defaultItem}
            />
        </div>
    );
};

export default App;
