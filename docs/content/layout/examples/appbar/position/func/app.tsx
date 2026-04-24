import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { facebookIcon, googlePlusIcon, menuIcon, pinterestIcon, twitterIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <React.Fragment>
            <AppBar themeColor="primary">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} />
                </AppBarSection>

                <AppBarSpacer style={{ width: 8 }} />

                <AppBarSection>
                    <h1 className="title">Weather News</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                <AppBarSection>
                    <Input placeholder="Search" />
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection className="social-section">
                    <Button type="button" fillMode="flat" svgIcon={facebookIcon} />
                    <Button type="button" fillMode="flat" svgIcon={twitterIcon} />
                    <Button type="button" fillMode="flat" svgIcon={pinterestIcon} />
                    <Button type="button" fillMode="flat" svgIcon={googlePlusIcon} />
                </AppBarSection>
            </AppBar>
            <div className="page-content">
                <p>
                    Light variable wind or sea breeze. Partly cloudy with sunny spells today, but patches of fog in some
                    places by the coast and some afternoon rainshowerstowards the east. Day time temperatures 10 to 16
                    deg. C.
                </p>
                <p>
                    Westerly or variable wind 3-8 m/s tomorrow. Mostly cloudy and locally some light rain in the west
                    part of Iceland. Partly cloudy in other parts, but fog near the Eastfjords. Temperature 10 to 17
                    deg. C, warmest in Southeast-Iceland.
                </p>
                <p>
                    Westerly 5-10 m/s and cloudy in the west part. Light variable wind and widely fair in other parts of
                    the country, but fog in places by the north and east coast. Temperature 10 to 17 deg. C., warmest in
                    the southeast.
                </p>
                <p>
                    On Friday and Saturday: Westerly wind 3-10 m/s. Mostly cloudy and light precipitation, but mainly
                    dry in the east. Temperature 10 to 15 deg. C.
                </p>
            </div>
            <AppBar position={'bottom'} themeColor={'dark'}>
                <AppBarSpacer style={{ width: 150 }} />

                <AppBarSection>
                    <ul>
                        <li>
                            <span>What's New</span>
                        </li>
                        <li>
                            <span>Subscriptions</span>
                        </li>
                        <li>
                            <span>Successful Stories</span>
                        </li>
                        <li>
                            <span>About Us</span>
                        </li>
                        <li>
                            <span>Contacts</span>
                        </li>
                    </ul>
                </AppBarSection>

                <AppBarSpacer style={{ width: 100 }} />
            </AppBar>
            <style>{`
                my-app {
                    padding: 0 !important;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                .social-section .k-icon {
                    margin: 0 4px;
                }
                ul {
                    font-size: 12px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 12px;
                }
                li:hover {
                    cursor: pointer;
                    color: #ccc;
                }
                .page-content {
                    height: 100%;
                    background: white;
                    padding: 20px 10px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default App;
