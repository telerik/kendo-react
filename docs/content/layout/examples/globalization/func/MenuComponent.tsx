import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const MenuComponent = (props: any) => {
    const { dir } = props;
    return (
      <Menu dir={dir} style={{ width: 500, margin: 'auto' }}>
        <MenuItem text="Invasion Games">
          <MenuItem text="Hockey" />
          <MenuItem text="Soccer" />
          <MenuItem text="Rugby" />
        </MenuItem>
        <MenuItem text="Net & Court Games">
          <MenuItem text="Badminton" />
          <MenuItem text="Squash" />
          <MenuItem text="Tennis" />
          <MenuItem text="Table Tennis" />
          <MenuItem text="Volleyball" />
        </MenuItem>
        <MenuItem text="Target Games">
          <MenuItem text="Golf" />
          <MenuItem text="Lawn bowls" />
          <MenuItem text="Tenpin bowling" />
        </MenuItem>
      </Menu>
    )
};

export default MenuComponent;
