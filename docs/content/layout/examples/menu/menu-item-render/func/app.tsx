import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const itemRender = (props: any) => `My ${props.item.text}`;

const App = () => {
    return (
        <Menu itemRender={itemRender}>
            <MenuItem text="Item1" />
            <MenuItem text="Item2" icon="heart">
                <MenuItem text="Item2.1" />
                <MenuItem text="Item2.2" />
            </MenuItem>
        </Menu>
    );
};
export default App;
