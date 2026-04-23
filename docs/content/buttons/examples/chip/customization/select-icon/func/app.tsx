import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import { SVGIcon, checkOutlineIcon, plusCircleIcon, fileAddIcon } from '@progress/kendo-svg-icons';

interface Fruits {
    text: string;
    value: string;
    selectedIconSvg: SVGIcon;
}

const fruits: Fruits[] = [
    {
        text: 'Berry',
        value: 'berry',
        selectedIconSvg: checkOutlineIcon
    },
    {
        text: 'Apple',
        value: 'apple',
        selectedIconSvg: plusCircleIcon
    },
    {
        text: 'Strawberry',
        value: 'strawberry',
        selectedIconSvg: fileAddIcon
    }
];

const App = () => {
    return (
        <ChipList
            data={fruits}
            selection={'multiple'}
            chip={(props: ChipProps) => <Chip selectedSvgIcon={props.dataItem.selectedIconSvg} {...props} />}
        />
    );
};

export default App;
