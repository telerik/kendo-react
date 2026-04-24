import * as React from 'react'

import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';

const App = () => {
    const [selected, setSelected] = React.useState<number>(-1);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    }

    return (
    <TabStrip selected={selected} onSelect={handleSelect}>
      <TabStripTab title="Tab 1 Title">
        <p>Tab 1 Content</p>
      </TabStripTab>
      <TabStripTab title="Tab 2 Title">
        <p>Tab 2 Content</p>
      </TabStripTab>
      <TabStripTab disabled={true} title="Tab 3 Title">
        <p>Tab 3 Content</p>
      </TabStripTab>
    </TabStrip>
    )
}

export default App
