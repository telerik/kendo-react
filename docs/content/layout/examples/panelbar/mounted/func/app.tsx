import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <PanelBar keepItemsMounted={true} >
        <PanelBarItem title="Team" >
          <PanelBarItem title="John Dow" />
          <PanelBarItem title="Ann brown" />
          <PanelBarItem title="Dave Johnson" />
        </PanelBarItem>
        <PanelBarItem title="Projects" expanded={true}>
          <PanelBarItem title="Business Plan" />
          <PanelBarItem title="Forecast" />
          <PanelBarItem title="OKRs" />
        </PanelBarItem>
        <PanelBarItem title="Programs" />
        <PanelBarItem title="Communication" />
      </PanelBar>
    )
}

export default App;
