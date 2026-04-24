import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { menuIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        text: 'Home',
        selected: true,
        route: '/drawer-kb-router-v6'
    },
    {
        text: 'Products',
        route: '/drawer-kb-router-v6/products'
    },
    {
        text: 'About',
        route: '/drawer-kb-router-v6/about'
    }
];

const DrawerContainer = (props) => {
    const [selected, setSelected] = React.useState(items[0].text);
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(true);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const onSelect = (e) => {
        navigate(e.itemTarget.props.route);
        setSelected(e.itemTarget.props.text);
    };

    return (
        <div>
            <div className="custom-toolbar">
                <Button svgIcon={menuIcon} look="flat" onClick={handleClick} />
                <span className="title">Navigational drawer</span>
            </div>
            <Drawer
                expanded={expanded}
                position={'start'}
                mode={'push'}
                width={120}
                items={items.map((item) => ({
                    ...item,
                    selected: item.text === selected
                }))}
                onSelect={onSelect}
            >
                <DrawerContent>{props.children}</DrawerContent>
            </Drawer>
        </div>
    );
};

export default DrawerContainer;
