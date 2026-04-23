import * as React from 'react'

import { Splitter, SplitterOnChangeEvent, SplitterPaneProps } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    const [panes, setPanes] = React.useState<SplitterPaneProps[]>([
        { size: '200px' },
        {},
        { size: '20%', resizable: false }
    ]);

    const onChange = (event: SplitterOnChangeEvent) => {
        setPanes(event.newState);
    };

    return (
    <div>
      <Splitter
        style={{ height: 200 }}
        panes={panes}
        onChange={onChange}
          >
        <div>
          <h3>Left pane</h3>
        </div>
        <h3>Middle pane</h3>
        <div>
          <h3>Right pane</h3>
          <p>Not resizable</p>
        </div>
      </Splitter>
    </div>
    );
}
export default App;
