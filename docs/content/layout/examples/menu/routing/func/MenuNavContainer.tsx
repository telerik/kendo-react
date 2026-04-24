import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';

const MenuNavContainer = (props: any) => {
    const navigate = useNavigate();

    const onSelect = (event: MenuSelectEvent) => {
        navigate(event.item.data.route);
    };

    return (
        <div>
            <Menu onSelect={onSelect}>
                <MenuItem text="Home" data={{ route: '/menu-routing' }} />
                <MenuItem text="Products" data={{ route: '/menu-routing/products' }} />
                <MenuItem text="About" data={{ route: '/menu-routing/about' }}>
                    <MenuItem text="Team" data={{ route: '/menu-routing/about/team' }} />
                </MenuItem>
            </Menu>
            <div style={{ padding: 10 }}>{props.children}</div>
        </div>
    );
};

export default MenuNavContainer;
