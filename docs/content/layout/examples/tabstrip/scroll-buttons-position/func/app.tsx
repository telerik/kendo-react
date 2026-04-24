import * as React from 'react';
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import { Tab, tabs } from './tabs';
import './styles.css';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const data = ['split', 'start', 'end'];

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
    const [btnPosition, setBtnPosition] = React.useState<'split' | 'start' | 'end'>('split');

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    const handleChange = (e: DropDownListChangeEvent) => {
        setBtnPosition(e.value);
    };

    return (
        <React.Fragment>
            <div className="example-config">
                <h6>Change tabs position: </h6>
                <DropDownList data={data} defaultValue="split" onChange={handleChange} style={{ maxWidth: 150 }} />
            </div>
            <hr />
            <TabStrip
                selected={selected}
                onSelect={handleSelect}
                scrollable={true}
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
