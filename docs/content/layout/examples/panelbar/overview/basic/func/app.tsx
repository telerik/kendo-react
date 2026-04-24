import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    const imageUrl = (imageName: string) => {
        let baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
        return baseImageUrl + imageName + '.jpg';
    }
    return (
    <div className="panelbar-wrapper">
      <PanelBar >
        <PanelBarItem expanded={true} title="My Teammates">
          <div>
            <div className="teamMate">
              <img src={imageUrl('andrew')} alt="KendoReact PanelBar Andrew Fuller image" />
              <span className="mate-info">
                <h2>Andrew Fuller</h2>
                <p>Team Lead</p>
              </span>
            </div>
            <div className="teamMate">
              <img src={imageUrl('nancy')} alt="KendoReact PanelBar Nancy Leverling image" />
              <span className="mate-info">
                <h2>Nancy Leverling</h2>
                <p>Sales Associate</p>
              </span>
            </div>
            <div className="teamMate">
              <img src={imageUrl('robert')} alt="KendoReact PanelBar Robert King image" />
              <span className="mate-info">
                <h2>Robert King</h2>
                <p>Business System Analyst</p>
              </span>
            </div>
          </div>
        </PanelBarItem>
        <PanelBarItem title={'Projects'} >
          <PanelBarItem title={'New Business Plan'} />
          <PanelBarItem title={'Sales Forecasts'}  >
            <PanelBarItem title={'Q1 Forecast'} />
            <PanelBarItem title={'Q2 Forecast'} />
            <PanelBarItem title={'Q3 Forecast'} />
            <PanelBarItem title={'Q4 Forecast'} />
          </PanelBarItem >
          <PanelBarItem title={'Sales Reports'} />
        </PanelBarItem>
        <PanelBarItem title="Programs">
          <PanelBarItem title="Monday" />
          <PanelBarItem title="Tuesday" />
          <PanelBarItem title="Wednesday" />
          <PanelBarItem title="Thursday" />
          <PanelBarItem title="Friday" />
        </PanelBarItem>
        <PanelBarItem title="Communication" disabled={true} />
      </PanelBar>
    </div>
    );
}
export default App;
