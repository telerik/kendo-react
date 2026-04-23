import * as React from 'react';

import { ChipList } from '@progress/kendo-react-buttons';
interface Fruit {
    text: string;
    value: string;
    disabled: boolean;
}

const fruits: Fruit[] = [
    {
        text: 'Berry',
        value: 'berry',
        disabled: true
    },
    {
        text: 'Apple',
        value: 'apple',
        disabled: true
    },
    {
        text: 'Strawberry',
        value: 'strawberry',
        disabled: true
    },
    {
        text: 'Banana',
        value: 'banana',
        disabled: true
    },
    {
        text: 'Kiwi',
        value: 'kiwi',
        disabled: true
    }
];

const App = () => {
    return <ChipList defaultData={fruits} selection="single" />;
};

export default App;
