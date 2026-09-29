import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import {
    useLocalization
} from "@progress/kendo-react-intl";
import { Header } from './Header.jsx';
import { gridIcon, calendarIcon, userIcon, infoCircleIcon, bellIcon, questionCircleIcon, packageIcon } from '@progress/kendo-svg-icons'

const items = [
    { name: 'dashboard', svgIcon: gridIcon, route: '/', selected: true },
    { name: 'inventory', svgIcon: packageIcon, route: '/inventory', selected: false },
    { name: 'planning', svgIcon: calendarIcon, route: '/planning', selected: false },
    { name: 'notifications', svgIcon: bellIcon, route: '/notifications', selected: false },
    { name: 'profile', svgIcon: userIcon, route: '/profile', selected: false },
    { separator: true },
    { name: 'help', svgIcon: questionCircleIcon, route: '/help', selected: false },
    { name: 'info', svgIcon: infoCircleIcon, route: '/info', selected: false }
];

const DrawerRouterContainer = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const localization = useLocalization();

    const [expanded, setExpanded] = React.useState(false);
    const [isSmallerScreen, setIsSmallerScreen] = React.useState(window.innerWidth < 768);

    const resizeWindow = () => {
        setIsSmallerScreen(window.innerWidth < 768);
    }

    const handleClick = (e) => {
        setExpanded(!expanded);
    }

    const handleSelect = (e) => {
        setExpanded(false);
        navigate(e.itemTarget.props.route);
    }

    React.useEffect(() => {
        window.addEventListener('resize', resizeWindow, false);
        resizeWindow();
        return () => window.removeEventListener('resize', resizeWindow, false);
    }, [])

    return (
        <React.Fragment>
            <Header
                onButtonClick={handleClick}
            />
            <Drawer
                expanded={expanded}
                animation={{ duration: 100 }}
                items={items.map((item) => ({
                    ...item,
                    text: localization.toLanguageString(`custom.${item.name}`),
                    selected: item.route === location.pathname
                }))
                }
                position='start'
                mode={isSmallerScreen ? 'overlay' : 'push'}
                mini={isSmallerScreen ? false : true}

                onOverlayClick={handleClick}
                onSelect={handleSelect}
            >
                <DrawerContent>
                    {props.children}
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    )
}

export default DrawerRouterContainer;
