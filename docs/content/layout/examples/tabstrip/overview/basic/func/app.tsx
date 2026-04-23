import * as React from 'react';
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import { Tab, tabs } from './tabs';
import './styles.css';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const position = ['split', 'start', 'end', 'around', 'before', 'after'];
const visibility = ['auto', 'visible', 'hidden'];
const sizes = ['small', 'medium', 'large', 'null'];
const tabPositions = ['top', 'bottom', 'left', 'right'];

const Title = (props: { tab: Tab }) => {
    return (
        <>
            <img className="tab-image" src={props.tab.image} alt="KendoReact TabStrip Image" />
            <span>{props.tab.title}</span>
        </>
    );
};

const App = () => {
    const [selected, setSelected] = React.useState<number>(0);
    const [btnPosition, setBtnPosition] = React.useState<'split' | 'start' | 'end' | 'around' | 'before' | 'after'>(
        'split'
    );
    const [btnVisibility, setBtnVisibility] = React.useState<'auto' | 'visible' | 'hidden'>('auto');
    const [size, setSize] = React.useState<'small' | 'medium' | 'large' | null>('medium');
    const [tabPosition, setTabPosition] = React.useState<'top' | 'bottom' | 'left' | 'right'>('top');

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    const handlePositionChange = (e: DropDownListChangeEvent) => {
        setBtnPosition(e.value);
    };

    const handleVisibilityChange = (e: DropDownListChangeEvent) => {
        setBtnVisibility(e.value);
    };

    const handleSizeChange = (e: DropDownListChangeEvent) => {
        setSize(e.value);
    };

    const handleTabPositionChange = (e: DropDownListChangeEvent) => {
        setTabPosition(e.value);
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-3 col-md-2">
                    <h6>Change tabs position: </h6>
                    <DropDownList
                        data={position}
                        defaultValue="split"
                        onChange={handlePositionChange}
                        style={{ maxWidth: 150 }}
                    />
                </div>
                <div className="col-sm-3 col-md-2">
                    <h6>Change tabs visibility: </h6>
                    <DropDownList
                        data={visibility}
                        defaultValue="auto"
                        onChange={handleVisibilityChange}
                        style={{ maxWidth: 150 }}
                    />
                </div>
                <div className="col-sm-3 col-md-2">
                    <h6>Change tabs size: </h6>
                    <DropDownList
                        data={sizes}
                        defaultValue="medium"
                        onChange={handleSizeChange}
                        style={{ maxWidth: 150 }}
                    />
                </div>
                <div className="col-sm-3 col-md-2">
                    <h6>Change tab position: </h6>
                    <DropDownList
                        data={tabPositions}
                        defaultValue="top"
                        onChange={handleTabPositionChange}
                        style={{ maxWidth: 150 }}
                    />
                </div>
            </div>
            <hr />
            <TabStrip
                selected={selected}
                onSelect={handleSelect}
                scrollable={true}
                size={size}
                tabPosition={tabPosition}
                scrollButtons={btnVisibility}
                scrollButtonsPosition={btnPosition}
                style={{ width: '350px', userSelect: 'none' }}
            >
                {tabs.map((tab, index) => {
                    return (
                        <TabStripTab title={<Title tab={tab} />} key={index}>
                            <div className="wrapper">
                                <div className="main">
                                    <img src={tab.contentImage} alt="KendoReact TabStrip Content Image" />
                                    <div className="degree">
                                        <span className="large-degree">{tab.currentDegree}</span>
                                        <span>{tab.degreeRange}</span>
                                    </div>
                                </div>
                                <div className="details">
                                    <span style={{ fontWeight: 'bolder' }}>{tab.location}</span>
                                    <span>Chance of Rain: {tab.rainChance}%</span>
                                    <span>Humidity: {tab.humidity}%</span>
                                </div>
                            </div>
                        </TabStripTab>
                    );
                })}
            </TabStrip>
        </React.Fragment>
    );
};

export default App;
