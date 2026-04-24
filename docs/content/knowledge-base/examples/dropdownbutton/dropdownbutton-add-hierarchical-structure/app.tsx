import * as React from 'react';
import { DropDownButton } from '@progress/kendo-react-buttons';
import { exportIcon } from '@progress/kendo-svg-icons';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

interface Item {
    text: string;
    icon?: string;
}

const itemRender = (props: { item: Item }) => {
    return (
        <div>
            <Menu vertical={true}>
                <MenuItem text={props.item.text}>
                    <MenuItem text="Item2.1">
                        <MenuItem text="Item2.1.1" />
                    </MenuItem>
                    <MenuItem text="Item2.2" />
                </MenuItem>
            </Menu>
        </div>
    );
};

const items: Item[] = [
    { text: 'To PDF', icon: 'pdf' },
    { text: 'To Excel', icon: 'excel' },
    { text: 'To Word', icon: 'word' }
];

const App = () => {
    return (
        <div>
            <DropDownButton itemRender={itemRender} items={items} svgIcon={exportIcon} text="Export" />
        </div>
    );
};

export default App;
