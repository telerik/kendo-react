import * as React from 'react';

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import './styles.css';

const App = () => {
  const [selected, setSelected] = React.useState(2);

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <div>
      <TabStrip
        className="myCustomTabStrip"
        selected={selected}
        onSelect={handleSelect}
      >
        <TabStripTab title="Tab 1 Title">
          <p>Tab 1 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 2 Title">
          <p>Tab 2 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 3 Title">
          <p>Tab 3 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 4 Title">
          <p>Tab 4 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 5 Long title so it forces a scrollbar Tab 5 Long title so it forces a scrollbar Tab 5 Long title so it forces a scrollbar">
          <p>Tab 5 Content</p>
        </TabStripTab>
      </TabStrip>

      <TabStrip
        className="myCustomTabStrip2"
        selected={selected}
        onSelect={handleSelect}
      >
        <TabStripTab title="Tab 1 Title">
          <p>Tab 1 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 2 Title">
          <p>Tab 2 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 3 Title">
          <p>Tab 3 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 4 Title">
          <p>Tab 4 Content</p>
        </TabStripTab>
        <TabStripTab title="Tab 5 Long title so it forces a scrollbar Tab 5 Long title so it forces a scrollbar Tab 5 Long title so it forces a scrollbar">
          <p>Tab 5 Content</p>
        </TabStripTab>
      </TabStrip>
    </div>
  );
};

export default App;
