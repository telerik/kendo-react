import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const itemRender = (props: any) => `My ${props.item.text}`;

const App = () => {
    return (
        <Menu>
            <MenuItem text="Item1" render={itemRender} />
            <MenuItem text="Item2">
                <MenuItem text="Item2.1" />
                <MenuItem text="Item2.2" />
            </MenuItem>
        </Menu>
    );
};
export default App;
