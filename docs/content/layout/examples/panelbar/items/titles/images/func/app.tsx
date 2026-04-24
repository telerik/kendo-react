import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

import './styles.css';

const baseSportsIconUrl = "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/";
const baseIconUrl = "https://demos.telerik.com/kendo-ui/content/shared/icons/16/";

const App = () => {

    const sportsIconUrl = (imageName: string) => {
        return baseSportsIconUrl + imageName + ".png";
    }

    const iconUrl = (imageName: string) => {
        return baseIconUrl + imageName + ".png";
    }
    return (
      <div className="panelbar-wrapper">
        <PanelBar>
          <PanelBarItem title="Golf" imageUrl={sportsIconUrl('golf')}>
            <PanelBarItem title="Top News" imageUrl={iconUrl('star')} />
            <PanelBarItem title="Photo Galleries" imageUrl={iconUrl('photo')} />
            <PanelBarItem title="Video Records" imageUrl={iconUrl('video')} />
            <PanelBarItem title="Radio Records" imageUrl={iconUrl('speaker')} />
          </PanelBarItem>
          <PanelBarItem title="Baseball" imageUrl={sportsIconUrl('baseball')}>
            <PanelBarItem title="Top News" imageUrl={iconUrl('star')} />
            <PanelBarItem title="Photo Galleries" imageUrl={iconUrl('photo')} />
            <PanelBarItem title="Video Records" imageUrl={iconUrl('video')} />
            <PanelBarItem title="Radio Records" imageUrl={iconUrl('speaker')} />
          </PanelBarItem>
          <PanelBarItem title="Swimming" imageUrl={sportsIconUrl('swimming')}>
            <PanelBarItem title="Top News" imageUrl={iconUrl('star')} />
            <PanelBarItem title="Photo Galleries" imageUrl={iconUrl('photo')} />
          </PanelBarItem>
          <PanelBarItem title="Snowboarding" imageUrl={sportsIconUrl('snowboarding')}>
            <PanelBarItem title="Photo Galleries" imageUrl={iconUrl('photo')} />
            <PanelBarItem title="Video Records" imageUrl={iconUrl('video')} />
          </PanelBarItem>
        </PanelBar>
      </div>
    )
}

export default App
