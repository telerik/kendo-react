import * as React from 'react';

import { Menu, MenuItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <Menu>
        <MenuItem text="Item1">
          <MenuItem text="Item1.1" url="https://www.example.com/?item=1.1" />
        </MenuItem>
        <MenuItem text="Item2" url="https://www.example.com/?item=2" />
      </Menu>
    );
}
export default App;
