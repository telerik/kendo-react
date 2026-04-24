import * as React from 'react';

import { ChipList, ChipListChangeEvent } from '@progress/kendo-react-buttons';
interface Fruit {
    text: string;
    value: string;
    disabled: boolean;
}

const fruitsData: Fruit[] = [
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
    const [value, setValue] = React.useState<string[]>(['berry']);
    const handleValueChange = (event: ChipListChangeEvent) => {
        setValue(event.value);
    };
    return <ChipList data={fruitsData} selection="multiple" onChange={handleValueChange} value={value} />;
};

export default App;
