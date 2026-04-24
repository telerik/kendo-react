import * as React from 'react';

import { ChipList, Chip, ChipListDataChangeEvent, ChipProps } from '@progress/kendo-react-buttons';
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
    const [fruits, setFruits] = React.useState(fruitsData);

    const handleDataChange = (event: ChipListDataChangeEvent) => {
        setFruits(event.value);
    };

    return (
        <ChipList
            data={fruits}
            selection="multiple"
            onDataChange={handleDataChange}
            chip={(props: ChipProps) => <Chip removable={true} {...props} />}
        />
    );
};

export default App;
