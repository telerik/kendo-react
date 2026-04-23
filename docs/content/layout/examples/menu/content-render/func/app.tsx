import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const contentRender = (props: any) => {
    return (
      <div style={{ padding: '10px' }}>Custom content for itemId: {props.itemId}, text: {props.item.text}</div>
    );
};

const App = () => {
    return (
      <Menu>
        <MenuItem text="Item1" contentRender={contentRender} />
        <MenuItem text="Item2" icon="heart">
          <MenuItem text="Item2.1" />
          <MenuItem text="Item2.2" />
        </MenuItem>
      </Menu>
    );
}
export default App;
