import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { inboxIcon, calendarIcon, heartIcon, linkIcon, bellIcon, menuIcon } from '@progress/kendo-svg-icons';
const items = [
    {
        text: 'Inbox',
        svgIcon: inboxIcon,
        selected: true,
        route: '/'
    },
    {
        separator: true
    },
    {
        text: 'Notifications',
        svgIcon: bellIcon,
        route: '/notifications'
    },
    {
        text: 'Calendar',
        svgIcon: calendarIcon,
        route: '/calendar',
        style: { backgroundColor: 'red' }
    },
    {
        separator: true
    },
    {
        style: { position: 'absolute' as const, bottom: '70px', width: '100%' },
        text: 'Attachments',
        svgIcon: linkIcon,
        route: '/attachments'
    },
    {
        style: { position: 'absolute' as const, bottom: '30px', width: '100%' },
        text: 'Favourites',
        svgIcon: heartIcon,
        route: '/favourites'
    }
];
const DrawerRouterContainer = (props) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(true);
    const [selected, setSelected] = React.useState(items.findIndex((x) => x.selected === true));
    const handleClick = () => {
        setExpanded(!expanded);
    };
    const onSelect = (e) => {
        navigate(e.itemTarget.props.route);
        setSelected(e.itemIndex);
        setExpanded(!expanded);
    };
    return (
        <div>
            <div className="custom-toolbar">
                <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
                <span className="mail-box">Mail Box</span>
            </div>
            <Drawer
                className="k-drawer-full-menu"
                expanded={expanded}
                position={'start'}
                mode={'push'}
                mini={true}
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
export default DrawerRouterContainer;
