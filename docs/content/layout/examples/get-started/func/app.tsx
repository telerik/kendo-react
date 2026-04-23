import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const App = () => {
    return (
      <PanelBar>
        <PanelBarItem title={'Teams'}>
          <PanelBarItem title={'Team 1'} />
          <PanelBarItem title={'Team 2'} />
        </PanelBarItem>
        <PanelBarItem title="Releases">
          <PanelBarItem title="Q1 2021" />
          <PanelBarItem title="Q2 2021" />
        </PanelBarItem>
      </PanelBar>
    );
}

export default App
