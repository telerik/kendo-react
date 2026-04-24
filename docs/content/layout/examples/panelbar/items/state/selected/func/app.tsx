import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <div className="panelbar-wrapper">
        <PanelBar>
          <PanelBarItem title="Team" />
          <PanelBarItem title="Projects" selected={true} />
          <PanelBarItem title="Programs" />
          <PanelBarItem title="Communication" />
        </PanelBar>
      </div>
    )
}

export default App
