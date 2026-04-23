import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <div className="panelbar-wrapper">
        <PanelBar>
          <PanelBarItem title="First Title" />
          <PanelBarItem title="Second Title" />
        </PanelBar>
      </div>
    )
}

export default App
