import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import { SVGIcon, commentRemoveIcon, cancelIcon, cancelOutlineIcon } from '@progress/kendo-svg-icons';

interface Fruits {
    text: string;
    value: string;
    removable: boolean;
    removeSvgIcon: SVGIcon;
}

const fruits: Fruits[] = [
    {
        text: 'Berry',
        value: 'berry',
        removable: true,
        removeSvgIcon: cancelIcon
    },
    {
        text: 'Apple',
        value: 'apple',
        removable: true,
        removeSvgIcon: commentRemoveIcon
    },
    {
        text: 'Strawberry',
        value: 'strawberry',
        removable: true,
        removeSvgIcon: cancelOutlineIcon
    }
];

const App = () => {
    return (
        <ChipList
            selection="single"
            defaultData={fruits}
            chip={(props: ChipProps) => (
                <Chip {...props} removable={props.dataItem.removable} removeSvgIcon={props.dataItem.removeSvgIcon} />
            )}
        />
    );
};

export default App;
