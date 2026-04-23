import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const kendokaAvatar = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/suite/kendoka-react.png';

const App = () => {
    return (
        <React.Fragment>
            <AppBar themeColor="primary">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} />
                </AppBarSection>

                <AppBarSpacer style={{ width: 4 }} />

                <AppBarSection>
                    <h1 className="title">KendoReact</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                <AppBarSection>
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

                <AppBarSection className="actions">
                    <Button type="button" fillMode="flat" svgIcon={bellIcon}>
                        <BadgeContainer>
                            <Badge rounded="full" themeColor="primary" size="small" position="inside" />
                        </BadgeContainer>
                    </Button>
                </AppBarSection>

                <AppBarSection>
                    <span className="k-appbar-separator" />
                </AppBarSection>

                <AppBarSection>
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
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default App;
