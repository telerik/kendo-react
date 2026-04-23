import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const avatarImage = 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RICSU.jpg';

const App = () => {
    const [logOut, setLogout] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setLogout(event.value);
    };

    return (
        <React.Fragment>
            <Label>
                Logout&nbsp;&nbsp;
                <Switch onChange={handleSwitchChange} />
            </Label>
            <br />
            <br />
            <AppBar themeColor="primary">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} />
                </AppBarSection>

                <AppBarSpacer style={{ width: 4 }} />

                <AppBarSection>
                    <h1 className="title">Albums</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                <AppBarSpacer />

                <AppBarSection>
                    {!logOut && (
                        <Avatar type="image">
                            <img src={avatarImage} alt="KendoReact Layout  Avatar" />
                        </Avatar>
                    )}
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
