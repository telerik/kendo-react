import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerItem, DrawerItemProps, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import {
    pencilIcon,
    heartIcon,
    minusIcon,
    globeOutlineIcon,
    menuIcon,
    chevronDownIcon,
    chevronRightIcon
} from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';
const CustomItem = (props: DrawerItemProps) => {
    const { visible, dataExpanded, ...others } = props;
    const arrowDir = dataExpanded ? chevronDownIcon : chevronRightIcon;
    return visible === false ? null : (
        <DrawerItem {...others}>
            <SvgIcon icon={props.svgIcon} />
            <span className={'k-item-text'}>{props.text}</span>
            {dataExpanded !== undefined && (
                <SvgIcon
                    icon={arrowDir}
                    style={{
                        marginLeft: 'auto'
                    }}
                />
            )}
        </DrawerItem>
    );
};
const DrawerContainer = (props) => {
    const navigate = useNavigate();
    const [drawerExpanded, setDrawerExpanded] = React.useState(true);
    const [items, setItems] = React.useState<any[]>([
        {
            text: 'Education',
            svgIcon: pencilIcon,
            id: 1,
            selected: true,
            route: '/drawer-hierarchical'
        },
        {
            separator: true
        },
        {
            text: 'Food',
            svgIcon: heartIcon,
            id: 2,
            dataExpanded: true,
            route: '/drawer-hierarchical/food'
        },
        {
            text: 'Japanese Food',
            svgIcon: minusIcon,
            id: 4,
            parentId: 2,
            route: '/drawer-hierarchical/food/japanese',
            level: 1
        },
        {
            text: 'Italian Food',
            svgIcon: minusIcon,
            id: 5,
            parentId: 2,
            route: '/drawer-hierarchical/food/italian',
            level: 1
        },
        {
            separator: true
        },
        {
            text: 'Travel',
            svgIcon: globeOutlineIcon,
            dataExpanded: true,
            id: 3,
            route: '/drawer-hierarchical/travel'
        },
        {
            text: 'Europe',
            svgIcon: minusIcon,
            id: 6,
            parentId: 3,
            route: '/drawer-hierarchical/travel/europe',
            level: 1
        },
        {
            text: 'North America',
            svgIcon: minusIcon,
            id: 7,
            parentId: 3,
            route: '/drawer-hierarchical/travel/america',
            level: 1
        }
    ]);
    const handleClick = () => {
        setDrawerExpanded(!drawerExpanded);
    };
    const onSelect = (ev: DrawerSelectEvent) => {
        const currentItem = ev.itemTarget.props;
        const isParent = currentItem.dataExpanded !== undefined;
        const nextExpanded = !currentItem.dataExpanded;
        const newData = items.map((item) => {
            const { selected, dataExpanded: currentExpanded, id, ...others } = item;
            const isCurrentItem = currentItem.id === id;
            return {
                selected: isCurrentItem,
                dataExpanded: isCurrentItem && isParent ? nextExpanded : currentExpanded,
                id,
                ...others
            };
        });
        navigate(ev.itemTarget.props.route);
        setItems(newData);
    };
    const data = items.map((item) => {
        const { parentId, ...others } = item;
        if (parentId !== undefined) {
            const parentEl = items.find((parent) => parent.id === parentId);
            return {
                ...others,
                visible: parentEl && parentEl.dataExpanded
            };
        }
        return item;
    });
    return (
        <div>
            <div className="custom-toolbar">
                <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
                <span className="title">Categories</span>
            </div>
            <Drawer
                expanded={drawerExpanded}
                mode="push"
                width={180}
                items={data}
                item={CustomItem}
                onSelect={onSelect}
            >
                <DrawerContent>{props.children}</DrawerContent>
            </Drawer>
        </div>
    );
};

export default DrawerContainer;
