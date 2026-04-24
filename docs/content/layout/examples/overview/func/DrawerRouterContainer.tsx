import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
    Drawer,
    DrawerContent,
    DrawerSelectEvent
} from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import * as svgIcons from '@progress/kendo-svg-icons';

const kendokaAvatar = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/suite/kendoka-react.png';

const items = [
    {
        text: 'Avatar',
        svgIcon: svgIcons.userIcon,
        selected: true,
        route: '/layout-overview'
    },
    {
        separator: true
    },
    {
        text: 'BottomNavigation',
        svgIcon: svgIcons.moreHorizontalIcon,
        route: '/layout-overview/bottomnavigation'
    },
    {
        separator: true
    },
    {
        text: 'Breadcrumb',
        svgIcon: svgIcons.chevronRightIcon,
        route: '/layout-overview/breadcrumb'
    },
    {
        separator: true
    },
    {
        text: 'Card',
        svgIcon: svgIcons.imageIcon,
        route: '/layout-overview/card'
    },
    {
        separator: true
    },
    {
        text: 'GridLayout',
        svgIcon: svgIcons.gridLayoutIcon,
        route: '/layout-overview/gridlayout'
    },
    {
        separator: true
    },
    {
        text: 'Menu',
        svgIcon: svgIcons.menuIcon,
        route: '/layout-overview/menu'
    },
    {
        separator: true
    },
    {
        text: 'PanelBar',
        svgIcon: svgIcons.layoutSideBySideIcon,
        route: '/layout-overview/panelbar'
    },
    {
        separator: true
    },
    {
        text: 'Splitter',
        svgIcon: svgIcons.colResizeIcon,
        route: '/layout-overview/splitter'
    },
    {
        separator: true
    },
    {
        text: 'StackLayout',
        svgIcon: svgIcons.layoutStackedIcon,
        route: '/layout-overview/stacklayout'
    },
    {
        separator: true
    },
    {
        text: 'Stepper',
        svgIcon: svgIcons.listOrderedIcon,
        route: '/layout-overview/stepper'
    },
    {
        separator: true
    },
    {
        text: 'TabStrip',
        svgIcon: svgIcons.thumbnailsUpIcon,
        route: '/layout-overview/tabstrip'
    },
    {
        separator: true
    },
    {
        text: 'TileLayout',
        svgIcon: svgIcons.layout1By4Icon,
        route: '/layout-overview/tilelayout'
    }
];

const DrawerRouterContainer = (props) => {
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
        <>
            <AppBar>
                <AppBarSection>
                    <Button svgIcon={svgIcons.layoutIcon} fillMode="flat" onClick={handleClick} />
                </AppBarSection>

                <AppBarSection>
                    <h1 className="title">AppBar expanding Drawer component</h1>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <Avatar type="image">
                        <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </AppBarSection>
            </AppBar>

            <Drawer
                expanded={expanded}
                mode="push"
                position="start"
                mini={true}
                items={items.map((item, index) => ({
                    ...item,
                    selected: index === selected
                }))}
                onSelect={onSelect}
            >
                <DrawerContent>
                    {items.map((item) => {
                        return (
                            item.selected && (
                                <div className="content" id={item.text}>
                                    {props.children}
                                </div>
                            )
                        );
                    })}
                </DrawerContent>
            </Drawer>
            <style>{`
              .header { padding: 20px; text-align: center; }
              .content { padding: 40px 20px; }
              `}</style>
        </>
    );
};

export default DrawerRouterContainer;
