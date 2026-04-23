import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

interface Fruits {
    text: string;
    value: string;
}

const fruits: Fruits[] = [
    {
        text: 'Berry',
        value: 'berry'
    },
    {
        text: 'Apple',
        value: 'apple'
    },
    {
        text: 'Strawberry',
        value: 'strawberry'
    },
    {
        text: 'Banana',
        value: 'banana'
    },
    {
        text: 'Kiwi',
        value: 'kiwi'
    }
];

const App = () => {
    return (
        <div>
            <p>Remove the unwanted fruits</p>
            <ChipList
                selection="single"
                defaultData={fruits}
                chip={(props: ChipProps) => <Chip removable={true} {...props} />}
            />
        </div>
    );
};

export default App;
