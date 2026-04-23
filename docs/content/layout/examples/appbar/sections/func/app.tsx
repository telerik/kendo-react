import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <React.Fragment>
            <AppBar themeColor="primary">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} />
                </AppBarSection>

                <AppBarSpacer style={{ width: 4 }} />

                <AppBarSection>
                    <h1 className="title">Gallery</h1>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <Input placeholder="Search Photos" />
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
            `}</style>
        </React.Fragment>
    );
};

export default App;
