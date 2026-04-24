import * as React from 'react'

import { PanelBar, PanelBarItem, PanelBarSelectEventArguments } from '@progress/kendo-react-layout';

const App = () => {
    const handleSelect = (e: PanelBarSelectEventArguments) => {
        console.log(e.target.props.myCustomProp);
    }
    return (
      <PanelBar onSelect={handleSelect}>
        <PanelBarItem title="Item 1" myCustomProp="first item custom prop" />
        <PanelBarItem title="Item 2" myCustomProp="second item custom prop" />
      </PanelBar>
    )
}

export default App
