import * as React from 'react';

import { AppBar, AppBarPositionMode, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { facebookIcon, googlePlusIcon, pinterestIcon, twitterIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const kendokaAvatar = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/suite/kendoka-react.png';

const App = () => {
    const [positionMode, setPositionMode] = React.useState<AppBarPositionMode>('static');
    const modes = ['static', 'sticky', 'fixed'];

    const handleChange = (e: DropDownListChangeEvent) => {
        setPositionMode(e.value);
    };
    return (
        <React.Fragment>
            <AppBar positionMode={positionMode} themeColor="primary">
                <AppBarSection>
                    <Avatar type="image">
                        <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </AppBarSection>

                <AppBarSpacer style={{ width: 8 }} />

                <AppBarSection>
                    <h1 className="links">Follow me</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 8 }} />

                <AppBarSection className="social-section">
                    <Button fillMode="flat" type="button" svgIcon={facebookIcon} />

                    <Button fillMode="flat" type="button" svgIcon={twitterIcon} />

                    <Button fillMode="flat" type="button" svgIcon={pinterestIcon} />

                    <Button fillMode="flat" type="button" svgIcon={googlePlusIcon} />
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <DropDownList data={modes} value={positionMode} onChange={handleChange} />
                </AppBarSection>
            </AppBar>
            <div className="page-content">
                <p>
                    Personal branding is the conscious and intentional effort to create and influence public perception
                    of an individual by positioning them as an authority in their industry, elevating their credibility,
                    and differentiating themselves from the competition, to ultimately advance their career, increase
                    their circle of influence, and have a larger impact.
                </p>
                <p>
                    The process of personal branding involves finding your uniqueness, building a reputation on the
                    things you want to be known for, and then allowing yourself to be known for them. Ultimately, the
                    goal is to create something that conveys a message and that can be monetized.
                </p>
                <p>
                    Whereas some self-help practices focus on self-improvement, personal branding defines success as a
                    form of self-packaging. The term is thought to have originated from an article written by Tom Peters
                    in 1997. In Be Your Own Brand, first published in 1999, marketers David McNally and Karl Speak
                    wrote: 'Your brand is a perception or emotion, maintained by somebody other than you, that describes
                    the total experience of having a relationship with you.'
                </p>
                <p>
                    Individuals sometimes associate personal names or pseudonyms with their businesses. Notably, 45th
                    President of the United States and real estate mogul Donald Trump uses his last name on properties
                    and other enterprises. Celebrities may also leverage their social status to support organizations
                    for financial or social gain. For example, Kim Kardashian endorses brands and products through her
                    media influence.
                </p>
                <p>
                    The relationship between brands and consumers is dynamic and must be constantly refined. This
                    continuous process demonstrates the ambivalence of consumerism. Bop Design estimates that 80% of
                    consumers are more likely to evaluate solutions from the brands they follow on a social network.
                </p>
                <p>
                    A personal brand is a widely-recognized and largely-uniform perception or impression of an
                    individual based on their experience, expertise, competencies, actions and/or achievements within a
                    community, industry, or the marketplace at large.
                </p>
            </div>
            <style>{`
                my-app {
                    padding: 0 !important;
                }
                .links {
                    font-size: 18px;
                    margin: 0;
                }
                .social-section .k-icon {
                    margin: 0 4px;
                }
                .page-content {
                    background: white;
                    padding: 25px 10px;
                    margin-top: 1px;
                }
                .page-content.sticky {
                    padding: 25px 10px;
                }
                .page-content.fixed {
                    padding: 70px 10px;
                }
                .example {
                    display: flex;
                    margin-bottom: 40px;
                }
                .example > div {
                    margin-right: 20px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default App;
