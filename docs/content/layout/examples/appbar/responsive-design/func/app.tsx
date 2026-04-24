import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

import { Avatar, AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Popup } from '@progress/kendo-react-popup';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';

const kendokaAvatar = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/suite/kendoka-react.png';

const App = () => {
    const [show, setShow] = React.useState(false);
    const anchor = React.useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setShow(!show);
    };
    return (
        <React.Fragment>
            <AppBar themeColor="primary">
                <AppBarSection className="title">
                    <h1 className="title">KendoReact</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                <AppBarSection className="appbar-items">
                    <ul>
                        <li>
                            <span>What's New</span>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                        <li>
                            <span>Contacts</span>
                        </li>
                    </ul>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection className="user-actions">
                    <Button fillMode="flat" type="button" svgIcon={bellIcon}>
                        <BadgeContainer>
                            <Badge rounded="small" themeColor="info" size="small" position="inside" />
                        </BadgeContainer>
                    </Button>
                    <span className="k-appbar-separator" />
                </AppBarSection>
                <AppBarSection>
                    <div ref={anchor}>
                        <Button fillMode="flat" onClick={handleClick} type="button" svgIcon={menuIcon} />
                    </div>
                    {show && (
                        <Popup anchor={anchor.current} show={show} style={{ marginLeft: -10 }}>
                            <div className="content">
                                <ul>
                                    <li>
                                        <span>What's New</span>
                                    </li>
                                    <li>
                                        <span>About</span>
                                    </li>
                                    <li>
                                        <span>Contacts</span>
                                    </li>
                                    <li>
                                        <span>My Profile</span>
                                    </li>
                                    <li>
                                        <span>Notifications</span>
                                    </li>
                                </ul>
                            </div>
                        </Popup>
                    )}
                    <Avatar type="image">
                        <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </AppBarSection>
            </AppBar>
            <style>{`
            body {
                background: #dfdfdf;
            }
            .title {
                font-size: 18px;
                margin: 0;
            }
            .k-badge-container {
                margin-right: 8px;
            }
            ul {
                font-size: 14px;
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: flex;
            }
            li {
                margin: 0 9px;
            }
            li:hover {
                cursor: pointer;
                color: #84cef1;
            }
            .k-appbar-section {
                display: flex;
            }
            .content li {
                margin: 0;
                padding: 6px 5px;
            }
            .content ul {
                display: block;
            }
            .content {
                padding: 4px 8px;
            }
            @media only screen and (max-width: 600px) {
                .appbar-items,
                .user-actions,
                .k-avatar,
                .k-appbar-separator {
                    display: none;
                }
                .overflow-button {
                    display: block;
                }
                .content ul li:last-child {
                    display: block;
                }
            }
            /* Small devices (portrait tablets and large phones, 600px and up) */
            @media only screen and (min-width: 600px) {
                .appbar-items,
                .user-actions .k-badge-container,
                .k-avatar,
                .k-appbar-separator {
                    display: none;
                }
                .overflow-button {
                    display: block;
                }
                .content ul li:last-child {
                    display: none;
                }
            }
            /* Medium devices (landscape tablets, 768px and up) */
            @media only screen and (min-width: 768px) {
                .appbar-items,
                .user-actions .k-badge-container,
                .k-appbar-separator,
                .k-avatar {
                    display: block;
                }
                .overflow-button {
                    display: none;
                }
            }
            /* Large devices (laptops/desktops, 992px and up) */
            @media only screen and (min-width: 992px) {}
            `}</style>
        </React.Fragment>
    );
};

export default App;
