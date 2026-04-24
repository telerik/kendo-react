import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { inboxIcon, calendarIcon, heartIcon, linkIcon, bellIcon, menuIcon } from '@progress/kendo-svg-icons';

const items = [
    { text: 'Inbox', svgIcon: inboxIcon, selected: true, route: '/drawer-getting-started' },
    { separator: true },
    { text: 'Notifications', svgIcon: bellIcon, route: '/drawer-getting-started/notifications' },
    { text: 'Calendar', svgIcon: calendarIcon, route: '/drawer-getting-started/calendar' },
    { separator: true },
    { text: 'Attachments', svgIcon: linkIcon, route: '/drawer-getting-started/attachments' },
    { text: 'Favourites', svgIcon: heartIcon, route: '/drawer-getting-started/favourites' }
];

const DrawerRouterContainer = (props) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(true);
    const [selected, setSelected] = React.useState(items.findIndex((x) => x.selected === true));

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const onSelect = (e: DrawerSelectEvent) => {
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
