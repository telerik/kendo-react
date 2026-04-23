import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const customStyle: React.CSSProperties = {
    padding: '30px',
    textAlign: 'center'
};

const App = () => {
    return (
      <PanelBar>
        <PanelBarItem expanded={true}>
          <div style={customStyle} className="custom-template">Item content</div>
        </PanelBarItem>
      </PanelBar>
    )
}

export default App


