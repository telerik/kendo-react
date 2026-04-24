import * as React from 'react';

import { Menu, MenuItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <Menu>
        <MenuItem text="First item">
          <MenuItem text="Child item" />
        </MenuItem>
        <MenuItem text="Second item" />
      </Menu>
    );
}
export default App;
