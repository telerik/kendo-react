import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, heartIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <React.Fragment>
            <AppBar themeColor="primary">
                <AppBarSection>
                    <h1 className="title">Bookings</h1>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <Button fillMode="flat" type="button" svgIcon={bellIcon}>
                        <BadgeContainer>
                            <Badge rounded="full" themeColor="info" size="small" position="inside" />
                        </BadgeContainer>
                    </Button>
                    <span className="k-appbar-separator" />
                    <Button fillMode="flat" type="button" svgIcon={heartIcon} />
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
                .k-icon {
                    font-size: 18px;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
                .k-appbar .k-appbar-separator {
                    margin: 0 8px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default App;
