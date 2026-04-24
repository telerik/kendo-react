import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { menuIcon } from '@progress/kendo-svg-icons';

const items = [
    { text: 'Home', selected: true, route: '/drawer-router' },
    { text: 'Products', route: '/drawer-router/products' },
    { text: 'About', route: '/drawer-router/about' }
];
const DrawerContainer = (props) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState<boolean>(true);
    const [selected, setSelected] = React.useState(items.findIndex((x) => x.selected === true));

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const onSelect = (e: DrawerSelectEvent) => {
        navigate(e.itemTarget.props.route);
        setSelected(e.itemIndex);
    };

    return (
        <div>
            <div className="custom-toolbar">
                <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
                <span className="title">Navigational drawer</span>
            </div>
            <Drawer
                expanded={expanded}
                position={'start'}
                mode={'push'}
                width={120}
                items={items.map((item, index) => ({
                    ...item,
                    selected: index === selected
                }))}
                onSelect={onSelect}
            >
                <DrawerContent>{props.children}</DrawerContent>
            </Drawer>
        </div>
    );
};

export default DrawerContainer;
