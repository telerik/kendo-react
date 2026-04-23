import * as React from 'react'

import { PanelBar, PanelBarItem, PanelBarSelectEventArguments } from '@progress/kendo-react-layout';

const App = () => {
    const onSelect = (event: PanelBarSelectEventArguments) => {
        console.log(event.target.props.customProp);
    }
    return (
      <PanelBar onSelect={onSelect}>
        <PanelBarItem title="First Item" customProp="firstItemCustomProp" />
        <PanelBarItem title="Second Item" customProp="secondItemCustomProp" />
      </PanelBar>
    )
}
export default App;
