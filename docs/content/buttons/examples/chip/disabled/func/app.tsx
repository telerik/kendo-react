import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

interface Fruits {
    text: string;
    value: string;
    disabled?: boolean;
}

const fruits: Fruits[] = [
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
        value: 'strawberry'
    },
    {
        text: 'Banana',
        value: 'banana'
    },
    {
        text: 'Kiwi',
        value: 'kiwi',
        disabled: true
    }
];

const App = () => {
    return (
        <ChipList
            defaultData={fruits}
            chip={(props: ChipProps) => <Chip {...props} disabled={props.dataItem.disabled} />}
        />
    );
};

export default App;
