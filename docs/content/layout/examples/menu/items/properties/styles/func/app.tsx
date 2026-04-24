import * as React from 'react';

import { Menu, MenuItem } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    return (
      <Menu>
        <MenuItem text="Item1" cssClass="active" />
        <MenuItem text="Item2" cssStyle={{ backgroundColor: '#d3d3d3' }} />
      </Menu>
    );
}
export default App;
