import * as React from 'react';
import { Menu, MenuItem, MenuItemLink, MenuItemArrow } from '@progress/kendo-react-layout';

const linkRender = (props: any) => {
    return (
      <MenuItemLink url={props.item.url} opened={props.opened}>
        {[
                renderMenuIconIfApplicable(props),
                props.item.text,
                renderArrowIfApplicable(props)
            ]}
      </MenuItemLink>
    );
};
function renderMenuIconIfApplicable(props: any) {
    return props.item.icon ? <span className={`k-icon k-i-${props.item.icon}`} role="presentation" key="0" /> : null;
}
function renderArrowIfApplicable(props: any) {
    return props.item.items && props.item.items.length > 0 ?
      <MenuItemArrow itemId={props.itemId} verticalMenu={false} dir={props.dir} key="1" /> : null;
}

const App = () => {
    return (
      <Menu linkRender={linkRender}>
        <MenuItem text="Item1" />
        <MenuItem text="Item2" icon="heart">
          <MenuItem text="Item2.1" />
          <MenuItem text="Item2.2" />
        </MenuItem>
      </Menu>
    );
}
export default App;
