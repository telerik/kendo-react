import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { InputPrefix, InputSeparator, TextBox } from '@progress/kendo-react-inputs';
import { AppBar, AppBarSection, Avatar } from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Popover } from '@progress/kendo-react-tooltip';
import { SvgIcon } from '@progress/kendo-react-common';
import logo from '../assets/logo-1.svg';
import compactLogo from '../assets/compact-logo.svg';
import { bellIcon, logoutIcon, searchIcon, slidersIcon } from '@progress/kendo-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function AppBarComponent() {
    const navigate = useNavigate();
    const anchor = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState(false);

    const onNavigate = () => {
        navigate('/settings');
        setShow(false);
    };
    return (
        <AppBar positionMode="sticky" className="tracker-appbar">
            <AppBarSection className="tracker-appbar__brand">
                <div role="banner" className="tracker-appbar__brand">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                        <img src={logo} alt="Logo" className="tracker-appbar__logo" />
                        <img src={compactLogo} alt="Logo" className="tracker-appbar__logo tracker-appbar__logo--compact" />
                    </a>
                </div>
                </AppBarSection>

            <AppBarSection className="tracker-appbar__search">
                <div role="search">
                    <TextBox prefix={() => (
                            <>
                                <InputPrefix>
                                    <SvgIcon icon={searchIcon} />
                                </InputPrefix>
                                <InputSeparator />
                            </>
                        )}
                            placeholder="Search"
                            fillMode="solid"
                            className="tracker-appbar__search"
                    />
                </div>
            </AppBarSection>

            <AppBarSection className="tracker-appbar__search--compact">
                <div role="search">
                    <Button fillMode="flat" svgIcon={searchIcon} title="Search button" />
                </div>
            </AppBarSection>

            <AppBarSection className="tracker-appbar__profile">
                <div onClick={() => setShow(!show)} ref={anchor} role="contentinfo" className="tracker-appbar__profile-anchor">
                    <Avatar rounded="full" type="text" themeColor="primary">JP</Avatar>
                </div>
                <Popover
                    show={show}
                    anchor={anchor.current}
                    position={'bottom'}
                    className="tracker-appbar__profile-popover"
                >
                   <div className="k-list k-list-md">
                    <div className="k-list-content">
                            <ul className="k-list-ul">
                            <li className="k-list-item" onClick={onNavigate}>
                                <SvgIcon icon={slidersIcon}/>
                                <span className="k-list-item-text">Settings</span>
                            </li>
                            <li className="k-list-item">
                                <SvgIcon icon={logoutIcon}/>
                                <span className="k-list-item-text">Log out</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                </Popover>
                <span className="k-appbar-separator"></span>
                <BadgeContainer>
                    <Button svgIcon={bellIcon} fillMode="flat" title="Notifications" onClick={() => navigate('/notifications')} />
                    <Badge rounded="full" position="inside" align={{ vertical: 'top', horizontal: 'end' }} themeColor="primary">3</Badge>
                </BadgeContainer>
                </AppBarSection>
        </AppBar>
    );
}
