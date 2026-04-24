import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <div className="panelbar-wrapper">
        <PanelBar animation={false}>
          <PanelBarItem title="Team">
            <PanelBarItem title="Team 1" />
            <PanelBarItem title="Team 2" />
            <PanelBarItem title="Team 3" />
          </PanelBarItem>
          <PanelBarItem title="Projects" animation={true}>
            <PanelBarItem title="Business Plan" />
            <PanelBarItem title="Forecast" />
            <PanelBarItem title="OKRs" />
          </PanelBarItem>
        </PanelBar>
      </div>
    )
}

export default App
