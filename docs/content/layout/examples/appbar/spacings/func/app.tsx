import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <React.Fragment>
            <AppBar themeColor="primary">
                <AppBarSection>
                    <Button fillMode="flat" svgIcon={menuIcon} type="button" />
                </AppBarSection>

                <AppBarSpacer style={{ width: 4 }} />

                <AppBarSection>
                    <h1 className="title">My Playlist</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 68 }} />

                <AppBarSection>
                    <Input placeholder="Search Songs" />
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={bellIcon}>
                        <BadgeContainer>
                            <Badge themeColor="info" size="small">
                                9+
                            </Badge>
                        </BadgeContainer>
                    </Button>
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
                .k-appbar .k-appbar-separator {
                    margin: 0 8px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default App;
