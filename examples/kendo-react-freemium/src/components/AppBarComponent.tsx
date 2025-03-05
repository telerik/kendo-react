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
        <AppBar positionMode="sticky" className="bg-surface-alt !p-4" themeColor='inherit'>
            <AppBarSection className="grow gap-4">
                <a href="/">
                    <img src={logo} alt="Logo" className="hidden md:flex" />
                    <img src={compactLogo} alt="Logo" className="flex md:hidden" />
                </a>
            </AppBarSection>

            <AppBarSection className="grow md:grow-0 !hidden sm:!inline-flex">
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
                        className="!w-75"
                    />
            </AppBarSection>

            <AppBarSection className="sm:!hidden">
                <Button fillMode="flat" svgIcon={searchIcon} />
            </AppBarSection>

            <AppBarSection className="gap-2">
                <div onClick={() => setShow(!show)} ref={anchor}>
                    <Avatar rounded="full" type="text" themeColor="primary">JP</Avatar>
                </div>
                <Popover
                    show={show}
                    anchor={anchor.current}
                    position={'bottom'}
                    style={{ width: '120px' }}
                    className="[&_.k-popover-body]:!p-0"
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
                <span className="k-appbar-separator border-border"></span>
                <BadgeContainer>
                    <Button svgIcon={bellIcon} fillMode="flat" />
                    <Badge rounded="full" position="inside" align={{ vertical: 'top', horizontal: 'end' }} themeColor="primary" />
                </BadgeContainer>
            </AppBarSection>
        </AppBar>
    );
}
