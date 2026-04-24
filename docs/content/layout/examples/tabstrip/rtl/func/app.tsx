import * as React from 'react';;
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import { Tab, tabs } from './tabs';
import './styles.css';

const Title = (props: { tab: Tab }) => {
    return (
    <div>
      <img className="tab-image" src={props.tab.image} alt="KendoReact TabStrip Image" />
      <span>{props.tab.title}</span>
    </div>
    );
};

const App = () => {
    const [selected, setSelected] = React.useState<number>(0);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    return (
    <div className='demo-wrapper'>
      <TabStrip
        dir='rtl'
        selected={selected}
        onSelect={handleSelect}
        scrollable={true}
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
    </div>
    );
};

export default App;
