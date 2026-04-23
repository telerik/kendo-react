import * as React from 'react'

import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    const [selected, setSelected] = React.useState<number>(1);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    }

    return (
    <TabStrip selected={selected} onSelect={handleSelect}>
      <TabStripTab title="Paris">
        <div className="weather">
          <h4>17<span>&ordm;C</span></h4>
          <p>Rainy weather in Paris.</p>
        </div>
      </TabStripTab>
      <TabStripTab title="New York">
        <div className="weather">
          <h4>29<span>&ordm;C</span></h4>
          <p>Sunny weather in New York.</p>
        </div>
      </TabStripTab>
      <TabStripTab title="London">
        <div className="weather">
          <h4>21<span>&ordm;C</span></h4>
          <p>Sunny weather in London.</p>
        </div>
      </TabStripTab>
      <TabStripTab title="Moscow">
        <div className="weather">
          <h4>16<span>&ordm;C</span></h4>
          <p>Cloudy weather in Moscow.</p>
        </div>
      </TabStripTab>
    </TabStrip>
    )
}

export default App
